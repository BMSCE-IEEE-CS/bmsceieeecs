import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}`,
      to: process.env.EMAIL_ID,
      subject: "New response from website",
      text: message,
      html: `
                <p><strong>From: </strong>${name} (${email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
