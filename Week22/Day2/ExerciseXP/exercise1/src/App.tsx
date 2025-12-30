import Greeting from './components/Greeting';

function App() {
    return (
      <div>
        <h1>Welcome to the Greeting App</h1>
        <Greeting name="Tamar" messageCount={3} />
      </div>
    );
}

export default App;