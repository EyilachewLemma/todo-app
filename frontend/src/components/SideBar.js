import {useSelector} from 'react-redux'
import classes from "./SideBare.module.css"
import { NavLink } from 'react-router-dom'
const SideBar = () =>{
    const collections = useSelector(state=>state.collection.collections)
    const viewDetail = () =>{

    }
 return <div className={`${classes.sidebar} px-4 pt-3`}>
    <div className='text-white fw-bold fs-5 py-2'>Collections</div>
    <NavLink to={`/${collections[0]?.id}?collection=${collections[0].name}`} className={({ isActive }) =>isActive ? classes.active:''}> 
    <div className='d-flex mb-3'>
    <span className={`${classes.collectionicon} ${classes.collectioniconschool} p-1 text-white`} >
    <i className="fa-solid fa-book-open"></i>
    </span>
    <span className='text-white ms-2 fw-bold fs-5'>{collections[0]?.name}</span>
    </div>
    </NavLink>
    <NavLink to={`/${collections[1]?.id}?collection=${collections[1].name}`} className={({ isActive }) =>isActive ? classes.active:''}> 
    <div className='d-flex mb-3' onClick={()=>viewDetail()}>
    <span className={`${classes.collectionicon} ${classes.collectioniconpersonal} p-1 text-white`} >
    <i className="fa-solid fa-user"></i>
    </span>
    <span className='text-white ms-2 fw-bold fs-5'>{collections[1]?.name}</span>
    </div>
    </NavLink>
    <NavLink to={`/${collections[2]?.id}?collection=${collections[2].name}`} className={({ isActive }) =>isActive ? classes.active:''}> 
    <div className='d-flex mb-3' onClick={()=>viewDetail()}>
    <span className={`${classes.collectionicon} ${classes.collectionicondesign} p-1 text-white`} >
    <i className="fa-solid fa-paintbrush"></i>
    </span>
    <span className='text-white ms-2 fw-bold fs-5'>{collections[2]?.name}</span>
    </div>
    </NavLink>
    <NavLink to={`/${collections[3]?.id}?collection=${collections[3].name}`} className={({ isActive }) =>isActive ? classes.active:''}> 
    <div className='d-flex' onClick={()=>viewDetail()}>
    <span className={`${classes.collectionicon} ${classes.collectionicongrocery} p-1 text-white`} >
    <i className="fa-solid fa-cart-shopping"></i>
    </span>
    <span className='text-white ms-2 fw-bold fs-5'>{collections[3]?.name}</span>
    </div>
    </NavLink>
    
 </div>
}
export default SideBar