import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { parse } from "json2csv";
import { NextApiRequest, NextApiResponse } from "next";

interface Subscriber {
    email: string;
    timestamp: string;
}

interface ErrorResponse {
    message: string;
    error?: unknown;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const snapshot = await getDocs(collection(db, "waiting_list"));
        const subscribers: Subscriber[] = snapshot.docs.map(doc => ({
            email: doc.data().email,
            timestamp: doc.data().timestamp.toDate().toISOString(),
        }));

        const csv = parse(subscribers);
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=subscribers.csv");
        res.status(200).send(csv);
    } catch (error) {
        const errorResponse: ErrorResponse = { message: "Error generating CSV", error };
        res.status(500).json(errorResponse);
    }
}
