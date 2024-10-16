import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <img src="https://www.montclair.edu/university-communications/wp-content/uploads/sites/144/2023/07/red-logo-web-2023.svg" alt="Logo" />
      <div className="title">AI SANDBOX</div>
      <div className="login-menu">
        <select>
          <option value="login">Log In</option>
          <option value="logout">Log Out</option>
        </select>
      </div>
    </header>
  );
}

function SidebarApp({ isOpen, toggleSidebar }) {
  return (
      <div className="container">
          <div className={`sidebar ${isOpen ? 'open' : 'hidden'}`}>
              {isOpen && (
                  <>
                      <h2>Sidebar</h2>
                      <p>Some sidebar content</p>
                      <ul>
                      <ul>
                          <li>one</li>
                          <li>two</li>
                          <li>three</li>
                      </ul>
                      <ul>
                          <li>one</li>
                          <li>two</li>
                          <li>three</li>
                      </ul>
                      <ul>
                          <li>one</li>
                          <li>two</li>
                          <li>three</li>
                      </ul>
                      </ul>
                  </>
              )}
          </div>
          <div className={`content ${isOpen ? 'shifted' : 'hidden'}`}>
              <button className="sidebutton" onClick={toggleSidebar}>
                  {isOpen ? <i class="fi fi-bs-cross"></i> : ' '}
              </button>
          </div>
      </div>
  );
}

function Sidebar({ toggleSidebar }) {
  return (
      <div className="sidebar">
          <button onClick={toggleSidebar}><i className="fi fi-ss-menu-burger"></i></button>
          <button onClick={toggleSidebar}><i className="fi fi-ss-settings"></i></button>
          <button onClick={toggleSidebar}><i className="fi fi-ss-interrogation"></i></button>
      </div>
  );
}

function ChatArea() {
  return (
    <div className="chat-area">
      <div className="chat-history">
        {/* Chat history will appear here */}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button className="icon-button"><i className="fi fi-ss-circle-microphone"></i></button>
        <button className="icon-button"><i className="fi fi-bs-add-image"></i></button>
        <button className="icon-button"><i className="fi fi-rs-paperclip-vertical"></i></button>
        <button><i className="fi fi-bs-arrow-small-up"></i></button>
      </div>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar toggleSidebar={toggleSidebar} />
        <SidebarApp isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <ChatArea />
      </div>
    </div>
  );
}

export default App;