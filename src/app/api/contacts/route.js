import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, company, phone, email, subject, message, theme } = await request.json();

        // Validation
        if (!name || !phone || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Get data from .env (Vercel Environment Variables)
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Telegram credentials not found');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Format message for Telegram
        const currentDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Tashkent',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const telegramMessage = `
💬 <b>NEW MESSAGE FROM WEBSITE</b> 💬

━━━━━━━━━━━━━━━━━━━━
📋 <b>CLIENT INFORMATION</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${escapeHtml(name)}
🏢 <b>Company:</b> ${escapeHtml(company || 'Not specified')}
📱 <b>Phone:</b> ${escapeHtml(phone)}
📧 <b>Email:</b> ${escapeHtml(email)}

━━━━━━━━━━━━━━━━━━━━
📝 <b>MESSAGE DETAILS</b>
━━━━━━━━━━━━━━━━━━━━
🏷 <b>Subject:</b> ${escapeHtml(subject)}
📄 <b>Message:</b>
${escapeHtml(message)}

━━━━━━━━━━━━━━━━━━━━
⏰ <b>Time:</b> ${currentDate}
🔖 <b>Form Type:</b> ${theme || 'CONTACTS (FOR FEEDBACK)'}
━━━━━━━━━━━━━━━━━━━━

<a href="tel:${phone.replace(/[^\d+]/g, '')}">📞 Call client</a> | <a href="mailto:${email}">✉️ Email client</a>
        `;

        // Send to Telegram
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
                { error: 'Failed to send message to Telegram' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}

// HTML escape function for security
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

// Handle OPTIONS request for CORS
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