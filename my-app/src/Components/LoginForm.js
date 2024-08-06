import React , { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';


const LoginForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState('');

    const Handlesubmit = async (event) => {
        event.preventDefault();
        // alert(`Registered with Email: ${email}`);
        // setEmail('');
        // setPassword('');
        // navigate('/');
        try {
            const response = await axios.get('http://localhost:8080/getuser');
            const users = response.data;
            console.log("Fetched Users: ", users); 

            const user = users.find(
                (user) => user.email === email && user.password === password
            );
            console.log("Matched User: ", user); 

            if (user) {
                navigate('/'); 
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error("Error fetching users: ", error); 
        }
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
            <div className='outer-div-login'>
                <h1>Login</h1>
                <form onSubmit={Handlesubmit} className='form-control'>
                    <div className='text-control'>
                        <div>
                                <label id='labels'>Email</label>
                                <input id='inputs' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
                        </div>
                        
                        <br></br>
                        <div>
                            <label id='labels'>Password</label><br></br>
                            <input id='inputs' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
                        </div>
                        <br></br>
                    </div>
                    <div>
                        <button type="primary" className='button-login' onClick={Handlesubmit}>Login</button>
                    </div>
                </form>
                <p>Don't have an Account?<button className='log' onClick={() => { navigate("/Register") }}> Sign Up </button> 
                </p>


                
                        
                                
            </div>
        </div>
    </div>
    );
}

export default LoginForm;