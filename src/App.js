
import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChanelListContainer, ChanelContainer, Auth } from './components';
import './App.css'

const cookies = new Cookies();
const apiKey = '2wmx68n6fuzj';
const authToken = false;

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({

    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    id: cookies.get('userId'),
    phoneNumber: cookies.get('phoneNumber'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

function App() {
  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
        <ChanelListContainer />
        <ChanelContainer />
      </Chat>

    </div>
  );
}

export default App;
