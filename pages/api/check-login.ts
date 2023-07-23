import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // 쿠키에서 user id를 가져옴
        const userId = req.cookies.userId;

        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        // 사용자 정보 확인
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(userId),
            },
        });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // 로그인 상태 확인 완료
        res.status(200).json({ message: 'Authenticated' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    } finally {
        await prisma.$disconnect();
    }
};
