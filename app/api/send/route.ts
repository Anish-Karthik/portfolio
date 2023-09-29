// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { from, subject, text, react } = await request.json();
    const data = await resend.emails.send({
      from,
      to: "anishkarthik.54321@gmail.com",
      subject,
      text,
    });
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
