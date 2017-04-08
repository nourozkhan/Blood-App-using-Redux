import React from 'react';
import { Link } from 'react-router';
//import RaisedButton from 'material-ui/RaisedButton';

export default class Thanks extends React.Component {
    render() {
        return (

            <div>
                <center>
                    <h1>Thanks for donation...!</h1>
                </center>
                <Link to="/main"><button>Home</button></Link>
            </div>

        )
    }
}