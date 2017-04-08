
import React from 'react';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut, isLoggedIn, loginData, logIn } from '../../actions/exampleAction';


class AppBarExampleIcon extends React.Component {


    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                // User is signed in.
                this.props.loginData(user);
                this.props.isLoggedIn(true);
                browserHistory.replace('/main');
            } else {
                // User is signed out.
                this.props.loginData(null);
                this.props.isLoggedIn(false);
                browserHistory.replace('/');
            }
            console.log("is logged in", this.props.isLogged);
        });
    }


login(e) {
    e.preventDefault();
    this.props.logIn();
  }


    render() {
        return (
            <div>
                <center>
                    <div>
                        <AppBar
                            title="Blood Bank Application"
                            iconStyleLeft={{ "display": "none" }} style={{ "backgroundColor": "rgb(239, 87, 79)" }}
                            iconElementRight={      this.props.isLogged === true
                                ? 
                                <div className="btn-group" onClick={this.props.logOut} >
                                    <a className='btn btn-primary'><i className="fa fa-facebook" style={{ width: 6, height: 16 }}></i></a>
                                    <a className='btn btn-primary ' href='' style={{ 'width': 100 }}> Logout</a>
                                </div>
                                :
                                <div className="btn-group" onClick={this.login.bind(this)} >
                                    <a className='btn btn-primary'><i className="fa fa-facebook" style={{ width: 6, height: 16 }}></i></a>
                                    <a className='btn btn-primary ' href='' style={{ 'width': 180 }}> Sign in with Facebook</a>
                                </div>}
                        />
                    </div>

                    {this.props.children}
                </center>

            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ isLoggedIn, loginData, logOut, logIn }, dispatch);
}
function mapStateToProps({ isLogged, loginError }) {
    return { isLogged, loginError };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppBarExampleIcon);