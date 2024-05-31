'use client'
import React, { useState,useEffect } from 'react'
import Card from '../components/Card'
import config from '@/config';
import style from './page.module.css'

const fetchBlogs = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: 'no-cache',
  };

  const request = await fetch(`${config.api}/api/blogs?populate=*&sort=id:desc`, reqOptions);
  // const request = await fetch(`${config.api}/api/blogs?populate=*&filters[IsFeatured][$eq]=true`,reqOptions);
  // const request = await fetch(`${config.api}/api/blogs?populate=*${params}`,reqOptions);
  const response = await request.json();
  
  return response;
};

const Blogs = () => {
  const [cardData, setCardData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    fetchBlogs()
      .then(response => response.data)
      .then(data => {
        setCardData(data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);
  console.log("cardData.length",cardData.length)
  const toggleCards = () => {
    if(cardData.length >visibleCount){
      if(visibleCount+2 > cardData.length){
        setVisibleCount(cardData.length)
        setShowLess(true)
      }else{
        setVisibleCount(prevCount => prevCount + 2);
        if(visibleCount+2 === cardData.length){
          setShowLess(true)
        }
      }
    }else{
      setShowLess(false);
      setVisibleCount(2)
    }
  };

  return (
    <section>
      <div className="container">
        <h1 className={style.header}>My Blog</h1>
        <div className={style.card_section}>
          {cardData.length > 0 &&
            cardData.slice(0, visibleCount).map((val, i) => <Card data={val.attributes} key={i} />)}
        </div>
        <button onClick={toggleCards} className={style.load_more_button}>
          {showLess ? 'Show Less' : 'Load More'}
        </button>
      </div>
    </section>
  );
};


export default Blogs