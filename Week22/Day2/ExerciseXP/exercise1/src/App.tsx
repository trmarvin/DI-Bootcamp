import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import UserList from './components/UserList';

function App() {
    return (
      <div>
        <h1>Welcome to the Greeting App</h1>
        <Greeting name="Tamar" messageCount={3} />
        <Counter />
        <UserCard name="Tamar" age={47} role="Admin" />
        <UserList />
      </div>
    );
}

export default App;