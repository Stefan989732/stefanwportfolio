import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        error: "RESEND_API_KEY missing from .env.local" 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "stefan.wurpel@hotmail.com",
      replyTo: email, 
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (error) {
      return NextResponse.json({ 
        success: false, 
        error: error.message || "Resend API error" 
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: `Server error: ${error instanceof Error ? error.message : String(error)}` 
    });
  }
}
