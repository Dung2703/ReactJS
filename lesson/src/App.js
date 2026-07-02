import logo from './logo.svg';
import './App.css';
import AllRouter from './component/Routers/AllRouter';
// import Todos from './component/Todos';
// import CallBack from './component/CallBack';
// import RandomGift from './component/RandomGift';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import MainContent from './component/MainContent';
// import NavigationMenu from './component/NavigationMenu';
// import Content from './component/Content';
// import Login from './component/Login';
// import Menu from './component/Menu';
// import ProductList from './component/ProductList';
// import Country from './component/Country';
// import Cart from './component/Cart';
// import Modal from './component/Modal';
// import UseEffect1 from './component/UseEffect';
// import UseEffect2 from './component/UseEffect2';
// import UseEffect3 from './component/UseEffect3';
// import Layout from './component/UseContext/Layout';
// import UseRef from './component/UseRef';
// import Memo from './component/Memo';
// import Reducer from './component/Reducer';
// import CounterRedux from './component/CounterRedux';
// import CounterRedux2 from './component/CounterRedux2';
// import { Routes, Route } from "react-router-dom";
// import Home from './component/React-Router/Pages/Home';
// import About from './component/React-Router/Pages/About';
// import Contact from './component/React-Router/Pages/Contact';
// import Error from './component/React-Router/Pages/Error';
// import LayoutDefault from './component/React-Router/Layout/LayoutDefault';
// import Blog from './component/React-Router/Pages/Blog';
// import BlogNews from './component/React-Router/Pages/Blog/Blognews';
// import BlogRelated from './component/React-Router/Pages/Blog/Blogrelated';
// import BlogAll from './component/React-Router/Pages/Blog/BlogAll';
// import BlogDetail from './component/React-Router/Pages/Blog/BlogDetail';
// import InfoUser from './component/React-Router/Pages/InfoUser';
// import Login from './component/React-Router/Pages/Login';
// import PrivateRouter from './component/PrivateRouter';
function App() {
  // let name = "Dung";
  // const css = {
  //   color: "red",
  //   backgroundColor: "blue"
  // }
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

    // <>
    //   <Login />
    // </>

    // <>
    //   <Menu />
    // </>

    <>
      {/* {<ProductList />} */}
      {/* {<Country />} */}
      {/* {<Cart />} */}
      {/* {<Modal />} */}
      {/* {<UseEffect1 />} */}
      {/* {<UseEffect2 />} */}
      {/* <UseEffect3 /> */}
      {/* <Layout /> */}
      {/* <UseRef /> */}
      {/* <RandomGift /> */}
      {/* <Memo /> */}
      {/* <CallBack /> */}
      {/* <Reducer /> */}
      {/* <CounterRedux />
      <CounterRedux2 /> */}
      {/* <Todos /> */}

      {/* <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogAll />} />
            <Route path="news" element={<BlogNews />} />
            <Route path="related" element={<BlogRelated />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route element={<PrivateRouter />}>
            <Route path="info-user" element={<InfoUser />} />
          </Route>
        </Route>
      </Routes> */}
      <AllRouter />
    </>
  );
}

export default App;
