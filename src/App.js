
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Edit from './components/Edit';
import Details from './components/Details';
import Main from './components/Main';
// import Login from './components/Login';
// import { useSelector } from 'react-redux';
import Footer from './components/Footer';
// import { useEffect, useState } from 'react';


function App() {

  // const [usn, setUsn] = useState("");
  // const user = useSelector(state => state.user);
  // console.log(user)
  
  // useEffect(() => {
  //   if(user){
  //     setUsn(user.displayName);
      
  //     // setUsn(localStorage.getItem("name"))
  //   }
  //   else{
  //     console.log(user);
  //   }
  // }, [user])

  // localStorage.setItem("name", usn);

  // setUsn(localStorage.getItem("name"))

  // console.log(usn);
  

  // useEffect(() => {
  //   if(user){
  //     setUsn(localStorage.getItem("name"))
  //   }
  // }, [])

  return (
    <div className="App">
      {
        // !user ? <Login /> : (
          <Router>
            <Navbar/>
            <Switch>
            <Route path='/' component={Main} />
              <Route exact path="/crud" component={Home} />
              <Route path='/register' component={Register} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/view/:id' component={Details} />
              

            </Switch>
            <Footer />
          </Router>
        // )
      }

    </div>
  );
}

export default App;
