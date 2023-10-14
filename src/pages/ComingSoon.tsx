import {useEffect, useState} from 'react';

const ComingSoon = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress + 10) % 101);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                    <p className="text-lg mb-4">My portfolio is under construction. Stay tuned!</p>
                </div>
                <div className="flex items-center">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                </div>
                <p className="text-lg font-semibold mt-4">{progress}%</p>
            </div>
        </>
    );
};

export default ComingSoon;