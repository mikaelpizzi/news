import { Fragment, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {

  // Define topic and news
  const [ topic, saveTopic ] = useState('');
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
