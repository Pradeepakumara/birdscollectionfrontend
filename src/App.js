
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
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';


function App() {

  const user = useSelector(state => state.user);
  console.log(user)

  return (
    <div className="App">
      {
        !user ? <Login /> : (
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/register' component={Register} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/view/:id' component={Details} />
              <Route path='/birds' component={Main} />

            </Switch>
            <Footer />
          </Router>
        )
      }

    </div>
  );
}

export default App;
