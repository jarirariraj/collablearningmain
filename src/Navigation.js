import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import Home from '../src/components/Home'
import Mission from '../src/components/Mission'
import Students from '../src/components/Students'
import Universities from '../src/components/Universities'
import Contact from '../src/components/Contact'
import FAQ from '../src/components/FAQ'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Notifications from '../src/components/Notifications'
import Profile from '../src/components/Profile';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dashboard from '../src/components/Dashboard';
import Settings from '../src/components/Settings';
import Login from '../src/components/Login'
import Signup from '../src/components/Signup'
import './style/navbarStyle.scss'




const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);

    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleCloseProfile = () => {
        history.push('/profile');
        setAnchorEl(null);
      };

      const handleCloseDashboard = () => {
        setAnchorEl(null);
        history.push('/dashboard');
      };

      const handleCloseSettings = () => {
        setAnchorEl(null);
        history.push('/settings');
      };

  

        
    
        const loggedOutLinks = document.querySelectorAll(".logged-out");
        const loggedInLinks = document.querySelectorAll(".logged-in");

        const setUpUI = (user) => {
            if(user) {
                loggedInLinks.forEach(item => item.style.display = 'block');
                loggedOutLinks.forEach(item => item.style.display = 'block');

            } else {
                loggedInLinks.forEach(item => item.style.display = 'none');
                loggedOutLinks.forEach(item => item.style.display = 'block');

            }
        }

        return(
            <div>
                <header>
                <nav>
                <Router forceRefresh>
                    <Link to="/" className = "logo">Collab Learning</Link>
                </Router>

                    <ul>
                        <Router forceRefresh>
                            <li className ="logged-out mission-button"> 
                            <Link to="/mission">Mission</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li className ="logged-out">
                            <Link to="/students">Students</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li className ="logged-out">
                            <Link to="/news">FAQ</Link>
                            </li>
                        </Router>

                        <Router forceRefresh>
                            <li className ="logged-out">
                            <Link to="/universities">Universities</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li className ="logged-out">
                            <Link to="/contact">Contact</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li className ="logged-out login-button">
                            <Link to="/login">Login</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li className ="logged-out signup-button">
                            <Link to="/signup">Signup</Link>
                            </li>
                        </Router>

                        <Router forceRefresh>
                            <li className ="logged-in notif-button" >
                            <Link to="/notifcations">
                            <Button>
                            <NotificationsIcon>
                            </NotificationsIcon>
                            </Button>
                            </Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li className ="logged-in menu-button">
                         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                         <AccountCircleIcon>
                            <Link to="/profile"/>
                            </AccountCircleIcon>

                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                 <Router forceRefresh>
                                 <Link to="/profile">
                                <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                                </Link>
                                </Router>
                                <Router forceRefresh>
                                 <Link to="/dashboard">
                                <MenuItem onClick={handleCloseDashboard}>Dashboard</MenuItem>
                                </Link>
                                </Router>
                                <Router forceRefresh>
                                 <Link to="/settings">
                                <MenuItem onClick={handleCloseSettings}>Settings</MenuItem>
                                </Link>
                                </Router>
                                <Router forceRefresh>
                                 <Link to="/">
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Link>
                                </Router>

                            </Menu>
                            </li>
                        </Router>

                    </ul>
                    </nav>
                </header>

                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/mission">
                                <Mission />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/students">
                                <Students />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/faq">
                                <FAQ />
                            </Route>
                        </Switch>
                    </Router>

                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/universities">
                                <Universities />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/notifications">
                                <Notifications />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/profile">
                                <Profile />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/settings">
                                <Settings />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/signup">
                                <Signup />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/profile">
                                <Profile />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </Router>
                    <Router forceRefresh>
                        <Switch>
                            <Route exact path="/settings">
                                <Settings />
                            </Route>
                        </Switch>
                    </Router>
            </div>
        )
    }

export default Navigation