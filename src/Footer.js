import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../src/components/Home'
import Mission from '../src/components/Mission'
import Students from '../src/components/Students'
import Universities from '../src/components/Universities'
import Signup from '../src/components/Signup'
import Login from '../src/components/Login'
import Contact from '../src/components/Contact'


class Footer extends Component{
    render(){
        return(
            <div className = "footer">
                    <ul>
                        <Router forceRefresh>
                            <li>
                            <Link to="/">Collab Learning</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li>
                            <Link to="/mission">Mission</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li>
                            <Link to="/students">Students</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li>
                            <Link to="/universities">Universities</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li>
                            <Link to="/contact">Contact Us</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li>
                            <Link to="/signup">Signup</Link>
                            </li>
                        </Router>
                        <Router forceRefresh>
                            <li>
                            <Link to="/login">Login</Link>
                            </li>
                        </Router>
                    </ul>
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
                            <Route exact path="/signup">
                                <Signup />
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
            </div>
        )
    }
}

export default Footer