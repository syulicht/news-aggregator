import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { List } from '@mui/material';


function NewsList() {
    const [newsDatas, setNewsDatas] = useState([]);

    useEffect(()=>{
      const fetchNews = async () => {
        try{
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=jp&apiKey=b87de462cf4f412c860a437d9ab40f99');
            setNewsDatas(response.data.articles);
        }catch(error){
          console.log(error);
        }
      }
      
      fetchNews();
    }, [])
  return (
    <List>
      {newsDatas.map((data, index) => (
        <NewsItem key={index} data={data}/>
      ))}
    </List>
  )
}

export default NewsList;