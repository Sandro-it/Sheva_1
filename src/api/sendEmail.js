// import emailjs from "emailjs-com";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { from_name, from_email, message } = req.body;

//     // Додаємо логування змінних середовища
//     console.log("Service ID:", process.env.EMAIL_SERVICE_ID);
//     console.log("Template ID:", process.env.EMAIL_TEMPLATE_ID);
//     console.log("User ID:", process.env.EMAIL_USER_ID);

//     try {
//       const result = await emailjs.send(
//         process.env.EMAIL_SERVICE_ID,
//         process.env.EMAIL_TEMPLATE_ID,
//         {
//           from_name,
//           from_email,
//           message,
//         },
//         process.env.EMAIL_USER_ID
//       );
//       res.status(200).json({ success: true, result });
//     } catch (error) {
//       console.error("Error sending email:", error); // Логування помилки
//       res.status(500).json({ success: false, error });
//     }
//   } else {
//     res.status(405).json({ message: "Only POST requests are allowed" });
//   }
// }
