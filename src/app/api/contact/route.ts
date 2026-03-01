import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, channelLink, budget, helpText } = body;

        if (!name || !email || !helpText) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const message = await prisma.contactMessage.create({
            data: {
                name,
                email,
                channelLink: channelLink || '',
                budget: budget || '',
                helpText,
            },
        });

        return NextResponse.json(
            { message: 'Message sent successfully!', data: message },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            { message: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
