import React , { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import Navbar from './navbar';
import axios from 'axios';
import Password from 'antd/es/input/Password';

import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';

const RegisterForm = () => {
    const [firstname,setFirstName] = useState("");
    const [lastaname,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cnfrmpwd,setConfirmPassword] = useState("");

    const Handlesubmit = (event) => {
        event.preventDefault();
        // alert(`Registered with username: ${firstname}`);
        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
        // navigate('/login')
        const userdata = {
            Firstname: firstname,
            Lastname: lastaname,
            Email: email,
            Password: password
        }
        axios.post(`http://localhost:8080/users`, userdata)
        .then(res => {
        console.log(res.data);
        navigate('/login');
      })
      .catch(error => {
        console.log("Something went wrong " + error);
      });
        
    }
    
    const checkPassword = (event) => {
        event.preventDefault()
        let password = document.getElementById
        ("password").value;
        let cnfrmpwd = document.getElementById
        ("cnfrm-pwd").value;
        console.log(password,cnfrmpwd);
        let message = document.getElementById
        ("message");

        if(password.length != 0){
            if(password == cnfrmpwd){
                message.textContent = "Passwords match";
                message.style.color = "#00FF00";
                document.getElementById('button').disabled = false;
                document.getElementById('button').style.opacity = (1.4);
            }

            else{
                message.textContent = "Passwords don't match"; 
                message.style.color = "#FF0000";
                document.getElementById('button').disabled = true;
                document.getElementById('button').style.opacity = (0.4);
            }
        }

        // const checkValues = (event) => {
        //     event.preventDefault()
        //     let details = document.getElementById("inputs").value;
        //     let detailsmessage = document.getElementById("details-message").value;
        //     if(details == null)
        //     {
        //         detailsmessage.textContent = "This is a required field";
        //         detailsmessage.style.color = "#FF0000";
        //     }
        // }
    }
    
    const navigate = useNavigate()


    return(
    

            
    <div>
        <div className='home-header'>
              <div className='header-title'>
                <img src={hallspace} className='web-logo'></img>
                <p className='header-title-text'>HallSpace</p>

              </div>
              
            </div>

        <div className='outer'>

    
            <div className='outer-div'>
                <h1>Sign Up</h1><br></br>
                <form className='form-control' onSubmit={Handlesubmit}>
                    <div className='text-control'>
                        <div>
                            <label id='labels'>Firstname</label><br></br>
                            <input id='inputs' type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter Firstname' required></input>
                        </div>
                        
                        <br></br>
                        <div>
                            <label id='labels'>Lastname</label><br></br>
                            <input id='inputs' type="text" value={lastaname} onChange={(e) => setLastName(e.target.value)} placeholder='Enter Lastname' required></input>
                        </div>
                        
                        <br></br>
                        <div>
                            <label id='labels'>Email</label><br></br>
                            <input id='inputs' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required></input>
                        </div>
                        
                        <br></br>
                        <div>
                            <label id='labels'>Password</label><br></br>
                            <input for="password" className='inputs' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required onKeyUp={checkPassword}></input>
                        </div>
                        <br></br>
                        <div>
                            <label id='labels'>Confirm Password</label><br></br>
                            <input for="cnfrm-pwd" className='inputs' id='cnfrm-pwd' type="password" value={cnfrmpwd} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Passwrod' required onKeyUp={checkPassword}></input>
                        </div>
                        
                        
                            <p id='message'></p>
                        
                    </div>
                    <div>
                        <button  id='button' className='button-signup' onClick={Handlesubmit}>Sign Up</button>
                    </div>
                    
                    
                </form>
                <p>Already have an Account?<button className='log' onClick={() => { navigate("/login") }}> Login </button> 
                </p>
                    
                        
                                
            </div>
        </div>
    </div>
            
    
    );
}

export default RegisterForm;