import {useState} from "react";
import  {createContext, useContext} from "react";

const MsgContext = createContext()

function A() {
    return (
        <div>
            <span>这里是 经理 A 开始</span>
            <B/>
            <span>这里是 经理 A 结束</span>
        </div>
    )
}

function B() {
    return (
        <div>
            <span>这里是 实习老师 B 开始</span>
            <C/>
            <span>这里是 实习老师 B 结束</span>
        </div>
    )
}

function C() {
    // 实习生要能听见 需要用useContext来获取信息
    const reciveMsg = useContext(MsgContext)
    return (
        <div>
            <span>这里是 实习生 C 开始</span>
            <div>我是 实习生 C</div>
            <div>老板，我听到你说的话了，你说的是：{reciveMsg}，我去拿了</div>
            <span>这里是 实习生 C 结束</span>
        </div>
    )
}

function App() {
    // 1. createContext方法创建跨层传递信息的对象
    // const MsgContext = createContext()
    // 如果写在这里，那么上面的C是获取不到  useContext(MsgContext)
    // 其中的 MsgContext ,因为参数没有传，但是如果要传参的话，就要一层一层的传，很麻烦，就是 爷 传 父 传 孙 的逻辑了
    // 所以 跨层通信 的 createContext 对象 必须写在 消息接收组件 能直接获取的地方

    const [appMessage, setAppMessage] = useState("老板App：实习生C 帮我去楼下拿个快递");

    return (
        // 老板App 要说话，要让他人听到 就需要说出来，告诉别人
        // 老板在哪 就是在哪里说话 就在哪里用  跨层传递信息的对象.Provider
        <MsgContext.Provider value={appMessage}>
            <div>
                <span>这里是 App 开始</span>
                <A/>
                <span>这里是 App 结束</span>
            </div>
        </MsgContext.Provider>
    );
}

export default App;