import React from 'react';

import './App.scss';

import TopBar from './components/top-bar/top-bar.component';
import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Footer from './components/footer/footer.component';
import Newsletter from './components/newsletter/newsletter.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import CredentialsPage from './pages/credentials/credentials.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch , Route, Redirect} from 'react-router-dom';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
     
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    window.scrollTo(0,0);
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
         
        })
        
      }
        this.setState({currentUser: userAuth});
      

      
    })

    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <TopBar currentUser={this.state.currentUser}/>
        <NavBar />
          <Switch>
  
            <Route exact path='/' component={HomePage} />
            <Route  path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/credentials' component={CredentialsPage} />
            <Route exact path='/sign-in' render={ ()=> this.state.currentUser ? (<Redirect to='/' />) : (<SignInPage />) } />
            <Route exact path='/sign-up' render={ ()=> this.state.currentUser ? (<Redirect to='/' />) : (<SignUpPage />) } />
            
          </Switch>
        <Newsletter />
        <Footer />  
      </div>
    );
  }
  
}

export default App;
