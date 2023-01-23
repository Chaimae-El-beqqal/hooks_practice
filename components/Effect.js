import React,{ useEffect,useState } from "react";

const Effect = ()=>{
    const [resourceType, setResourceType] = useState('posts');
    useEffect(()=>
    {
        const fetchRessource = (async()=>
        {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const data = await res.json();
            console.log(data);

        })
        fetchRessource();
    },[resourceType])
    return(
        <div>
            <button></button>
        </div>
    )
};
export default Effect;