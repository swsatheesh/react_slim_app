import React, { Component } from 'react';

class ChangePassword extends Component {
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
        fetch('/auth/password/change', {
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
                        <h3>Change Password</h3>
                        {
                            this.state.status === "pass" ? <span className={"alert-success"}>Password Changed...</span> : null
                        }
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                {
                                    this.state.report.Oldpassword ? <span className={"text-danger"}>{this.state.report.Oldpassword[0]}</span> : null
                                }
                                <input type="password" name="Oldpassword" className="input-lg form-control" placeholder="Old Password *" />
                            </div>
                            <div className="form-group">
                                {
                                    this.state.report.Newpassword ? <span className={"text-danger"}>{this.state.report.Newpassword[0]}</span> : null
                                }
                                <input type="password" name="Newpassword" className="input-lg form-control" placeholder="New Password *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn-lg btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;