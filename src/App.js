import {useState} from "react";

function Son({GetSonMsg}) {
    const sonMsg = "this is a sonMsg";
    return (
      <div>
          <button onClick={() => GetSonMsg(sonMsg)}>send sonMsg to App</button>
      </div>
    );
}

function App() {

    const [msgFromSon, setMsgFromSon] = useState("");
    const getSonMsg = (sonMsg) => {setMsgFromSon(sonMsg)}

    return (
        <div>
            <Son GetSonMsg={getSonMsg} />
            <span>{msgFromSon}</span>
        </div>
    );
}

export default App;
