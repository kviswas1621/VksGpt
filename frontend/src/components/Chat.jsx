import "./Chat.css";
import  Mycontext from "./MyContext";
import {  useContext } from "react";

function Chat(){
    const {newChat,prevChats}=useContext(Mycontext);

    return(
        <>
            {newChat && <h1>Start a New Chat!</h1>}
            <div className="chats">
                {
                    prevChats?.map((chat, idx) => 
                        <div className={chat.role === "user" ? "userDiv" : "gptDiv"} key={idx}>
                            {   
                                chat.role === "user" ?
                                <p className="userMessage">{chat.content}</p>:
                                <p className="gptMessage">{chat.content}</p>
                            }
                        </div>
                    )
                }
           </div>
       </>
    )   
    
}

export default Chat;