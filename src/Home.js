
import { useState,useEffect } from "react";import BlogList from "./BlogList";
;

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);



    //i created the handledelete func here cuz i want the change to refelct immediatly wich means to use the useState!!
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=>blog.id !== id);
        setBlogs(newBlogs);
    }

    //this func runs for every render ||| DON'T  CHNAGE STATE INSIDE IT IT WILL DO INFINITE LOOP
    // I ADDED A DEPENDENCY ARRAY that make the func only run when the states that inside the dependency array changes BUT it alwyas runs on the first render 
    useEffect(() => {
        console.log("useeffect ran")
    },[]);

    return ( 
        <div className="home">  
        <BlogList blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author == "yoshi")} title="Mario's Blogs!"/> */}
        </div>
     );
}
 
export default Home;