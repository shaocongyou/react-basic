import { useEffect, useState } from "react";

function App() {
    
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // 添加特定依赖项
    useEffect(() => {
        console.log("🔵 useEffect 执行了！");
    }, [count]);

    return (
        <div>
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <button onClick={() => setCount(count + 1)}>点击 count 数值 加一</button>
            <button onClick={() => setCount2(count2 + 1)}>点击 count2 数值加一</button>
            <h1>打开浏览器控制台（F12），观察useEffect执行次数</h1>
        </div>
    );
}

export default App;