import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {

const [text , setText] = useState("");

const [Lines, SetLine] = useState([]);

const onTextChange = (event) =>{
  setText(event.target.value)
};

const onSend = () => {
  SetLine(Line => [...Lines, text])
  setText("");
}

const keyPress = (event) => {
  if (event.which === 13){
    onSend();
  }
};

  return (
    
    <div className="App">
      
      <div className="App-header white-text">
        
        <div className="ChatHeader">
          <Link to="/friend-list">
           <button>
             FriendList
           </button>
          </Link>
          <div className= "ChatName-Header">
            UsersName
          </div>
        </div>

        
      </div>
      

      <div className="App-chatroom">
        {

          Lines.map(x => {
            return <div className="App-chatroom-text">
                    {x}
                   </div>

          })
        }
      </div>
      <div className="App-textbox">
        
        <input type="text" className="App-textbox-input" 
        value={text} onChange={onTextChange} onKeyPress={keyPress}/>
        
        <div className="App-textbox-send" onClick={onSend}>Send!</div>

      </div>
    </div>
  );
}
export default App;
