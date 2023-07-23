import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TweetDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    // 해당 트윗 정보 가져오기
    const { data: tweet, error,mutate } = useSWR(
        id ? `/api/tweet/${id}` : null,
        fetcher
    );

    if (error) return <div>Failed to load tweet</div>;
    if (!tweet) return <div>Loading...</div>;

    const handleLike = async () => {
        try {
            const response = await fetch('/api/like-tweet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tweetId: Number(id) }),
            });

            if (response.ok) {
                mutate();
            } else {
                console.error('Failed to like the tweet');
            }
        } catch (error) {
            console.error('Failed to like the tweet:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Tweet Detail</h1>
                <div className="border-b border-gray-200 py-4">
                    <p className="text-lg text-gray-700 mb-2">{tweet.content}</p>
                    <div className="flex items-center">
                        <button
                            onClick={handleLike}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
                        >
                            Like
                        </button>
                        <span className="text-gray-600">{tweet.likes} likes</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TweetDetail;
