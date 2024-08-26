
import { useState,useEffect } from "react";import BlogList from "./BlogList";
;

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null)



 

    //this func runs for every render ||| DON'T  CHNAGE STATE INSIDE IT IT WILL DO INFINITE LOOP
    // I ADDED A DEPENDENCY ARRAY that make the func only run when the states that inside the dependency array changes BUT it alwyas runs on the first render 
    useEffect(() => {
     setTimeout(() => {
        fetch("http://localhost:8000/blogs")
        .then(
            res =>{
                console.log(res);
                if(!res.ok){
                    throw Error("couldn't fetch the data !!");
                }
                return res.json();
            })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(error => {
            setError(error.message);
            setIsPending(false);
        })
     }, 1000);
    },[]);

    return ( 
        <div className="home">  
        {error && <div>{error}</div>}
        {isPending && <div>Loading. . . . </div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        {/* <BlogList blogs={blogs.filter((blog)=>blog.author == "yoshi")} title="Mario's Blogs!"/> */}
        </div>
     );
}
 
export default Home;