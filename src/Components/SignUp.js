import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import { Form, Alert, Button, Row, Col, Container } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    
<>
<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '900px' }}>
<section className="login" py-5 bg-light>
  <div className="container" >
    <div className="row" g-0 >
      <div className="col-lg-5" style={{ backgroundImage: " url('https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.6435-9/p180x540/221416672_4359414714115016_4589805908274039668_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeG_K15tqUvmV-6HEmkzTHM2QLOPcot1b9xAs49yi3Vv3Cy1D_AWTw0i9-5kE8jUzkV1kHA4yoULySMtqKoaflft&_nc_ohc=rjJzr0uQBhIAX8Ycxzm&_nc_ht=scontent.fjnb1-1.fna&oh=30c6be4f617be0ea4b2dccb14557d34a&oe=61308AFE')", borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }} >
      
      </div>
          <div className="col-lg-7 text-center py-5">
            <h1>Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <form >
             <div className="form-row py-3 pt-2" >
                <div className="offset-1 col-lg-10">
            <input
            type="text"
            className=" inp px-3"
            name="displayName"
            value={displayName}
            placeholder="Your Name"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
              </div>
              </div>
              <div className="form-row " >
                <div className="offset-1 col-lg-10">
                  <input type="email" id="userEmail" name="userEmail" value={email} className="inp px-3" placeholder="Your Email" onChange={event => onChangeHandler (event)} required/>
              </div>
                </div>
                <div className="form-row py-2 pt-3">
                <div className="offset-1 col-lg-10">
                <input type="password" id="password" name="userPassword" value={password} className="inp px-3"
                 placeholder="Your Password" onChange={event => onChangeHandler (event)} required />
              </div>
                </div>
          
                <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn1" type="submit" onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}>Sign Up</button>
              </div>
                </div>
        
        <div className="w-100 text-center mt-2">
      Already have an accout? <Link to="/">Sign In</Link>
      </div>   
            </form>    
           
            </div>
      </div>
  </div>   
  
</section>
</div>
</Container>
</>

    
  );
};

export default SignUp;