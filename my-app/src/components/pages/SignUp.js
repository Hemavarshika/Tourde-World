import React,{useState,useEffect} from 'react'
 import'../../App.css'
 import axios from 'axios'
 import Footer from '../Footer';

function SignUp() {
    const [Fname, setFName] = React.useState('');
    const [Lname, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setCPassword] = React.useState('');
    const [contact, setContact] = React.useState('');


  
    function handleSubmit(event) {
     
      console.log('Fname:', Fname);
      console.log('Lname:', Lname);
      console.log('email:', email);
      console.log('Password', password);
      console.log('Confirm Password', cpassword);
      console.log('Contact No.', contact);
      event.preventDefault();

      axios.post('http://localhost:5000/register', {
        Fname, Lname, email, password, cpassword, contact
      }).then((res) => {
        console.log(res);
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });

    }
 
    return (
   <>   
   <div className="mainform">  
    <div className="form-box">
      <form onSubmit={handleSubmit}>
      <div className="field1">
        <div>
          <label htmlFor="Fname">FName</label>
          <input
            className="focus-only"
            id="Fname"
            type="text"
            value={Fname}
            placeholder="First Name"
            name = {Fname}
            onChange={(e) => setFName(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="Lname">LName</label>
          <input
            id="Lname"
            type="text"
            value={Lname}
            placeholder="Last Name"
            onChange={(e) => setLName(e.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="contact">Contact No.</label>
          <input
            id="contact"
            type="text"
            value={contact}
            placeholder="Contact"
            onChange={(e) => setContact(e.target.value)}
         
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            id="cpassword"
            type="password"
            value={cpassword}
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value)}
        
          />
        </div>
        </div>    
        <button id="submitBtn"type="submit" className="submitBtn btn">Submit</button>
    
      </form>
      </div>
      </div>  
      <Footer />
      </>
    );
  }
  export default SignUp;