import React from 'react';
import { Switch , Route} from 'react-router-dom';
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

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
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
          // console.log(this.state)
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
            <Route exact path='/sign-in' component={SignInPage} />
  
          </Switch>
        <Newsletter />
        <Footer />  
      </div>
    );
  }
  
}

export default App;
