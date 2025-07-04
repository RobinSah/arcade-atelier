export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send notification to your team
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: 'newsletter@thearcadeatelier.com',
      to: ['info@thearcadeatelier.com'],
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 16px;">
              <strong>New subscriber:</strong> ${email}
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              📧 Add this email to your newsletter list<br>
              🕒 Subscribed at: ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
            <p>This notification was sent from the Arcade Atelier website newsletter signup.</p>
          </div>
        </div>
      `,
    });

    // Send welcome email to subscriber
    const { data: welcomeData, error: welcomeError } = await resend.emails.send({
      from: 'newsletter@thearcadeatelier.com',
      to: [email],
      subject: 'Welcome to Arcade Atelier Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Arcade Atelier!</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Thank you for subscribing to our newsletter</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #374151; margin-top: 0;">Engineering with Purpose and Passion</h2>
            
            <p style="color: #6b7280; line-height: 1.6;">
              You'll now receive our latest updates on:
            </p>
            
            <ul style="color: #6b7280; line-height: 1.8;">
              <li>🏗️ Latest BIM and CAD industry insights</li>
              <li>📐 Expert tips and best practices</li>
              <li>🚀 New service offerings and capabilities</li>
              <li>📊 Project showcases and success stories</li>
            </ul>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #2563eb;">
              <p style="margin: 0; color: #1e40af; font-weight: 500;">
                💡 Pro Tip: Always check your BIM file compatibility before sharing!
              </p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Have questions? Reply to this email or contact us at 
              <a href="mailto:info@thearcadeatelier.com" style="color: #2563eb;">info@thearcadeatelier.com</a>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; font-size: 12px; color: #9ca3af;">
            <p>© 2024 Arcade Atelier. All rights reserved.</p>
            <p>Engineering with Purpose and Passion</p>
          </div>
        </div>
      `,
    });

    if (notificationError || welcomeError) {
      console.error('Resend error:', { notificationError, welcomeError });
      return NextResponse.json(
        { error: 'Failed to send emails' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter',
        notificationId: notificationData?.id,
        welcomeId: welcomeData?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}