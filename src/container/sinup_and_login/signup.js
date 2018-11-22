import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            report: {}
        };
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({});
        const formData = new FormData(e.target);
        fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                if (myJson.status === 'fail') {
                    this.setState({
                        report: myJson.report
                    });
                    // this.props.history.push('/');
                } else {
                    this.props.history.push('/login');
                }

            })
            .catch(err => {
                return err;
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="signup-form">
                        <form onSubmit={this.onSubmit}>
                            <h2 className="text-center">Sign Up</h2>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        {
                                            this.state.report.first_name ? <span className={"text-danger"}>{this.state.report.first_name[0]}</span> : null
                                        }
                                        <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" tabindex="1" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        {
                                            this.state.report.last_name ? <span className={"text-danger"}>{this.state.report.last_name[0]}</span> : null
                                        }
                                        <input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" tabindex="2" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" name="display_name" id="display_name" className="form-control input-lg" placeholder="Mobile No." tabindex="3" />
                            </div>
                            <div className="form-group">
                                {
                                    this.state.report.email ? <span className={"text-danger"}>{this.state.report.email[0]}</span> : null
                                }
                                <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabindex="4" />
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        {
                                            this.state.report.password ? <span className={"text-danger"}>{this.state.report.password[0]}</span> : null
                                        }
                                        <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" tabindex="5" />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password" tabindex="6" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <input type="submit" value="Register" className="btn btn-register btn-block btn-lg" tabindex="7" />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <Link className="btn btn-success btn-block btn-lg" to="/login">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;