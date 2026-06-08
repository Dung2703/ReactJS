import logo from './logo.svg';
import './App.css';
import Header from './component/Header';

function App() {
  let name = "Dung";
  const css = {
    color: "red",
    backgroundColor: "blue"
  }
  return (
    <>
      <Header />
      <div className="test" style={css}>.0\        <h1>Hello, {name}!</h1>
      </div>
      <div className="test" style={css}>
        <h1>Hello, {name}!</h1>
      </div>
    </>
  );
}

export default App;
