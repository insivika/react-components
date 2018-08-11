var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Reactly', 'Maybe Sleep']}/>
  </div>
);



var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);