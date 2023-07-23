import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
    } = req;

    if (req.method === 'GET') {
        try {
            const tweet = await prisma.tweet.findUnique({
                where: { id: Number(id) },
            });

            if (!tweet) {
                return res.status(404).json({ error: 'Tweet not found' });
            }

            return res.json(tweet);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch the tweet' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
