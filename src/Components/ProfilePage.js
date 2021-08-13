import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import { Card, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Switch, Link} from "react-router-dom";
import React ,{useState , useEffect} from "react";
import React from "react";
import{v4 as uuidv4} from "uuid";
import React,{useState} from "react";
import "./mystyles.css";
import "./style.css"
import Form from './MyForm';
//import TodoList from './comps/TodoList';
import DateTime from './DateTime';
import { Button, Card, Form, Container, Row, Col} from 'react-bootstrap';
import  ReactCalendar from './ReactCalendar';
import Important from "./Important "
import Calender from "./Calender"
import Notes from "./Notes"
import Planned from "./Planned"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddIcon from '@material-ui/icons/Add';
import AddAlertIcon from '@material-ui/icons/AddAlert';




const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);

  const[input , setInput]=useState("");
  const[todos, setTodos]= useState([]);

  const [error, setError] = useState('');
  const history = useHistory();
  
  const styles = { borderRadius: '0px', height: '550px',width:'250px',marginLeft:'60px', background:"#D2BC2D", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", align: "left"};
  const styleon = {borderRadius: '0px', height: '550px',width:'452px',marginLeft:'110px',overflowY:"scroll"};
  const style = {borderRadius: '0px', height: '550px',width:'220px',marginLeft:'271px', background:"#D2BC2D", borderTopRightRadius: "10px", borderBottomRightRadius: "10px"};


  return (
    <>
     
<div>
<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '900px' }}>
<Grid className="mainGrid " container spacing={0} >
<Grid className="firstinGrid " item xs={2} style={{ flexGrow: 1}}>
 <Paper style={styles} className="papertwo" >
<input style={{borderRadius:'5px',border:"2px solid #e0e0e0",width:"170px", height:'30px',fontSize:'15px', margin:'15px', textAlign:"left" }} type="text" placeholder="search"  />


<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none"}} >
<WbSunnyIcon fontSize="medium" style={{
               width: ''
             }} />

<Link to="/" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > My Day <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<StarIcon fontSize="medium" style={{
               width: ''
             }}/>
<Link  to="/Important" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '10px', textDecoration:"none" }} > Important <i style={{color: '#ffff00'}} class="fa fa-star" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<EventAvailableIcon fontSize="medium" style={{
               width: ''
             }}/>
<Link  to="/Planned" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > Planned <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<CalendarTodayIcon fontSize="medium" style={{
               width: ''
             }}/>
<Link  to="/Calender" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > Calender <i style={{color: '#ff9800'}} class="fa fa-calendar" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<AssignmentIndIcon fontSize="medium" style={{
               width: ''
             }}/> 
<Link  to="/Notes" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > Tasks <i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

   </Paper>
        </Grid>

<Grid className="firstinGrid " item xs={4}> <Paper style={styleon} className="bgtodo">

<Form input={input}
setInput={setInput}
todos={todos}
setTodos={setTodos}
/>
<h5 style={{color:"#e65100", textAlign:"left"}}></h5>

</Paper>
</Grid>
    <Grid className="firstinGrid " item xs={2} >
        <Paper style={style} className="papertwo" >
          
<Typography style={{ marginLeft:'30px',fontSize: '10px' ,color:'#24527a', fontWeight:"bold", marginBottom:"50px" }}>
<h6 className = "text-2xl font-semibold">User name: {displayName}</h6>
        <h6 className = "italic">{email}</h6>
          </Typography>

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<AddIcon fontSize="medium" style={{
               width: ''
             }}/> 
<Link to="/" style={{color:'black', marginTop:'720px',marginRight:'0px', marginLeft:'0px',textDecoration:"none" }} ><i style={{marginRight:'10px' ,color: '#01579b'}} class="fa fa-plus" aria-hidden="true"></i> Add step </Link>

</Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<WbSunnyIcon fontSize="medium" style={{
               width: ''
             }}/>
<Link  to="/" style={{color: 'black', marginTop: '720px', marginRight: '0px',marginLeft: '0px', textDecoration:"none" }} ><i  style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i> Add to my day  <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<AddAlertIcon fontSize="medium" style={{
               width: ''
             }}/>
<Link  to="/Notes" style={{color: 'black', marginTop: '720px',marginRight: '10px', marginLeft: '0px', textDecoration:"none" }} > <i  style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i>Remind me<i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Planned" style={{color: 'black', marginTop: '720px',marginLeft: '30px', textDecoration:"none" }} ><i style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i>Add notes <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >
<br />
<br />
<div className="offset-3 col-lg-10">
<button className = "btn1" onClick = {() => {auth.signOut()}}>Sign out</button>
</div>
 </Paper>
 
        </Grid>
      </Grid>

    </div>
    </Container>
    </div>
    </>
  ) 
};

export default ProfilePage;