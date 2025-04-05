"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface subsData {
    email: string;
    status: string;
    timestamp: string;
}

export default function Dashboard() {
    const [subscribers, setSubscribers] = useState<subsData[]>([]);
    const router = useRouter();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user) router.push("/login");
        });

        const loadData = async () => {
            const snap = await getDocs(collection(db, "waiting_list"));
            const data = snap.docs.map(doc => {
                const docData = doc.data();
                return {
                    id: doc.id,
                    email: docData.email ?? "",
                    status: docData.status ?? "",
                    timestamp: docData.timestamp?.toDate().toISOString() ?? "",
                };
            });
            setSubscribers(data);
        };

        loadData();
        return () => unsub();
    }, [router]);

    const handleDownload = () => {
        const csv = [
            ["Email", "Status", "Timestamp"],
            ...subscribers.map((s) => [s.email, s.status, s.timestamp]),
        ]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "subscribers.csv";
        link.click();
    };

    return (
        <div className="p-6 max-w-6xl mx-auto my-20">
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">Subscribers</h1>
                <Button variant={"destructive"} onClick={() => signOut(auth)}>Logout</Button>
            </div>

            <Card className="p-4 mb-4 flex justify-between items-center">
                <div className="text-lg font-medium">Total Subscribers: {subscribers.length}</div>
                <Button variant={"outline"} className="mt-2" onClick={handleDownload}>Download CSV</Button>
            </Card>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-xl">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left p-2">#</th>
                            <th className="text-left p-2">Email</th>
                            <th className="text-left p-2">Status</th>
                            <th className="text-left p-2">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers
                            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                            .map((s, i) => (
                                <tr key={i} className="border-t border-gray-200">
                                    <td className="p-2">{i + 1}</td>
                                    <td className="p-2">{s.email}</td>
                                    <td className="p-2">{s.status}</td>
                                    <td className="p-2">{new Date(s.timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
