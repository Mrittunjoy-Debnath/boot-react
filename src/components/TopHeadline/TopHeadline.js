import React ,{ useEffect } from 'react';
import {useState} from 'react';
import News from '../News/News';


const TopHeadline = () =>{
const [articles,setArticles] = useState([]);
      useEffect (()=>{
          const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=06da5bd031b8432d8a146f7edd3a650b';
          fetch(url)
          .then(res=>res.json())
          .then(data=>setArticles(data.articles))
      },[])
	return (


		  <div>
		    <h2>TopHeadline : {articles.length}</h2>
        {
          articles.map(article => <News article={article}></News>)
        }
		  </div>
		);
};
export default TopHeadline;