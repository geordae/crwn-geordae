import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/signinnandup/SignInAndUp";
import Checkout from "./pages/checkout/Checkout";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/UserActions";
import { SelectCurrentUser } from "./redux/user/UserSelector";
import { createStructuredSelector } from "reselect";

// we want our app to be aware of any changes made from auth(signed in or out)
class App extends React.Component {
  // this is a method used to prevent memory leaks.
  unsubscribeFromAuth = null;

  //onAuthStateChanged is a subscription method
  //this subscription allows open communication between the app and firebase
  //any updates(sign in or sign out) will be passed on through firebase
  //it will pass the user and call it every time is mounted

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //loading our user here will tell us whether the user was logged in or not
    //user object is passed to authstatechanged method,
    //the user object is the user sigend in from firebase via gmail
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user }); // this will display properties of the current user

      if (userAuth) {
        //make a query request to the database here via await
        const userRef = await createUserProfileDocument(userAuth);

        //we need to see if the userauth
        //has been updated through the database via the userRef query.

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());

          //update the currentUser state
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        // sets state back to null if user has signed out.

        setCurrentUser(userAuth);
      }

      //sending the auth user to the
      //creatuserprofile function will allow
      //us to store the user in the database
      // createUserProfileDocument(user);

      //console.log(user);
    });
  }

  //close the subscription to prevent memory leak of data via unmounting
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    //CurrentUser being passed will let the components know when a user is signed in

    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInAndUp />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
