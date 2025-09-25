import {useState} from "react";

function Son1({sentToFather}) {
    const [code, setCode] = useState("4399");
    return (
        <div>
            这是 Son1
            <button onClick={() => sentToFather(code)}>发送验证码</button>
        </div>
    );
}

function Son2({son1Code}) {
    return <div>这是 Son2，收到的验证码是：{son1Code}</div>;
}

function App() {

    const [code, setCode] = useState("");
    const GetCode = (son1Code) => {setCode(son1Code)}

    return (
        <div>
            这里是APP的区域
            <span>
                <span>Son1 子传父 传递的信息是 验证码</span>
                <Son1 sentToFather={GetCode} />
            </span>
            <span>
                <Son2 son1Code={code} />
            </span>
        </div>
    );
}

export default App;