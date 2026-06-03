import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, phone, service, budget, message } = await request.json();

        // Валидация
        if (!name || !email || !phone || !service || !budget || !message) {
            return NextResponse.json(
                { error: 'Все поля обязательны для заполнения' },
                { status: 400 }
            );
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Введите корректный email адрес' },
                { status: 400 }
            );
        }

        // Получаем данные из .env.local
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Telegram credentials not found');
            return NextResponse.json(
                { error: 'Ошибка конфигурации сервера' },
                { status: 500 }
            );
        }

        // Формируем сообщение для Telegram
        const currentDate = new Date().toLocaleString('ru-RU', {
            timeZone: 'Asia/Tashkent',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const telegramMessage = `
🚨 <b>НОВАЯ ЗАЯВКА НА СОЗДАНИЕ САЙТА</b> 🚨

━━━━━━━━━━━━━━━━━━━━
📋 <b>ИНФОРМАЦИЯ О КЛИЕНТЕ</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${escapeHtml(name)}
📧 <b>Email:</b> ${escapeHtml(email)}
📱 <b>Телефон:</b> ${escapeHtml(phone)}

━━━━━━━━━━━━━━━━━━━━
🎯 <b>ДЕТАЛИ ПРОЕКТА</b>
━━━━━━━━━━━━━━━━━━━━
💼 <b>Услуга:</b> ${escapeHtml(service)}
💰 <b>Бюджет:</b> ${escapeHtml(budget)}
📝 <b>Описание проекта:</b>
${escapeHtml(message)}

━━━━━━━━━━━━━━━━━━━━
⏰ <b>Время заявки:</b> ${currentDate}
━━━━━━━━━━━━━━━━━━━━

<a href="mailto:${email}">📧 Связаться с клиентом</a> | <a href="tel:${phone}">📞 Позвонить клиенту</a>
        `;

        // Отправляем в Telegram
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: 'HTML',
                disable_web_page_preview: true,
            }),
        });

        const telegramResponse = await response.json();

        if (!response.ok) {
            console.error('Telegram API error:', telegramResponse);
            return NextResponse.json(
                { error: 'Ошибка отправки в Telegram' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Заявка успешно отправлена' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500 }
        );
    }
}

function escapeHtml(text) {
    if (!text) return '';
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}