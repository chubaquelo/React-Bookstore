import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Footer from './Footer';
import { localStorageSignIn } from '../actions';

const App = () => {
  const isLoggedIn = useSelector(state => state.session[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem('sessionID') && !isLoggedIn) {
      dispatch(localStorageSignIn(window.localStorage.getItem('sessionID')));
    }
  }, []);

  return (
    <main className="h-screen">
      <Header />
      <section className="min-h-80percent flex flex-col">
        <Switch>
          <Route path="/books">
            <BooksForm />
            <BooksList />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/" exact>
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </section>
      <Footer />
    </main>
  );
};

export default connect(null, null)(App);
