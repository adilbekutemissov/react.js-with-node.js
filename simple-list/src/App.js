import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import ListOfPosts from "./components/listOfPosts.component";
import CreatePost from "./components/createPost.component";
import CreateUser from "./components/createUser.component";
import EditPost from "./components/editPost.component";
import Header from './components/header.component';

function App() {
  return (
    <Router>
      <Header />
      <div style={{margin: "0 20px 0 20px"}}>
        <br/>
        <Route path="/" exact component={ListOfPosts} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/create" component={CreatePost} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
