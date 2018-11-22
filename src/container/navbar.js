import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { NavDropdown, MenuItem } from 'react-bootstrap';

import { removeUser } from "../redux/actions/user_details_action";

class Navbar extends Component {
    constructor() {
        super();
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser() {
        fetch('/auth/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.props.dispatch(removeUser());
                this.props.history.push('/login');
            })
            .catch(err => {
                return err;
            });
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Stock Analysis</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Stock Analysis</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                {
                                    this.props.email ? (
                                        <Fragment>
                                            <li><Link to="/home">Home</Link></li>
                                            <li className={'divider-vertical'} />
                                            <NavDropdown eventKey={3} title={`${this.props.firstname} ${this.props.lastname}`} id="basic-nav-dropdown">
                                                <MenuItem onClick={this.logoutUser} eventKey={3.1}>Logout</MenuItem>
                                                <MenuItem eventKey={3.1}><Link to="/passwordChange">Change Password</Link></MenuItem>
                                            </NavDropdown>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <li><Link to="/">Sign Up</Link></li>
                                            <li className={'divider-vertical'} />
                                            <li><Link to="/login">Log In</Link></li>
                                        </Fragment>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


function mapStateToProps({ user }) {
    return {
        ...user
    };
}

export default withRouter(connect(mapStateToProps)(Navbar));
