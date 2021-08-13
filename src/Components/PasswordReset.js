import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";
import { Form, Alert, Button, Row, Col, Container } from "react-bootstrap";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
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
            
            <form action="">
            {emailHasBeenSent && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
            )}
             <div className="form-row py-3 pt-2" >
                <div className="offset-1 col-lg-10">
            <input
            type="email"
            name="userEmail"
            className=" inp px-3"
            value={email}
            placeholder="Your Email"
            id="userEmail"
          
            onChange={event => onChangeHandler(event)}
          />
              </div>
              </div>
          
                <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn1" type="submit" onClick={event => {
              sendResetEmail(event);
            }}>Reset Password</button>
              </div>
                </div>
        
        <div className="w-100 text-center mt-2">
      Need an accout? <Link to="/signUp">Sign Up</Link>
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

export default PasswordReset;