// pages/index.tsx

import { useRouter } from 'next/router';
import {FormEvent, useEffect, useState} from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ITweet {
    id :number ,
    content: string,
    userId: number,
    likes: number
}
export default function HomePage() {
    const router = useRouter();
    const { data: tweets, mutate } = useSWR('/api/tweets', fetcher);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 로그인 확인 로직 (예: 쿠키 또는 세션 스토리지 확인)
        const checkLogin = async () => {
            const response = await fetch('/api/check-login');
            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                router.push('/log-in');
            }
        };

        checkLogin();
    }, []);

    const handleTweet = async (e:FormEvent) => {
        e.preventDefault();
        const content = (e.target as any).tweetContent.value;
        const response = await fetch('/api/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        });

        if (response.ok) {
            mutate(); // re-fetch tweets
        }
    };

    if (!isLoggedIn) return <p>Redirecting to login...</p>;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-2xl font-bold mb-10">Welcome to Twitter Clone</h1>

            {/* 트윗 작성 폼 */}
            <div className="w-full max-w-md">
                <form onSubmit={handleTweet} className="bg-white p-6 rounded shadow-md">
            <textarea
                name="tweetContent"
                placeholder="What's happening?"
                required
                className="w-full p-2 border rounded mb-4 resize-none"
            ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Tweet
                    </button>
                </form>
            </div>

            {/* 트윗 목록 */}
            <ul className="w-full max-w-md mt-6">
                {tweets?.map((tweet : ITweet) => (
                    <li key={tweet.id} className="bg-white p-4 rounded mb-4 shadow-md">
                        <p className="mb-2">{tweet.content}</p>
                        <div className="flex justify-between items-center">
                            <button
                                onClick={async () => {
                                    await fetch('/api/like-tweet', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ tweetId: tweet.id }),
                                    });
                                    mutate();
                                }}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                {tweet.likes} Likes
                            </button>
                            <a
                                href={`/tweet/${tweet.id}`}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Details
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}
