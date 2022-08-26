import './App.css';
import React, { useState,useEffect } from 'react';
import Button from './Button'
import Button2 from './Button2'



const App = () => {
  const [posts, setPosts] = useState([])
  const[searchData, setSearchData]=useState([])
  const[filterData, setFilterData]=useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(Response => Response.json())
      .then((data) => {
        // console.log(data)
        setPosts(data)

      })
  }, [posts])

  const searchDataHandler=(event)=>{
    searchData= posts.filter((item,index)=>{
      return  
    })

  }
  

  const filterDataHadler=()=>{

    


  }
 

  return (
    <div>
      <Button2 searchDataHandler={searchDataHandler} filterDataHadler={filterDataHadler} />
      {posts && posts.length>0 && posts.map((item,index)=>{
        return <Button key={index} item={item}/>
      })}

    </div>
  );
}

export default App;
