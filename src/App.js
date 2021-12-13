import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Booking from './Pages/Home/Booking/Booking';
import NotFound from './Pages/Home/NotFound/NotFound';
import AddServices from './Pages/Home/AddServices/AddServices';
import ManageService from './Pages/Home/ManageService/ManageService';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/LogIn'
import MyOrders from './Pages/Home/MyOrders/MyOrders';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/services">
         <Services></Services>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
         <Booking></Booking>
        </PrivateRoute>
        
        <PrivateRoute path="/addservice">
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/myorders">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/manageservice">
          <ManageService></ManageService>
          
          </PrivateRoute>
        <Route path="*">
         <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
