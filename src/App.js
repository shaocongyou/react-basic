function Son({ treasure }) {
    // 接收更语义化的 prop
    console.log({ treasure });
    return <div>这是先皇留下的：{treasure}</div>;
}

function App() {
    const emperor = '传国玉玺'; // 更语义化的变量名
    return (
        <div>
            <Son treasure={emperor} />
        </div>
    );
}

export default App;
