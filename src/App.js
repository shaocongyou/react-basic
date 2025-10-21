import { useState } from "react";

// 🎯 自定义 Hook：useCounter
// 作用：封装计数器的所有逻辑，让它可以复用
function useCounter(initialValue = 0) {
    // 📊 状态：保存计数的值
    const [count, setCount] = useState(initialValue);
    
    // 🔧 方法1：增加计数
    const increment = () => setCount(count + 1);
    // 🔧 方法2：减少计数
    const decrement = () => setCount(count - 1);
    // 🔧 方法3：重置计数
    const reset = () => setCount(initialValue);
    
    // 📦 返回一个对象，包含：
    // - count: 状态值（数字）
    // - increment: 方法/函数
    // - decrement: 方法/函数
    // - reset: 方法/函数
    return { 
        count,      // 这是值
        increment,  // 这是函数
        decrement,  // 这是函数
        reset       // 这是函数
    };
}

// ✅ 使用自定义 Hook - 代码简洁、可复用
function App() {
    // 🔄 复用1：调用 useCounter 创建用户1的计数器（1行代码搞定！）
    const counter1 = useCounter(0);
    
    // 🔄 复用2：调用 useCounter 创建用户2的计数器（又是1行代码！）
    const counter2 = useCounter(0);
    
    // 👆 看！原本8行代码，现在只要2行！而且逻辑完全一样！

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
                    ✅ 使用自定义 Hook（代码复用）
                </h1>

                {/* 说明 */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <p className="text-green-800 font-semibold mb-2">
                        🎉 优势：把相同的逻辑封装成 Hook，想用多少次就用多少次！
                    </p>
                    <ul className="text-green-700 text-sm list-disc list-inside">
                        <li>用户1的计数器：1行代码 <code className="bg-green-200 px-1">const counter1 = useCounter(0);</code></li>
                        <li>用户2的计数器：1行代码 <code className="bg-green-200 px-1">const counter2 = useCounter(0);</code></li>
                        <li>如果有10个用户，也只是10行代码，而且一目了然！</li>
                    </ul>
                </div>

                {/* 对比展示 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* 不使用 Hook */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-300">
                        <h3 className="font-semibold text-red-700 mb-2">❌ 不使用自定义 Hook</h3>
                        <pre className="text-xs text-red-700 overflow-x-auto">
{`const [user1Count, setUser1Count] = useState(0);
const user1Increment = () => setUser1Count(user1Count + 1);
const user1Decrement = () => setUser1Count(user1Count - 1);
const user1Reset = () => setUser1Count(0);

const [user2Count, setUser2Count] = useState(0);
const user2Increment = () => setUser2Count(user2Count + 1);
const user2Decrement = () => setUser2Count(user2Count - 1);
const user2Reset = () => setUser2Count(0);

// 8行代码！重复！`}
                        </pre>
                    </div>

                    {/* 使用 Hook */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                        <h3 className="font-semibold text-green-700 mb-2">✅ 使用自定义 Hook</h3>
                        <pre className="text-xs text-green-700 overflow-x-auto">
{`// 🔄 第一次使用（复用）
const counter1 = useCounter(0);

// 🔄 第二次使用（复用）
const counter2 = useCounter(0);

// 只要2行代码！
// counter1.count → 获取值
// counter1.increment() → 调用方法`}
                        </pre>
                    </div>
                </div>

                {/* 自定义 Hook 的定义 */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-blue-700 mb-3">📦 自定义 Hook 的定义（写一次，到处用）</h3>
                    <pre className="text-sm text-blue-800 overflow-x-auto">
{`function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
}`}
                    </pre>
                    <p className="text-blue-700 text-sm mt-2">
                        💡 定义好后，任何组件都可以通过 <code className="bg-blue-200 px-1">useCounter()</code> 来使用！
                    </p>
                </div>

                {/* 两个计数器 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 用户1 */}
                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
                        <h2 className="text-xl font-bold text-blue-700 mb-4">
                            👤 用户1的计数器
                        </h2>
                        <div className="text-5xl font-bold text-blue-600 mb-6 text-center">
                            {counter1.count}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={counter1.increment}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                            >
                                + 加一
                            </button>
                            <button
                                onClick={counter1.decrement}
                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
                            >
                                - 减一
                            </button>
                            <button
                                onClick={counter1.reset}
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded"
                            >
                                重置
                            </button>
                        </div>
                        <p className="text-xs text-blue-600 mt-3">
                            使用 <code className="bg-blue-200 px-1">counter1.count</code> 和 <code className="bg-blue-200 px-1">counter1.increment()</code>
                        </p>
                    </div>

                    {/* 用户2 */}
                    <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
                        <h2 className="text-xl font-bold text-purple-700 mb-4">
                            👤 用户2的计数器
                        </h2>
                        <div className="text-5xl font-bold text-purple-600 mb-6 text-center">
                            {counter2.count}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={counter2.increment}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                            >
                                + 加一
                            </button>
                            <button
                                onClick={counter2.decrement}
                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
                            >
                                - 减一
                            </button>
                            <button
                                onClick={counter2.reset}
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded"
                            >
                                重置
                            </button>
                        </div>
                        <p className="text-xs text-purple-600 mt-3">
                            使用 <code className="bg-purple-200 px-1">counter2.count</code> 和 <code className="bg-purple-200 px-1">counter2.increment()</code>
                        </p>
                    </div>
                </div>

                {/* 总结 */}
                <div className="mt-6 bg-green-50 border border-green-300 rounded-lg p-4">
                    <p className="text-green-800 font-semibold mb-2">
                        ✅ 自定义 Hook 的好处：
                    </p>
                    <ul className="text-green-700 text-sm space-y-1 list-disc list-inside">
                        <li><strong>🔄 复用逻辑</strong>：useCounter 写一次，可以用无数次</li>
                        <li><strong>📝 代码简洁</strong>：从8行代码减少到2行代码</li>
                        <li><strong>🛠️ 易于维护</strong>：修改 useCounter 的逻辑，所有使用的地方自动更新</li>
                        <li><strong>🏷️ 语义清晰</strong>：useCounter 一看就知道是计数器</li>
                        <li><strong>🎯 独立测试</strong>：可以单独测试 useCounter 的功能</li>
                    </ul>
                </div>

                {/* 关键点 */}
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-yellow-800 font-semibold mb-2">
                        🔑 关键理解：
                    </p>
                    <p className="text-yellow-700 text-sm">
                        <strong>复用的含义</strong>：就像工具箱里的工具，你做了一个扳手（useCounter），
                        需要用的时候就拿出来用，不用每次都重新造一个扳手。
                        <code className="bg-yellow-200 px-1 mx-1">const counter1 = useCounter(0)</code> 
                        就是"拿出扳手用一次"，
                        <code className="bg-yellow-200 px-1 mx-1">const counter2 = useCounter(0)</code> 
                        就是"再拿出扳手用一次"！
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
