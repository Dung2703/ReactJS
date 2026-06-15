import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MainContent from './component/MainContent';
import NavigationMenu from './component/NavigationMenu';
import Content from './component/Content';
import Login from './component/Login';

function App() {
  let name = "Dung";
  const css = {
    color: "red",
    backgroundColor: "blue"
  }
  return (
    // <>
    //   <Header />
    //   <NavigationMenu />
    //   <div className="main">
    //     <Content text="Content 1" number={10} active={true} />
    //     <MainContent />
    //     <Content text="Content 2" number={20} active={false} />
    //   </div>
    //   <Footer />
    // </>

    <>
      <Login />
    </>
  );
}

export default App;
