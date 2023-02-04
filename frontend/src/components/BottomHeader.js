import {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {NavLink } from 'react-router-dom';
import AddTaskModal from './AddTaskModal';
import Button from 'react-bootstrap/Button';
import {PlusOutlined,SearchOutlined,BellOutlined,CopyOutlined,TableOutlined } from '@ant-design/icons'

function BottomHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const closeHandler = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
    <Navbar bg="dark" variant="dark" className='px-3 d-block d-md-none'>
          <Nav className="d-flex justify-content-evenly">   
          <Button variant='none' className='text-white me-2'><TableOutlined /></Button> 
          <Button variant='none' className='text-white'><CopyOutlined /></Button>      
            <Button variant='none' className='py-0' style={{backgroundColor:'pink'}} onClick={showModal} ><PlusOutlined style={{color:'white'}} /></Button>
            <Button variant='none' className='text-white'><SearchOutlined /></Button>
            <Button variant='none' className='text-white'><BellOutlined /></Button>
          </Nav>
           </Navbar>           
           <AddTaskModal open={isModalOpen} onClose={closeHandler} />
           </div>
  );
}

export default BottomHeader;