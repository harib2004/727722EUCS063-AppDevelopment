import React, { useState } from 'react';
 // Update with the correct path
import ProfileDropdown from './ProfileDropdown'; // Import the ProfileDropdown component
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';


import './userpage.css';

const UserPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleMenuClose();
    navigate('/profile'); // Updated to use navigate
  };

  const handleMyBookings = () => {
    handleMenuClose();
    navigate('/mybookings'); // Updated to use navigate
  };

  const handleSignOut = () => {
    handleMenuClose();
    // Add signout logic here, like clearing tokens, etc.
    navigate('/signout'); // Updated to use navigate
  };

  
  return (
    <div>
            {/* Header */}
            <div className='home-header'>
            <div className='header-title'>
                <img src={hallspace} className='web-logo' alt='HallSpace Logo'></img>
                <p className='header-title-text'>HallSpace</p>
            </div>
            <div className='header-right'>
                <nav className='nav'>
                <ul className='nav-links'>
                    <li><a className='links' onClick={() => navigate('/')}>Home</a></li>
                    <li><a href="#description" className='links'>About Us</a></li>
                    <li><a href="#contact-us" className='links'>Contact Us</a></li>
                </ul>
                </nav>
                <div className='profile-icon-container'>
                        <ProfileDropdown/>
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
    </div>
  );
};

export default UserPage;