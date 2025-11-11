import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./exercise3";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <p>Hello World!</p>
      </div>
      <div>
        {myelement}
      </div>
      <div>
        <p>React is {sum} times better with JSX.</p>
      </div>
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
      </div>
      <div>
        <h1>Favorite Animals</h1>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </div>
      <div>
        <Exercise />
      </div>
    </div>
  );
}

export default App;