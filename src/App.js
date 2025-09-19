function Son( treasures ) {
    // 接收更语义化的 prop
    console.log( treasures );
    return <div>这是先皇留下的：{treasures.treasure1}</div>;
}

function App() {
    const emperor = '传国玉玺'; // 更语义化的变量名
    return (
        <div>
            <Son treasure1={emperor} />
        </div>
    );
}

export default App;
