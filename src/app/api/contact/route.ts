import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}




export async function POST(
    req: Request
) {
    const body = await req.json();
    const { name, email, message }: ContactFormData = body;

    try {
        // Save to Firestore
        await addDoc(collection(db, "contact_messages"), {
            name,
            email,
            message,
            timestamp: serverTimestamp(),
        });

        // Send Email Notification (Optional)
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER as string,  // Your email
                pass: process.env.EMAIL_PASS as string,  // App password
            },
        });

        await transporter.sendMail({
            from: `"Z9Trade Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL as string,  // Admin email
            subject: "New Contact Form Message",
            text: `From: ${name} <${email}>\n\nMessage: ${message}`,
        });

        Response.json({ message: "Message sent successfully" }, { status: 201 });

    } catch (error) {
        Response.json({ message: "Error processing message", error }, { status: 500 });
    }
}
