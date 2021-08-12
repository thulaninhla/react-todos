import React, {useState} from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import "./App.css";
import "./mystyles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Form, Alert, Button, Row, Col, Container } from "react-bootstrap";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    
    <div>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '900px' }}>
<section className="login" py-5 bg-light>
  <div className="container" >
    <div className="row" g-0 >
      <div className="col-lg-5" style={{ backgroundImage: " url('https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.6435-9/p180x540/221416672_4359414714115016_4589805908274039668_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeG_K15tqUvmV-6HEmkzTHM2QLOPcot1b9xAs49yi3Vv3Cy1D_AWTw0i9-5kE8jUzkV1kHA4yoULySMtqKoaflft&_nc_ohc=rjJzr0uQBhIAX8Ycxzm&_nc_ht=scontent.fjnb1-1.fna&oh=30c6be4f617be0ea4b2dccb14557d34a&oe=61308AFE')", borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }} >
      
      </div>
          <div className="col-lg-7 text-center py-5">
            <h1>Sign in</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <form >
              <div className="form-row py-3 pt-5" >
                <div className="offset-1 col-lg-10">
                  <input type="email" id="userEmail" name="userEmail" value={email} className="inp px-3" placeholder="Email" onChange={(event) => onChangeHandler(event)} required/>
              </div>
                </div>
                <div className="form-row">
                <div className="offset-1 col-lg-10">
                <input type="password" id="userPassword" name="userPassword" value={password} className="inp px-3"
                 placeholder="Password" onChange= {(event) => onChangeHandler(event)} required />
              </div>
                </div>
          
                <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn1" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>Sign in</button>
              </div>
                </div>

                <div className="w-100 text-center mt-2">
              <Link to="/passwordReset">Forgot Password</Link>
            </div>
        
        <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signUp">Sign Up</Link>
      </div>   
            </form>    
           
            </div>
      </div>
  </div>   
  
</section>
</div>
</Container>
</div>

  );
};

export default SignIn;