import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveUser } from "../../redux/actions/user_details_action";

class Home extends Component {
    componentDidMount() {
        fetch('/user/getUser', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.props.dispatch(saveUser(myJson));
            })
            .catch(err => {
                return err;
            });
    }
    render() {
        return (
            <h1>
                Logged in.......
            </h1>
        );
    }
}

function mapStateToProps({ user }) {
    return {
        ...user
    };
}

export default connect(mapStateToProps)(Home);