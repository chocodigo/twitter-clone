import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { tweetId } = req.body;

    if (!tweetId) {
        return res.status(400).json({ error: 'Tweet ID is required' });
    }

    try {
        // 좋아요를 1 증가시킵니다.
        const updatedTweet = await prisma.tweet.update({
            where: {
                id: parseInt(tweetId),
            },
            data: {
                likes: {
                    increment: 1,
                },
            },
        });

        res.status(200).json(updatedTweet);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    } finally {
        await prisma.$disconnect();
    }
};
