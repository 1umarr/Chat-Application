import { ChatEngine } from "react-chat-engine";

import LoginForm from './component/LoginForm';
import ChatFeed  from './component/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="12b21f98-eee9-4c5f-98b6-ef58e50b777f"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />    
    )
}

export default App;