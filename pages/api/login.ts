// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (user && user.password === password) {
            res.status(200).json({ success: true,userId:user.id });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
