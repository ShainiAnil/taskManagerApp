import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import './style.scss';
import data from "./data.json"
function App() {
  const title = "Task Manager";
  const content = "Once place to manage your tasks";
  const footerContent = "ReactJS based task manager app"

//Statte Variables
  const [taskData, setTaskData] = useState(data)
  
  
  // const getData = async()=>{
  //   let result = await fetch("http://localhost:4000/taskStatus")
  //   let data = await result.json()
  //   setTaskData(data);
  // }
  // useEffect(()=>{
  //   getData();

  // },[])
 
  return ( 
    <div className="App">

      <Header title={title} content={content}/>
      <Main taskData={taskData} setTaskData={setTaskData}/>    
      <Footer footerContent={footerContent}/> 
    
    </div>
  );
}

export default App;
