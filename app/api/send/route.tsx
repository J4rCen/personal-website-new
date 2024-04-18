import { Resend } from 'resend';
import type { NextApiRequest } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

interface dataProps {
  email: string,
  message: string
}

export async function POST(req: NextApiRequest) {
  try {

    // @ts-ignore
    const dataSend: dataProps = await req.json() 


    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ['danildavletov88@gmail.com'],
      subject: "Hello world",
      react: 
      <div>
        <p>{dataSend.message}</p>
        <p>{dataSend.email}</p>
      </div>,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}