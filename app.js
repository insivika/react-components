class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todoItemList: [
        {id: 0, text: "Make dinner"},
        {id: 1, text: "Work out"},
        {id: 2, text: 'Get groceries'}
    ],
    nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  addTodo(todoText){
    let todos = this.state.todoItemList.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todoItemList: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id){

    console.log('Removing ', id)

    this.setState({
      todoItemList: this.state.todoItemList.filter((todo, index) => todo.id != id)
    })
  }

  render() {

  return (
  <div>
    <div className="header">
    <h2>Get it done!</h2>

    <AddItemInput todoText="" addTodo={this.addTodo} />
    </div>
    <TodoList todos={this.state.todoItemList} removeTodo={this.removeTodo}/>


  </div>
  )
 }
};


var TodoList = (props) => (
  <div>
    {props.todos.map(todo =>
      < TodoListItem key={todo.id} todo={todo.text} id={todo.id} removeTodo={props.removeTodo} />
    )}

  </div>
);



class AddItemInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    }

  handleChange(event){
    this.setState({value: event.target.value})

  }

  addTodo(todo){
    if(todo.length > 0){
      this.props.addTodo(todo);
      this.setState({value: ''})
    }
  }

  render() {
    return (
      <div>
      <input value={this.state.value} onChange={this.handleChange} autofocus="true" type="text"/>

      <button onClick={() => this.addTodo(this.state.value)}>add</button>
      </div>
    )
  }
};


class TodoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      hovered: false,
    }

  }

  onListItemHovered(){

    this.setState({
      hovered: !this.state.hovered
    })
  }

  onListItemClicked(event) {
    let id = event.target.parentNode.id
    this.props.removeTodo(id)

  }

  render() {

    var hoverEffect = this.state.hovered ? 'list-item-hovered list-item' : 'list-item'


    return (
      <div id={this.props.id} className={hoverEffect} onMouseOver={this.onListItemHovered.bind(this)} onMouseOut={this.onListItemHovered.bind(this)}>
      { this.props.todo }
      <button className="done-btn" onClick={this.onListItemClicked.bind(this)} >Done!</button>
      </div>

    );
  }
}





ReactDOM.render(
  <App />,
  document.getElementById('app')
);