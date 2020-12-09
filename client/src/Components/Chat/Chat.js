import React, {useState, useEffect, useRef} from 'react'
import './Chat.css'
import io from "socket.io-client"

function Footer() {
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
            <div className="main__chat_window">
                <ul className="messages">

                </ul>
            </div>
            <div className="main__message_container">
                <input
                    type="text"
                    placeholder={`Enter message @${yourID}`}
                />
            </div>
        </div>
    )
}

export default Footer