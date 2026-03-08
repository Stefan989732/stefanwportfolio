// import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: "stefan.wurpel@hotmail.com",
//       subject: `Portfolio message from ${name}`,
//       text: message,
//       html: `
//         <h3>New contact form message</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//     });

    return Response.json({ success: true });

//   } catch (error) {
//     return Response.json({ success: false, error });
  }
// }