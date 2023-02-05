import {Fragment,useState} from 'react'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme,Checkbox  } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditModal from './EditModal'
import { actions } from '../store';
import { useDispatch } from 'react-redux';
import apiClient from '../url';
const { Panel } = Collapse;
const TaskItem = ({task}) => {
    const [open,setOpen] = useState(false)
    const [openEditModal, setOpenEditModal] =useState(false)
    const dispatch = useDispatch()
    const onChangeHandler = ()=>{}
    const openEditModalHandler = () =>{
      setOpen(false)
      setOpenEditModal(true)
    }
    const closeEditModalHandler =()=>{
      setOpenEditModal(false)
    }
    const openModalHandler = () =>{
        setOpen(true)
    }
    const deleteTaskHandler = async () =>{
   try{
    const response = await apiClient.delete(`tasks/${task.id}`)
    if(response.status === 200){
      dispatch(actions.taskAction.deleteTask(task.id))
    }
   }
   catch(err){}
    }
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 10,
    background: "#424141",
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  const handleClose = ()=>{
    setOpen(false)
  }
  return (
    <Fragment>
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
      expandIconPosition="end"
      style={{
        background: "#1C1E1E",
      }}
    >
      <Panel
       header=<div className='d-flex'>
       <span><Checkbox onChange={onChangeHandler} style={{backgroundColor:"pink",borderRadius:'0.2rem'}}></Checkbox></span>
       <span className='text-white ms-3 fw-bold'>{task.title}</span>
       </div>
        key={task.id} 
        style={panelStyle}
        onClick={openModalHandler}
        >
        <div className='text-white d-flex'>
        <span><i className="fas fa-calendar"></i></span>
        </div>
      </Panel>
    </Collapse>
    <div>
    <Modal 
     show={open} 
     onHide={handleClose}
     size="sm"
     centered
     >
      <Modal.Body style={{backgroundColor:'#797676',borderRadius:'0.4rem'}}>
      <div className='d-flex justify-content-evenly'>
      <Button variant="secondary" onClick={openEditModalHandler} className="addtaskbtn me-4 rounded-3 py-1">
      Edit Task Title
      </Button>
         <Button variant='secondary' className='border me-2' onClick={deleteTaskHandler}>Delete Task</Button>
         <Button variant='secondary' className='border' onClick={handleClose}>Cancel</Button>
      </div>
        </Modal.Body>
          
      </Modal>
    </div>
    <EditModal open={openEditModal} onClose={closeEditModalHandler} task={task}/>
    </Fragment>
  );
};
export default TaskItem;