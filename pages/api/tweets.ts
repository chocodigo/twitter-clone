// pages/api/tweets.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const tweets = await prisma.tweet.findMany();
            res.status(200).json(tweets);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tweets.' });
        }
    } else if (req.method === 'POST') {
        try {
            const userId : number= +req.cookies.userId;
            const tweet = await prisma.tweet.create({ data: {...req.body,userId} });
            res.status(200).json(tweet);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error });
        }
    } else {
        res.status(405).end();
    }
}
