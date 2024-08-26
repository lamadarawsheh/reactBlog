import { useState ,useEffect  } from "react";
 //in react custom hooks must start with 'use'

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null)

        useEffect(() => {
            const abortController = new AbortController();
            setTimeout(() => {
               fetch(url ,{ signal:abortController.signal })
               .then(
                   res =>{
                       if(!res.ok){
                           throw Error("couldn't fetch the data !!");
                       }
                       return res.json();
                   })
               .then(data => {
                   setData(data);
                   setIsPending(false);
                   setError(null);
               })
               .catch(error => {
                    if(error.name == 'AbortError'){
                        console.log("fetch aborted")
                    }
                    else{
                        setError(error.message);
                        setIsPending(false);
                    }
                  
               })
            }, 1000);

            return () => abortController.abort();
            //this right here is a cleanup func that will pause the fetch if it shouldn't be running

           },[url]);

      return { data ,isPending , error }
}
export default useFetch ;


