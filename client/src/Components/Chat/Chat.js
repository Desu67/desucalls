import React, {useState, useEffect, useRef} from 'react'
import './Chat.css'
import io from "socket.io-client"

function Chat() {
    const [yourID, setYourID] = useState("");
    const socket = useRef();
    

    useEffect(() => {
        socket.current = io.connect("/");

        socket.current.on("yourID", (id) => {
            setYourID(id);
          })
    },[]);

    return (
        <div className="chatWrapper">
            <div className="chatContainer">
                hello
            </div>
            <div className="disclaimer">
                <input
                    placeholder={`Enter message @${yourID}`}
                />
            </div>
        </div>
    )

}

export default Chat