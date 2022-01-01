import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import ActionProvider from "./configs/ActionProvider";
import config from "./configs/chatbotConfig";
import MessageParser from "./configs/MessageParser";
import './App.css'

function App() {
  return (
    <div classname="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>    
  );
}

export default App;
