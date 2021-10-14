import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import NewCollections from './components/NewCollections/NewCollections';
import Banner from './components/Banner/Banner';
import Panjabis from './components/Panjabi/Panjabis';
import Sharees from './components/Sharee/Sharees';
import ThreePieces from './components/ThreePiece/ThreePieces';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SingleProduct from './components/SingleProduct/SingleSharee';
import SingleSharee from './components/SingleProduct/SingleSharee';
import SinglePanjabi from './components/SingleProduct/SinglePanjabi';
import SingleThreePiece from './components/SingleProduct/SingleThreePiece';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AuthContextProvider from './components/Context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route exact path="/sharees">
              <Sharees></Sharees>
            </Route>
            <Route exact path="/panjabis">
              <Panjabis></Panjabis>
            </Route>
            <Route exact path="/threepieces">
              <ThreePieces></ThreePieces>
            </Route>
            <PrivateRoute path="/sharees/:shareeId">
              <SingleSharee></SingleSharee>
            </PrivateRoute>
            <PrivateRoute path="/panjabis/:panjabiId">
              <SinglePanjabi></SinglePanjabi>
            </PrivateRoute>
            <PrivateRoute path="/threePieces/:threepieceId">
              <SingleThreePiece></SingleThreePiece>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
