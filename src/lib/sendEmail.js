import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Agora <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error: ", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Emnail send failed: ", err);
    return false;
  }
}
