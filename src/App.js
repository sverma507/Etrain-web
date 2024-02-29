import Blog from "./Components/Blog/Blog";
import Courses from "./Components/Courses/Courses";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import AwesomePart from './Components/AwesomePart';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Count from "./Components/cm/Count";
import About from "./Components/About/About";
import Free from "./Components/cm/Free";
import Project from "./Components/cm/Project";
import Id_parent from './Components/Id_parent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route
              exact
              path='/'
              element={ <>
                        <Home />
                        <Courses />
                        <AwesomePart />
                        <Free/>
                        <Count/>
                        <Project/>
                        </>
                      }
            ></Route>
            <Route
              exact
              path='/About'
              element={<About/>}
            ></Route>
            <Route
              exact
              path='/Courses'
              element={<Courses/>}
            ></Route>
            <Route
              exact
              path='/Blog'
              element={<Blog/>}
            ></Route>
            <Route
              exact
              path='/Awesome'
              element={<AwesomePart />}
            ></Route>
            <Route
              exact
              path="/Profile" 
              element={
                <Profile/>
              }
            ></Route>
            <Route
              exact
              path="/Contact" 
              element={
                <Contact/>
              }
            ></Route>
            <Route
              exact
              path="/Id_Card" 
              element={
                <Id_parent/>
              }
            ></Route>
        </Routes>
        <Footer/>
    </Router>
    
  );
}

export default App;
