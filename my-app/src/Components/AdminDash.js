import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

const AdminDash = () => {
  const [hallData, setHallData] = useState({
    name: '',
    location: '',
    price: '',
    rating: '',
  });

  const [hallList, setHallList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [showHalls, setShowHalls] = useState(false); // State to manage hall list visibility

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await axios.get('http://localhost:8080/halls');
        setHallList(response.data);
      } catch (error) {
        console.error('Error fetching halls:', error);
      }
    };
    fetchHalls();

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHallData({ ...hallData, [name]: value });
  };

  const handleAddHall = async () => {
    try {
      const response = await axios.post('http://localhost:8080/halls', hallData);
      setHallList([...hallList, response.data]);
      setHallData({ name: '', location: '', price: '', rating: '' });
    } catch (error) {
      console.error("Something went wrong " + error);
    }
  };

  const handleToggleHalls = () => {
    setShowHalls(!showHalls); // Toggle the state
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: 16, marginBottom: 16 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Add New Hall
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Hall Name"
            name="name"
            value={hallData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Hall Location"
            name="location"
            value={hallData.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Hall Price"
            name="price"
            value={hallData.price}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Hall Rating"
            name="rating"
            value={hallData.rating}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddHall}
            style={{ marginTop: 16 }}
          >
            Add Hall
          </Button>
        </form>
      </Paper>

      <Box mb={10} sx={{backgroundColor:'gainsboro'}}></Box> 
        <Typography
          variant="h5"
          color="primary"
          onClick={handleToggleHalls}
          style={{ cursor: 'pointer', marginBottom: 16 }}
        >
          List Of Halls
        </Typography>
      {showHalls && ( // Conditionally render the hall list
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Hall Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Hall Location</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Hall Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Hall Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hallList.map((hall, index) => (
                <TableRow key={index}>
                  <TableCell>{hall.name}</TableCell>
                  <TableCell>{hall.location}</TableCell>
                  <TableCell>{hall.price}</TableCell>
                  <TableCell>{hall.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Box mb={10}></Box> 
        <Typography variant="h5" color="primary">
          List Of Users
        </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.Firstname}</TableCell>
                <TableCell>{user.Lastname}</TableCell>
                <TableCell>{user.Email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminDash;
