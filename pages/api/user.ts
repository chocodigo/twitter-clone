// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    // Simplified user creation for the sake of example
    if (req.method === 'POST') {
        try {
            const user = await prisma.user.create({ data: req.body });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error });
        }
    } else {
        res.status(405).end();
    }
}
