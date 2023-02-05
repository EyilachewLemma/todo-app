import { Fragment,useEffect,useState } from "react";
import SideBar from "../components/SideBar";
import TaskItem from "../components/TaskItem";
import { useParams,useNavigate,useSearchParams } from "react-router-dom";
import apiClient from "../url";
import {EllipsisOutlined } from '@ant-design/icons'
import { useDispatch,useSelector } from "react-redux";
import { actions } from "../store";
import classes from "./TaskDetail.module.css"
const TaskDetail = () => {
  const [completedTasks,setCompletedTasks] = useState([])
  const [uncompletedTasks,setUnCompletedTasks] = useState([])
  const dispatch = useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const collectionName = query.get('collection')
  const tasks = useSelector(state=>state.task.tasks)
  const fechTasksByCollectionId = async() =>{
   try {
    const response = await apiClient.get(`tasks/collection/${id}`)
    if(response.status === 200 && response.data?.length){
      dispatch(actions.taskAction.setTasks(response.data))
     
   }
  }
   catch(err){

   }
  }
  const filiterTasks = ()=>{
    const completedTasks = []
    const uncompletedTasks = []
    tasks.forEach(task => {
     if(task.completed){
       completedTasks.push(task)
     }
     else {
      uncompletedTasks.push(task)
     }
  })
  setCompletedTasks(completedTasks)
  setUnCompletedTasks(uncompletedTasks)
  }
  useEffect(()=>{
    fechTasksByCollectionId()
    if(tasks.length > 0){
      filiterTasks()
      console.log('status changed')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  const goBackHandler = () =>{
    navigate('/')
  }
  return (
    <Fragment>
      <div className="d-md-flex">
        <div className="d-none d-md-block">
          <SideBar />
        </div>
      <div className={`${classes.tasklistcontainer} flex-fill text-white px-4 px-md-0 pt-4`}>
            <div className={`${classes.taskItem} mt-2`}>
            <div className="d-flex align-items-center">
            <span onClick={goBackHandler} className={`${classes.backbtn} bg-secondary rounded-circle text-white px-2 py-1`}><i className="fas fa-angle-left"></i></span>
            <span className="fw-bold fs-5 ms-3">{collectionName}</span>
            <span className="ms-auto"><EllipsisOutlined /></span>
            </div>
            <div className="mt-4">
            {
              uncompletedTasks?.length > 0 &&(
                uncompletedTasks.map(task=>(<TaskItem key={task.id} task={task} />))
             ) 
            }
            </div>
            {
              completedTasks?.length > 0 &&(
                <div>
                Completed Tasks
                </div>
              )
            }
            <div className="mt-4">
            {
             completedTasks?.length > 0 &&(
              completedTasks.map(task=>(<TaskItem key={task.id} task={task} />))
             ) 
            }
            </div>
            {
              tasks?.length === 0 && (
                <div className="text-white">There is no tasks found</div>
              )            }
            </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TaskDetail;
