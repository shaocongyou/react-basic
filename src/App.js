import { useState } from "react";

// ❌ 不使用自定义 Hook - 代码会重复
function App() {
    // 👤 用户1的计数器（需要写一大堆代码）
    const [user1Count, setUser1Count] = useState(0);
    const user1Increment = () => setUser1Count(user1Count + 1);
    const user1Decrement = () => setUser1Count(user1Count - 1);
    const user1Reset = () => setUser1Count(0);

    // 👤 用户2的计数器（又要写一遍相同的逻辑！）
    const [user2Count, setUser2Count] = useState(0);
    const user2Increment = () => setUser2Count(user2Count + 1);
    const user2Decrement = () => setUser2Count(user2Count - 1);
    const user2Reset = () => setUser2Count(0);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
                    ❌ 不使用自定义 Hook（代码重复）
                </h1>

                {/* 说明 */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p className="text-yellow-800 font-semibold mb-2">
                        😰 问题：两个计数器，逻辑完全一样，但要写两遍代码！
                    </p>
                    <ul className="text-yellow-700 text-sm list-disc list-inside">
                        <li>用户1的计数器：4行代码（state + 3个函数）</li>
                        <li>用户2的计数器：又要写4行代码（完全重复！）</li>
                        <li>如果有10个用户，就要复制粘贴10次...</li>
                    </ul>
                </div>

                {/* 代码展示 */}
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <pre className="text-sm text-red-300 overflow-x-auto">
{`// 👤 用户1的计数器
const [user1Count, setUser1Count] = useState(0);
const user1Increment = () => setUser1Count(user1Count + 1);
const user1Decrement = () => setUser1Count(user1Count - 1);
const user1Reset = () => setUser1Count(0);

// 👤 用户2的计数器（重复的代码！）
const [user2Count, setUser2Count] = useState(0);
const user2Increment = () => setUser2Count(user2Count + 1);
const user2Decrement = () => setUser2Count(user2Count - 1);
const user2Reset = () => setUser2Count(0);`}
                    </pre>
                </div>

                {/* 两个计数器 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 用户1 */}
                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                        <h2 className="text-xl font-bold text-blue-700 mb-4">
                            👤 用户1的计数器
                        </h2>
                        <div className="text-5xl font-bold text-blue-600 mb-6 text-center">
                            {user1Count}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={user1Increment}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                            >
                                + 加一
                            </button>
                            <button
                                onClick={user1Decrement}
                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
                            >
                                - 减一
                            </button>
                            <button
                                onClick={user1Reset}
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded"
                            >
                                重置
                            </button>
                        </div>
                    </div>

                    {/* 用户2 */}
                    <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                        <h2 className="text-xl font-bold text-purple-700 mb-4">
                            👤 用户2的计数器
                        </h2>
                        <div className="text-5xl font-bold text-purple-600 mb-6 text-center">
                            {user2Count}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={user2Increment}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                            >
                                + 加一
                            </button>
                            <button
                                onClick={user2Decrement}
                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
                            >
                                - 减一
                            </button>
                            <button
                                onClick={user2Reset}
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded"
                            >
                                重置
                            </button>
                        </div>
                    </div>
                </div>

                {/* 总结 */}
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-semibold mb-2">
                        ❌ 缺点总结：
                    </p>
                    <ul className="text-red-700 text-sm space-y-1 list-disc list-inside">
                        <li>代码重复：两个计数器的逻辑完全一样，但要写两遍</li>
                        <li>难以维护：如果要修改计数器逻辑，需要改两个地方</li>
                        <li>容易出错：复制粘贴时可能忘记修改变量名</li>
                        <li>不够优雅：看起来很啰嗦</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
