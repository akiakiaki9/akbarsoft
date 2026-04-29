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
            timeZone: 'Asia/Tashkent'
        });

        const telegramMessage = `
🚨 <b>НОВАЯ ЗАЯВКА НА СОЗДАНИЕ САЙТА</b> 🚨

━━━━━━━━━━━━━━━━━━━━
📋 <b>ИНФОРМАЦИЯ О КЛИЕНТЕ</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${escapeMarkdown(name)}
📧 <b>Email:</b> ${escapeMarkdown(email)}
📱 <b>Телефон:</b> ${escapeMarkdown(phone)}

━━━━━━━━━━━━━━━━━━━━
🎯 <b>ДЕТАЛИ ПРОЕКТА</b>
━━━━━━━━━━━━━━━━━━━━
💼 <b>Услуга:</b> ${escapeMarkdown(service)}
💰 <b>Бюджет:</b> ${escapeMarkdown(budget)}
📝 <b>Описание проекта:</b>
${escapeMarkdown(message)}

━━━━━━━━━━━━━━━━━━━━
⏰ <b>Время заявки:</b> ${currentDate}
━━━━━━━━━━━━━━━━━━━━

<a href="mailto:${email}">📧 Связаться с клиентом</a>
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

        // Отправляем подтверждение клиенту (опционально)
        await sendConfirmationEmail(name, email);

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

// Функция для экранирования Markdown
function escapeMarkdown(text) {
    if (!text) return '';
    return text
        .replace(/_/g, '\\_')
        .replace(/\*/g, '\\*')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/~/g, '\\~')
        .replace(/`/g, '\\`')
        .replace(/>/g, '\\>')
        .replace(/#/g, '\\#')
        .replace(/\+/g, '\\+')
        .replace(/-/g, '\\-')
        .replace(/=/g, '\\=')
        .replace(/\|/g, '\\|')
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}')
        .replace(/\./g, '\\.')
        .replace(/\!/g, '\\!');
}

// Функция отправки подтверждения на email (опционально)
async function sendConfirmationEmail(name, email) {
    try {
        const emailApiKey = process.env.EMAIL_API_KEY;
        if (!emailApiKey) return;

        // Здесь можно интегрировать любой email сервис (SendGrid, Mailgun и т.д.)
        // Пример с использованием fetch к вашему email провайдеру

        console.log(`Confirmation email would be sent to ${email}`);
    } catch (error) {
        console.error('Email sending error:', error);
    }
}