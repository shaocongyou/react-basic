import { useEffect, useState } from "react";

// ========================================
// 1️⃣ 普通函数：只能处理数据，不能管理状态
// ========================================
function add(a, b) {
    return a + b;  // ✅ 可以：处理数据、计算
}

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;  // ✅ 可以：格式化字符串
}

// ❌ 普通函数不能使用 Hook！
// function getBadCounter() {
//     const [count, setCount] = useState(0);  // ❌ 报错！普通函数不能用 Hook
//     return count;
// }

// ========================================
// 2️⃣ 自定义 Hook：可以使用 Hook，能管理状态
// ========================================
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);  // ✅ 可以用 Hook！
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
}

// ========================================
// 对比演示
// ========================================
function App() {
    // ✅ 使用普通函数（处理数据）
    const sum = add(5, 3);
    const fullName = formatName("张", "三");
    
    // ✅ 使用自定义 Hook（管理状态）
    const counter = useCounter(0);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
                    普通函数 vs 自定义 Hook
                </h1>

                {/* 说明 */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 mb-6">
                    <h2 className="text-lg font-semibold text-blue-800 mb-3">
                        🤔 为什么有了普通函数，还需要自定义 Hook？
                    </h2>
                    <p className="text-blue-700 text-sm mb-2">
                        <strong>核心原因</strong>：普通函数<strong>不能使用 Hook</strong>（useState、useEffect 等）！
                    </p>
                    <p className="text-blue-700 text-sm">
                        自定义 Hook 让你可以把"<strong>带状态的逻辑</strong>"封装起来复用。
                    </p>
                </div>

                {/* 对比表格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* 普通函数 */}
                    <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-300">
                        <h3 className="text-xl font-bold text-yellow-700 mb-3">
                            📝 普通函数
                        </h3>
                        <div className="bg-white rounded p-3 mb-3">
                            <pre className="text-sm text-gray-800">
{`function add(a, b) {
    return a + b;
}

function formatName(first, last) {
    return \`\${first} \${last}\`;
}`}
                            </pre>
                        </div>
                        <div className="text-sm text-yellow-700 space-y-2">
                            <p><strong>✅ 可以做：</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>处理数据</li>
                                <li>计算结果</li>
                                <li>格式化字符串</li>
                            </ul>
                            <p className="mt-3"><strong>❌ 不能做：</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>使用 useState</li>
                                <li>使用 useEffect</li>
                                <li>管理组件状态</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-yellow-100 rounded p-3">
                            <p className="text-sm text-yellow-800">
                                <strong>演示：</strong><br/>
                                5 + 3 = {sum}<br/>
                                姓名：{fullName}
                            </p>
                        </div>
                    </div>

                    {/* 自定义 Hook */}
                    <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
                        <h3 className="text-xl font-bold text-green-700 mb-3">
                            🎣 自定义 Hook
                        </h3>
                        <div className="bg-white rounded p-3 mb-3">
                            <pre className="text-sm text-gray-800">
{`function useCounter(initial) {
    const [count, setCount] = 
        useState(initial);
    
    const increment = () => 
        setCount(count + 1);
    
    return { count, increment };
}`}
                            </pre>
                        </div>
                        <div className="text-sm text-green-700 space-y-2">
                            <p><strong>✅ 可以做：</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>使用 useState ✨</li>
                                <li>使用 useEffect ✨</li>
                                <li>管理状态 ✨</li>
                                <li>也能处理数据</li>
                            </ul>
                            <p className="mt-3"><strong>🎯 特点：</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>名字必须以 use 开头</li>
                                <li>可以封装带状态的逻辑</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-green-100 rounded p-3">
                            <p className="text-sm text-green-800 mb-2">
                                <strong>演示：</strong>
                            </p>
                            <div className="text-2xl font-bold text-green-700 mb-2">
                                计数：{counter.count}
                            </div>
                            <button 
                                onClick={counter.increment}
                                className="bg-green-500 text-white px-4 py-2 rounded text-sm"
                            >
                                点击 +1
                            </button>
                        </div>
                    </div>
                </div>

                {/* 举例说明 */}
                <div className="bg-purple-50 rounded-lg p-5 mb-6">
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">
                        💡 实际场景举例
                    </h3>
                    <div className="space-y-3 text-sm text-purple-700">
                        <div className="bg-white rounded p-3">
                            <p className="font-semibold mb-1">场景1：格式化价格</p>
                            <p className="text-xs text-gray-600 mb-2">只是数据处理，没有状态 → 用<strong>普通函数</strong></p>
                            <code className="text-xs bg-purple-100 px-2 py-1 rounded">
                                function formatPrice(price) {'{'} return `¥${'${price}'}`;  {'}'}
                            </code>
                        </div>

                        <div className="bg-white rounded p-3">
                            <p className="font-semibold mb-1">场景2：倒计时功能</p>
                            <p className="text-xs text-gray-600 mb-2">需要状态 + 定时器 → 必须用<strong>自定义 Hook</strong></p>
                            <code className="text-xs bg-purple-100 px-2 py-1 rounded block">
                                function useCountdown(seconds) {'{'}<br/>
                                &nbsp;&nbsp;const [time, setTime] = useState(seconds);<br/>
                                &nbsp;&nbsp;useEffect(() =&gt; {'{ /* 定时器逻辑 */ }'});<br/>
                                &nbsp;&nbsp;return time;<br/>
                                {'}'}
                            </code>
                        </div>

                        <div className="bg-white rounded p-3">
                            <p className="font-semibold mb-1">场景3：获取用户输入</p>
                            <p className="text-xs text-gray-600 mb-2">需要管理输入状态 → 必须用<strong>自定义 Hook</strong></p>
                            <code className="text-xs bg-purple-100 px-2 py-1 rounded block">
                                function useInput(initialValue) {'{'}<br/>
                                &nbsp;&nbsp;const [value, setValue] = useState(initialValue);<br/>
                                &nbsp;&nbsp;return [value, setValue];<br/>
                                {'}'}
                            </code>
                        </div>
                    </div>
                </div>

                {/* 总结 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border-2 border-blue-300">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                        🎯 简单总结
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                        <p>
                            <strong className="text-yellow-700">普通函数</strong>：
                            只能处理数据，不能用 Hook，<strong>没有状态</strong>
                        </p>
                        <p>
                            <strong className="text-green-700">自定义 Hook</strong>：
                            可以用 Hook（useState、useEffect），<strong>能管理状态</strong>
                        </p>
                        <p className="mt-4 p-3 bg-yellow-100 rounded">
                            💡 <strong>记忆口诀</strong>：<br/>
                            <span className="ml-4">需要状态？用 Hook！</span><br/>
                            <span className="ml-4">只是计算？普通函数够了！</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
