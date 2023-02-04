import {Routes,Route} from 'react-router-dom'
import TaskDetail from '../pages/TaskDetail'
import Collections from '../pages/Collections'

const Router = ()=>{
    return (
        <Routes>
        <Route path='/' element={<Collections />} />
        <Route path='/:id' element={<TaskDetail />} />
        </Routes>
    )
}
export default Router