import { useEffect, useState } from "react";

const geekURL = "http://geek.itheima.net/v1_0/channels"

function App() {

    const [res, setRes] = useState({});
    const [jsonRes, setJsonRes] = useState({});

    useEffect(() => {
        async function getList(){
            const response = await fetch(geekURL)
            const jsonResponse = await response.json()
            console.log(response)
            setRes(response)
            console.log("--------------")
            console.log(jsonResponse)
            setJsonRes(jsonResponse)
        }
        getList()
    },[])

    return (
        <div className="App">
            <span>Json化 获取到的数据</span>
            <div>
                <pre>{JSON.stringify(jsonRes, null, 2)}</pre>
            </div>
        </div>
    );
}

export default App;
