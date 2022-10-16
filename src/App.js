import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {

  // Define topic and news
  const [ topic, saveTopic ] = useState('');
  const [ news, saveNews ] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=aa8606bb88bd47ff8a3c548a1cd46981`

      const response = await fetch(url);
      const news = await response.json();

      saveNews(news.articles);
    }

    consultAPI();
  }, [topic])
  return (
    <Fragment>
      <Header 
        title='News Search Engine'
      />

      <div className="container white">
        <Form 
          saveTopic={saveTopic}
        />
      </div>
    </Fragment>
  );
}

export default App;
