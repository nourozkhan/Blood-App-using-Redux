
import firebase from 'firebase';
import { browserHistory } from 'react-router';
// this example action creator returns action that is being used by the reducer '../reducers/exampleReducer'

export const IS_LOGGED = "Is_Logged";
export const LOGIN_DATA = "Login_Data";
export const LOGIN_ERROR = "Login_Error";
export const AVAILABLE_DONORS = "Available_Donors";



export function isLoggedIn(isLoggedIn) {

    return {
        type: IS_LOGGED,
        isLoggedIn
    }
}
export function loginData(loginData) {

    return {
        type: LOGIN_DATA,
        loginData
    }
}
export function loginError(loginError) {

    return {
        type: LOGIN_ERROR,
        loginError
    }
}
export function availableDonors(bloodDonors) {

    return {
        type: AVAILABLE_DONORS,
        bloodDonors
    }
}
export function logIn() {

    return (dispatch) => {
       
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) { 
            var user = result.user;
            console.log("login successful");
                dispatch(isLoggedIn(true));
                console.log(user.photoURL);
                dispatch(loginData(user.photoURL));
                browserHistory.replace('/main');
            
        }).catch(function (error) {

            dispatch(loginError(error));
        });
    }
}
export function logOut() {

    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful");
            dispatch(isLoggedIn(false));
            browserHistory.replace('/');
        }).catch(function (error) {
            dispatch(loginError(error));
        });
    }
}
export function signUp(email, pass) {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((result) => {
                console.log("signup successful");
                browserHistory.replace('/');
            }).catch(function (error) {

                dispatch(loginError(error))

            });
    }
}

export function submitForm(user, blood) {

    return (dispatch) => {
        firebase.database().ref('bloodgrp/' + blood + '/').push({ user })

        browserHistory.replace('/thanks');

    }
}

export function requestBlood(bloodRequest) {

    return (dispatch) => {

        var donorsCanDonate = [];
        var donorsArray = [];
        switch (bloodRequest) {
            case "A+":
                donorsCanDonate.push(['A+', 'O+', 'A-', 'O-']);

                break;

            case "B+": {
                donorsCanDonate.push(['B+', 'O+', 'B-', 'O-']);
                break;
            }
            case "AB+": {
                donorsCanDonate.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
                break;
            }
            case "O+": {
                donorsCanDonate.push(['O+', 'O-']);
                break;
            }
            case "A-": {
                donorsCanDonate.push(['A-', 'O-']);
                break;
            }
            case "B-": {
                donorsCanDonate.push(['B-', 'O-']);
                break;
            }
            case "AB-": {
                donorsCanDonate.push(['AB-', 'O-', 'A-', 'B-']);
                break;
            }
            case "O-": {
                donorsCanDonate.push(['O-']);
                break;
            }


        }

        donorsCanDonate.map((v, i) => {
            return v.map((value, index) => {

                // console.log(v);
                firebase.database().ref('/bloodgrp/' + value + '/').on('value', (data) => {
                    let obj = data.val();
                    // console.log(obj);
                    for (var prop in obj) {



                        donorsArray.push(obj[prop].user);
                        console.log(donorsArray);



                    }
                });
            });
        });
        dispatch(availableDonors(donorsArray));
    }
}