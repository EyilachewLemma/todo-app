import {Fragment,useEffect} from 'react'
import TopHeader from './components/TopHeader'
// import Collections from './pages/Collections';
import BottomHeader from './components/BottomHeader';
import Router from './routes';
import {actions} from './store'
import { useDispatch } from 'react-redux/es/exports';
import apiClient from './url';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const fetchCollections = async () =>{
    try {
        const response = await apiClient.get('collections')
        dispatch(actions.collectionAction.setCollections(response.data.data))
        console.log('response',response.data.data)
    }
    catch(err){
        console.log(err)
    }
}
useEffect(()=>{
    fetchCollections()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <Fragment>
    <TopHeader />
    <Router />      
    <div className='fixed-bottom'>
    <BottomHeader />
    </div>
    </Fragment>
  );
}

export default App;
