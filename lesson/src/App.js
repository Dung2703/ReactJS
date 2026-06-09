import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MainContent from './component/MainContent';
import NavigationMenu from './component/NavigationMenu';
import Content from './component/Content';

function App() {
  let name = "Dung";
  const css = {
    color: "red",
    backgroundColor: "blue"
  }
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content />
        <MainContent />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
