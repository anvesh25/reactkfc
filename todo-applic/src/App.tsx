
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoContainer from './containers/AddTodoContainer';
import HomeContainer from './containers/HomeContainer';
import TodoCountContainer from './containers/TodoCountContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/add-todo">Add</Link>
                </li>            
              </ul>
              <TodoCountContainer />
          </div>
      </nav>

      <main role="main" className="container">
        <h1>Todo List</h1>
        <Route exact ={true} path="/" component={HomeContainer} />
        <Route path=".add-todo" component={AddTodoContainer}/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
