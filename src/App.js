import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from 'shared/Header';
import Footer from 'shared/Footer';
import Loading from 'shared/Loading';

const HomePage = lazy(() => import('pages/Home'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading full />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
      <Footer />
      <ToastContainer autoClose={5000} />
    </Router>
  );
}

export default App;
