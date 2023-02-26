import React from 'react'
import { auth, provider } from './firebase'
import {useDispatch} from 'react-redux'
import { loginAction } from '../redux/actions/loginAction';
import MainNavbar from './MainNavbar';
import GoogleIcon from '@mui/icons-material/Google';
import Main from './Main';
import Footer from './Footer';

const Login = () => {

  // const [users, setUsers] = useState(null)
    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(loginAction(result.user))
            // setUsers(result)
            // console.log(result)
        } )
        .catch(err => console.log(err.message))
    }
    // console.log(users);

  return (
    <>
        <MainNavbar />
        <div className='login-header'>
        <h3>Would you like to Add, Update and Delete the posts please login here</h3>
        <button className='btn btn-success btn-lg' onClick={signIn}><GoogleIcon style={{color: 'orangered'}} /> sign in with google</button>
        </div>
        <Main />
        <Footer />
    </>
  )
}

export default Login