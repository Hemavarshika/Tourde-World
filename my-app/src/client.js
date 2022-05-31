// import React from 'react';
// import './App.css';
// import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';


// class App extends Component {
// state = {
//     data: null
//   };

//   componentDidMount() {
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // fetching the GET route from the Express server which matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     return body;
//   };

//   render() {
//     return (
//         <>
//         <Router>
//           <Navbar />
//            <Switch>
//              <Route  path='/' exact component={Home} />
//              <Route path='/services' component={Services}/>
//              <Route path='/products' component={Products}/>
//              <Route path='/sign-up' component={SignUp}/>

//            </Switch>
//         </Router> 
//       </>
//     );
//   }
// }

// export default App;

