import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Box } from '@mui/material';

// Contract address and ABI
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 
const contractABI = require('../artifacts/contracts/SmartContract.sol/TaskManager.json').abi;

// Web3 instance
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const App = () => {
  const [contract, setContract] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskIndex, setTaskIndex] = useState('');

  useEffect(() => {
    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
    setContract(contractInstance);
  }, []);

  const handleAddTask = async () => {
    await contract.methods.addTask(taskDescription).send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' }); 
    setTaskDescription('');
    handleGetTasks();
  };

  const handleGetTasks = async () => {
    const tasks = await contract.methods.getTasks().call();
    setTasks(tasks);
  };

  const handleMarkTaskCompleted = async () => {
    await contract.methods.markTaskCompleted(taskIndex).send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' });
    setTaskIndex('');
    handleGetTasks();
  };

  const handleRemoveCompletedTasks = async () => {
    await contract.methods.removeCompletedTasks().send({ from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' }); 
    handleGetTasks();
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Task Manager</Typography>
      <Box display="flex" alignItems="center" marginBottom="1rem">
        <TextField
          label="Task Description"
          variant="outlined"
          fullWidth
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>Add Task</Button>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="1rem">
        <TextField
          label="Task Index"
          variant="outlined"
          type="number"
          value={taskIndex}
          onChange={(e) => setTaskIndex(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <Button variant="contained" color="secondary" onClick={handleMarkTaskCompleted}>Mark Completed</Button>
      </Box>
      <Box marginBottom="1rem">
        <Button variant="contained" color="primary" onClick={handleGetTasks} style={{ marginRight: '1rem' }}>Get All Tasks</Button>
        <Button variant="contained" color="error" onClick={handleRemoveCompletedTasks}>Remove Completed Tasks</Button>
      </Box>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${index}. ${task.description}`}
              secondary={task.completed ? 'Completed' : 'Pending'}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
