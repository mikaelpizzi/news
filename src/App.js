import { Fragment } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header 
        title='News Search Engine'
      />

      <div className="container white">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
