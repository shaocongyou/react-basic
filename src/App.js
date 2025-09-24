function Son({children}) {
    return <div>【这里是 Son  其中 children 的内容是 “{children}”】</div>;
}

function App() {
    return (
        <div>
            <Son>
                <span>这个信息出现在 props 的 children 下面</span>
            </Son>
        </div>
    );
}

export default App;
