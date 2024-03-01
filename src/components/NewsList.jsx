import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';


function NewsList() {
    const [newsDatas, setNewsDatas] = useState();

    useEffect(()=>{
      const fetchNews = async () => {
        try{
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=js&apiKey=b87de462cf4f412c860a437d9ab40f99');
            setNewsDatas(response.data.articles);
            console.log(newsDatas, response);
        }catch(error){
          console.log(error);
        }
      }
      
      fetchNews();
    }, [])
  return (
    <div>
    </div>
  )
}

export default NewsList;