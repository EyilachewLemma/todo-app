import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { actions } from '../store';
import apiClient from '../url';

const  AddTaskModal = ({open,onClose,task}) =>{ 
    const [editdTaskTiitle,setEditdTaskTiitle] = useState(task.title)
    const dispatch = useDispatch()
    
    
    const onChangeHandler = ( e) =>{
        setEditdTaskTiitle(e.target.value)
    }
    const editTask = async () =>{
       try{
        const response = await apiClient.patch(`tasks/${task.id}`,{title:editdTaskTiitle,id:task.id})
        if(response.status === 200){
         dispatch(actions.taskAction.editTask({id:task.id,title:editdTaskTiitle}))
          onClose();
        }
    }
    catch(err){
        console.log('error')
    }
}
  const handleClose = () => onClose();
       
   
  return (
     <Modal 
      show={open}
      onHide={handleClose}
      centered
      >
        <Modal.Body style={{backgroundColor:'#797676',borderRadius:'0.4rem'}}>
        <div>
        <Form.Control 
        type='text'
        name='title'
        value={editdTaskTiitle}
        style={{backgroundColor:"#797676",color:'#fff'}}
        onChange={onChangeHandler}
        />
        </div>
        <div className='d-flex me-5 mt-3'>
        
      

        </div>
        <div className='d-flex ms-4 mt-5'>
        <Button variant="secondary" onClick={editTask} className="addtaskbtn me-4 rounded-3 py-1">
          Save Change
          </Button>
        <Button variant="secondary" onClick={handleClose} className="border rounded-3 px-2 py-1">
          Cancel
        </Button>
        </div>
        </Modal.Body>
          
      </Modal>
  );
}
export default AddTaskModal
