import { Fragment,useEffect } from "react";
import SideBar from "../components/SideBar";
import TaskItem from "../components/TaskItem";
import { useParams,useNavigate } from "react-router-dom";
import apiClient from "../url";
import {EllipsisOutlined } from '@ant-design/icons'
import { useDispatch,useSelector } from "react-redux";
import { actions } from "../store";
import classes from "./TaskDetail.module.css"
const TaskDetail = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()
  const tasks = useSelector(state=>state.task.tasks)
  const fechTasksByCollectionId = async() =>{
   try {
    const response = await apiClient.get(`tasks/collection/${id}`)
    if(response.status === 200){
      dispatch(actions.taskAction.setTasks(response.data))
      
      
    }
   }
   catch(err){

   }
  }
  useEffect(()=>{
    fechTasksByCollectionId()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  const goBackHandler = () =>{
    navigate('/')
  }
  console.log('tasks',tasks)
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
            <span className="fw-bold fs-5 ms-3">School</span>
            <span className="ms-auto"><EllipsisOutlined /></span>
            </div>
            <div className="mt-4">
            {
             tasks?.length > 0 &&(
              tasks.map(task=>(<TaskItem key={task.id} task={task} />))
             ) 
            }
            </div>
            {
              tasks?.length=== 0 && (
                <div className="text-white">There is no tasks found</div>
              )            }
            </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TaskDetail;
