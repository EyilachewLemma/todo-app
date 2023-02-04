import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useSelector} from 'react-redux'
import apiClient from '../url';

const  AddTaskModal = (props) =>{ 
    const collections = useSelector(state=>state.collection.collections)
    const [task,setTask] = useState({title:"",collectionId:'',date:''})
    useEffect(()=>{
      setTask(previousValues =>{
        return {...previousValues,collectionId:collections[0]?.id}
      })
    },[collections])
    
    const onChangeHandler = ( e) =>{
        const {name,value} =  e.target
        setTask(previousValues=>{
            return {...previousValues,[name]:value}
        })
    }
    const addTaskHandler = async () =>{
       try{
        const response = await apiClient.post('tasks',task)
        if(response.status === 201){
            props.onClose();
        }
    }
    catch(err){
        console.log('error')
    }
}
  const handleClose = () => props.onClose();
       
   
  return (
     <Modal show={props.open} onHide={handleClose}>
        <Modal.Body style={{backgroundColor:'#797676',borderRadius:'0.4rem'}}>
        <div>
        <Form.Control 
        type='text'
        name='title'
        style={{backgroundColor:"#797676",color:'#fff'}}
        onChange={onChangeHandler}
        />
        </div>
        <div className='d-flex me-5 mt-3'>
        <div className='flex-fill me-3'>
        <Form.Select 
        name='collectionId'
         onChange={onChangeHandler}
         aria-label="Default select example"
         style={{backgroundColor:"#797676",color:'#fff'}}>
         {
            collections?.length> 0 && (
                collections.map(collection =>(<option key={collection.id} value={collection.id}>{collection.name}</option>))
            )
         }
      </Form.Select>
        </div>
      <div className='flex-fill'>
      <Form.Control 
        type='date'
        name='date'
         onChange={onChangeHandler}
        style={{backgroundColor:"#797676",color:'#fff'}}
        />
      </div>

        </div>
        <div className='d-flex ms-4 mt-5'>
        <Button variant="secondary" onClick={addTaskHandler} className="addtaskbtn me-4 rounded-3 py-1">
          Add Task
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
