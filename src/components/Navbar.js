import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
// import {useSelector} from 'react-redux';
import Profile from '../assets/profile.JPG';


const Navbar = () => {

    // const user = useSelector(state => state.user);
    return (
        <>
            <header className='nav-header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand text-info">
                        <img src="https://www.svgrepo.com/show/267032/bird.svg" width="40" height="50" className="d-inline-block align-top mr-2" alt="brand"/>
                             Birds</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/crud" className="nav-link" aria-current="page">CRUD</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/register" className="nav-link" aria-current="page">Add</Link>
                                </li>
                                
                            </ul>
                            
                            {/* <a className='btn btn-warning logout' href="#">Log out</a> */}
                            <form className="d-flex" role="search">
                               
                    
                            <a href="https://personalpradeepprofile.netlify.app/">
                            <Avatar alt="Remy Sharp" src={Profile} />
                            </a>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar