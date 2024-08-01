import React, { useState , useEffect }  from 'react'
import Navbar from "./navbar";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import './sidebar.css';
import './HomePage.css';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';

import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';


import AdminDash from './AdminDash';
// import Users from './Users'
// import Halls from './Halls';

function AdminHome(){
    
  const navigate = useNavigate();

  const options = [
    { value: "ahemedabad", label: "Ahmedabad" },
    { value: "bangalore", label: "Bangalore"},
    { value: "chennai", label: "Chennai" },
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" }
  ];
  
  
  const [city, setCity] = useState('');
  const [date, setDate] = useState(null);


  const handleChange = (event) => {
      setCity(event.target.value);
  };

  const handleDateChange = (newDate) => {
      setDate(newDate);
  };

  const [selectedValue, setSelectedValue] = useState("");
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
  
    const handleClick = () => {
      if (selectedValue === "ahemedabad") {
          console.log(selectedValue);
          navigate("/ahmedabad")
      }
      else if (selectedValue === "bangalore") {
          console.log(selectedValue);
          navigate("/bangalore")
      }
      else if (selectedValue === "chennai") {
          console.log(selectedValue);
          navigate("/chennai")
      }
      else if (selectedValue === "delhi") {
          console.log(selectedValue);
          navigate("/delhi")
      }
      else if (selectedValue === "mumbai") {
          console.log(selectedValue);
          navigate("/mumbai")
      }
  }

  
    // const itemData = [
    //   {
    //     img: 'https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Bed',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1579625498716-f6b4502d8091?q=80&w=2985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Kitchen',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1549964336-96c968e00d5b?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Sink',
    //   },
    //   {
    //     img: 'https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Books',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1526568929-7cdd510e77fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    //     title: 'Chairs',
    //   },
    //   {
    //     img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Candle',
    //   }
      
      
    // ];

    
    const [users, setUsers] = useState([]);
    const [halls, setHalls] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const usersResponse = await axios.get('http://localhost:8080/users');
          const hallsResponse = await axios.get('http://localhost:8081/halls');
          setUsers(usersResponse.data);
          setHalls(hallsResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    
    

      
    
    return(
        <div>
          
            <div className='home-header'>
              <div className='header-title'>
                <img src={hallspace} className='web-logo' onClick={navigate("/")}></img>
                <p className='header-title-text'>HallSpace</p>

              </div>
              <div className='header-right'>
                <nav className='nav'>
                    <ul className='nav-links'>
                        <li><a className='links'onClick={() => navigate('/')}>Home</a></li>
                    </ul>
                </nav>
                <div>
                    <button onClick={() => navigate("/Roles")} className='hm-login-button'>Login</button>
                </div>
              </div>
            </div>

            

            
          

            {/* Search box */}
            <div className='outer-search'>
                <div className='search-wrapper'>
                    <div className='search-text'>
                        <p>FIND A HALL IN INDIA</p>
                        <p>_________________</p>
                    </div>
                    <div className='main-search'>
                        <div className='city-select'>
                            <FormControl style={{ width: 200 }} variant="outlined" margin="normal">
                                <InputLabel id="city-select-label">City</InputLabel>
                                <Select
                                    labelId="city-select-label"
                                    id="city-select"
                                    value={selectedValue}
                                    onChange={handleSelectChange}
                                    label="Select City"
                                >
                                      {options.map((option) => (
                                        <MenuItem
                                          key={option.value}
                                          value={option.value}
                                          disabled={option.disabled}
                                        >
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                      
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select Date"
                                    value={date}
                                    onChange={handleDateChange}
                                />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <Button variant="contained" color="error" onClick={handleClick}>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* dashboard */}
            <div className="title-text">
                <h1>Admin Dashboard</h1>
                
            </div><br></br>
            {/* <div className="outer-roles-wrapper">
                <div className="outer-roles">
                    <div className="admin-dash">
                        <img className="admin-image" src={adminlogo}></img>
                        <h1 className="roles-title">No. of Halls</h1>
                        <h2>25</h2>
                        
                    </div>
                    <div className="admin-dash">
                        <img className="adminimage" src={userlogo}></img>
                        <h1 className="roles-title">No. of User</h1>
                        <h2>2</h2>
                        
                    </div>
                    
                </div>

           </div> */}

                {/* <Container>
                  <Typography variant="h4" gutterBottom>
                    Admin Dashboard
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Paper>
                        <Users users={users} />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Paper>
                        <Halls halls={halls} />
                      </Paper>
                    </Grid>
                  </Grid>
            </Container> */}
            <AdminDash/>
            {/* Footer */}
            <footer className='footer'>
              <div class="footer-content">
                  <h3>HallSpace</h3>
                  <p>Your one-stop solution for booking halls for events, meetings, and more.</p>
                  <ul class="socials">
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2024 HallSpace. Designed by Team8</p>
              </div>
            </footer>
            
            
            
        </div>
    )
}

export default AdminHome;