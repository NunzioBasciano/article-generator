import { useState, useEffect } from 'react';
import Counter from './components/counter/Counter';
import Article from './components/article/Article';

import './App.css'

function App() {

  const [count, setCount] = useState(1);
  const [article, setArticle] = useState({});


  useEffect(() => {
    getArticle();
  }, [count])

  const getArticle = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${count}`
      );
      const article = await data.json();
      setArticle(article);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Counter
        count={count}
        setCount={setCount}
      />
      <Article
        count={count}
        article={article}
      />
    </>
  )
}

export default App
