import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { useAuth } from '../Context/auth.js'
import toast from 'react-hot-toast';

const Navbar = () => {
    const [auth, setAuth] = useAuth()

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem("auth");
        toast.success('Logout Successfully')
    }
    return (
        <>
            {
                !auth?.user ? (
                    <>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link to='/' className="navbar-brand" ><GiMagnifyingGlass /> Asset Tracker</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    </ul>
                                    <ul className="navbar-nav ml-2">
                                        {
                                            !auth?.user ? (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink to='/login' className='navbar-brand' aria-current="page" >Login</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to='/signup' className='navbar-brand' >Signup</NavLink>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink to='/login' onClick={handleLogout} className='navbar-brand' >Logout</NavLink>
                                                    </li>
                                                </>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </>
                ) : (
                    <>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link to='/' className="navbar-brand" ><GiMagnifyingGlass /> Asset Tracker</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink to='/' className='nav-link' aria-current="page" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/user/notes" className='nav-link' >Notes</NavLink>
                                        </li>
                                       
                                      
                                    </ul>
                                    <ul className="navbar-nav ml-2">
                                        {
                                            !auth?.user ? (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink to='/login' className='navbar-brand' aria-current="page" >Login</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to='/signup' className='navbar-brand' >Signup</NavLink>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className="nav-item dropdown">
                                                        <NavLink className="nav-link dropdown-toggle"
                                                            role="button" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            {auth?.user?.name.toUpperCase()}
                                                        </NavLink>
                                                        <ul className="dropdown-menu">
                                                            {
                                                                auth?.user?.role === 1 ? (
                                                                    <>
                                                                        <li><NavLink to='/admin/admindashboard'
                                                                            className="dropdown-item" >
                                                                            Dashboard
                                                                        </NavLink></li>
                                                                    </>) : (
                                                                    <>
                                                                        <li><NavLink to='/user/profile'
                                                                            className="dropdown-item" >
                                                                            Profile
                                                                        </NavLink></li>
                                                                    </>)
                                                            }


                                                        </ul>
                                                    </li>
                                                    {/* <li className="nav-item">
                                                        <NavLink to='/profile' className='navbar-brand' > {auth?.user?.company}</NavLink>
                                                    </li> */}
                                                    <li className="nav-item">
                                                        <NavLink to='/login' onClick={handleLogout} className='nav-link' >Logout</NavLink>
                                                    </li>
                                                </>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </>
                )
            }

        </>
    )
}
export default Navbar 



