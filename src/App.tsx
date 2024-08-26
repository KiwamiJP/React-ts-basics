import CourseGoal from "./components/CourseGoal"
import './App.css'
import goalImage from './assets/goals.jpg'
import Header from "./components/Header"
import { useState } from "react"
import CourseGoalList from "./components/CourseGoalList"
import NewGoal from "./components/NewGoal"
export type CourseGoal={
  title:string;
  description:string;
  id:number
  
}
function App() {
  const[goals,setGoals]=useState<CourseGoal[]>([]);
  function handlerAddGoal(goal:string,summary:string){
    setGoals((previousGoal)=>{
        const newGoal:CourseGoal={
          id:Math.random(),
          title:goal,
          description:summary
        }
        return [...previousGoal,newGoal]
    });
  }
  function handelDeleteGoal(id:number){
    setGoals(previousGoals=>(previousGoals.filter((goal)=>goal.id !== id))
  )
  }
  
  
  return (
    <div className="Container">
    <Header image={{src:goalImage,alt:"Image of goals"}}>
     <h1>Your Course Goals</h1>
    </Header>
    <NewGoal onAddGoal={handlerAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handelDeleteGoal}/>
    </div>
  )
}

export default App
