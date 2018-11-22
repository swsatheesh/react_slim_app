import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {};
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({});
        const formData = new FormData(e.target);
        fetch('/auth/login', {
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
                        ...myJson
                    });
                    // this.props.history.push('/');
                } else {
                    this.props.history.push('/home');
                }

            })
            .catch(err => {
                return err;
            });
    }
    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="login-form">
                        <h3>Login</h3>
                        {
                            this.state.status ? <span>Email or Password is incorrect</span> : null
                        }
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" name="email" className="input-lg form-control" placeholder="Your Email *" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="input-lg form-control" placeholder="Your Password *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn-lg btnSubmit" value="Login" />
                            </div>
                            <div className="form-group">
                                <a href="#" className="ForgetPwd" value="Login">Forget Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;