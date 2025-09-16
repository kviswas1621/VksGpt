import './App.css'
import Sidebar from "./components/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import  Mycontext  from './components/MyContext.jsx';
import { useState} from 'react';
import {v1 as uuidv1} from "uuid";

function App() {
  const [prompt,setPrompt]=useState("");
  const [reply,setReply]=useState(null);
  const [currThreadId,setCurrThreadId]=useState(uuidv1());
  const [prevChats,setPrevChats]=useState([])//stores all chats of curr thread
  const [newChat,setNewChat]=useState(true);
  const [allThreads,setAllThreads]=useState([]);




  const providerValues={
    prompt, setPrompt, 
    reply, setReply,
    currThreadId,setCurrThreadId,
    prevChats,setPrevChats,
    newChat,setNewChat,
    allThreads,setAllThreads,
  };
  
  return (
    <>
    <div className="app">
        <Mycontext.Provider value={providerValues}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </Mycontext.Provider>
    </div>
    </>
  )
}

export default App