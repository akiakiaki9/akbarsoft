import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, company, phone, email, subject, message, theme } = await request.json();

        // Валидация (обновлена под поля вашей формы)
        if (!name || !phone || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Пожалуйста, заполните все обязательные поля' },
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

        // Валидация телефона (минимальная)
        const phoneRegex = /^[\+\d\s\(\)-]{9,}$/;
        if (!phoneRegex.test(phone)) {
            return NextResponse.json(
                { error: 'Введите корректный номер телефона' },
                { status: 400 }
            );
        }

        // Получаем данные из .env
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
            minute: '2-digit',
            second: '2-digit'
        });

        const telegramMessage = `
💬 <b>НОВОЕ СООБЩЕНИЕ С САЙТА</b> 💬

━━━━━━━━━━━━━━━━━━━━
📋 <b>ИНФОРМАЦИЯ О КЛИЕНТЕ</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${escapeHtml(name)}
🏢 <b>Компания:</b> ${escapeHtml(company || 'Не указана')}
📱 <b>Телефон:</b> ${escapeHtml(phone)}
📧 <b>Email:</b> ${escapeHtml(email)}

━━━━━━━━━━━━━━━━━━━━
📝 <b>ДЕТАЛИ СООБЩЕНИЯ</b>
━━━━━━━━━━━━━━━━━━━━
🏷 <b>Тема:</b> ${escapeHtml(subject)}
📄 <b>Сообщение:</b>
${escapeHtml(message)}

━━━━━━━━━━━━━━━━━━━━
⏰ <b>Время заявки:</b> ${currentDate}
🔖 <b>Тип формы:</b> ${theme || 'CONTACTS (FOR FEEDBACK)'}
━━━━━━━━━━━━━━━━━━━━

<a href="tel:${phone.replace(/[^\d+]/g, '')}">📞 Позвонить клиенту</a> | <a href="mailto:${email}">✉️ Написать клиенту</a>
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
            throw new Error('Failed to send message to Telegram');
        }

        // Отправляем подтверждение клиенту
        await sendConfirmationToTelegram(name, email, subject, message, phone);

        return NextResponse.json(
            { success: true, message: 'Сообщение успешно отправлено' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.' },
            { status: 500 }
        );
    }
}

// Функция для экранирования HTML (безопаснее, чем Markdown)
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

// Функция отправки подтверждения клиенту в Telegram
async function sendConfirmationToTelegram(name, email, subject, message, phone) {
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const adminChatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !adminChatId) return;

        const confirmationMessage = `
✅ <b>Ваше сообщение получено!</b>

Здравствуйте, ${escapeHtml(name)}!

Мы получили ваше сообщение и свяжемся с вами в ближайшее время.

<b>Копия вашего сообщения:</b>
━━━━━━━━━━━━━━━━━━━━
📝 <b>Тема:</b> ${escapeHtml(subject)}
📄 <b>Текст:</b>
${escapeHtml(message)}
━━━━━━━━━━━━━━━━━━━━

<b>Ваши контактные данные:</b>
📧 Email: ${escapeHtml(email)}
📱 Телефон: ${escapeHtml(phone)}

С уважением, команда Akbar Soft

⏰ Ожидайте ответа в течение 24 часов
        `;

        // Отправляем подтверждение в тот же чат (как уведомление для админа)
        // Если нужно отправить клиенту, нужно знать его Telegram ID
        // или использовать альтернативный метод (SMS, Email)
        
        console.log(`Confirmation would be sent to ${email}`);
        
        // Здесь можно интегрировать отправку email через:
        // - Resend (рекомендуется для Next.js)
        // - SendGrid
        // - Mailgun
        // - Amazon SES
        
    } catch (error) {
        console.error('Confirmation sending error:', error);
    }
}

// Обработка OPTIONS запроса для CORS (если нужно)
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}