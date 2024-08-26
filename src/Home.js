
import { useState } from "react";;

const Home = () => {
    const [name,setName] = useState('jake')
    const [age,setAge] = useState(25);
    const  handleClick = (e)=>{
        setName ('hala');
        setAge(33);
    }
    const handleClickAgain = (e,name)=>{
        console.log('Hello ' + name,e.target)
    }
    return ( 
        <div className="home">  
            <h2>Homepage</h2>
            <p>{name} is {age} year's old </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain(e,'Lama') }>Click me Again</button>

        </div>
     );
}
 
export default Home;