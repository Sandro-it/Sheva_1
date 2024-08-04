import emailjs from "emailjs-com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { from_name, from_email, message } = req.body;

    try {
      const result = await emailjs.send(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        {
          from_name,
          from_email,
          message,
        },
        process.env.EMAIL_USER_ID
      );
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
