import { useEffect, useState } from "react";

function Son() {
    useEffect(() => {
      console.log('Son 挂载，设置定时器');
      
      const timer = setInterval(() => {
        console.log('tick - 我还在运行！DOM 在吗？', 
          document.querySelector('.son-div'));
      }, 1000);
      
      // 注释掉清理函数
      // return () => clearInterval(timer);
    }, []);
    
    return <div className="son-div">this is son</div>
  }
  
  function App() {
    const [show, setShow] = useState(true);
    
    return (
      <div>
        {show && <Son />}
        <button onClick={() => setShow(false)}>卸载Son</button>
      </div>
    );
  }

export default App;