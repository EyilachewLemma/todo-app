import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AddTaskModal from './AddTaskModal';
import {SearchOutlined,BellOutlined,UserOutlined,CopyOutlined,TableOutlined,MenuOutlined } from '@ant-design/icons'

function TheHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeHandler = () => {
    setIsModalOpen(false);
  };

  return (<div>
    <Navbar  expand="md" bg="dark" variant="dark" className='px-3 d-none d-md-flex'>
          <Nav className="me-auto">     
          <Button variant='none' className='text-white me-2'><MenuOutlined /></Button>  
          <Button variant='none' className='text-white me-2'><TableOutlined /> Dashboard</Button> 
          <Button variant='none' className='text-white'><CopyOutlined /> Collection</Button>      
            
          </Nav>
          <Nav>
            <Button variant='none' className='text-white' onClick={showModal} ><i className="fas fa-plus" style={{backgroundColor:'pink',padding:'3',borderRadius:'0.2rem'}}></i></Button>
            <Button variant='none' className='text-white'><SearchOutlined /></Button>
            <Button variant='none' className='text-white'><BellOutlined /></Button>
            <Button variant='none' className='text-white'><UserOutlined /></Button>
          </Nav>
           </Navbar>
           <AddTaskModal open={isModalOpen} onClose={closeHandler} />
           </div>
  );
}

export default TheHeader;