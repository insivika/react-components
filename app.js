var App = () => (
  <div>
    <h2>My Todo List</h2><AddItemInput/><AddItemButton />
    <TodoList todos={['Learn React', 'Crush Reactly', 'Maybe Sleep']}/>

  </div>
);

class AddItemInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {value: ''};

    }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render(){
    return (
      <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text"/>
    )
  }
};

class AddItemButton extends React.Component {
  constructor(props){
    super(props)
  }

  onButtonClicked(){
    console.log('button has been clicked')
  }

  render(){

    return(

      <input onClick={this.onButtonClicked.bind(this)} className="add-btn" value="add" type="submit" />

    );

  }
}


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

  onListItemClicked() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {

    var hoverEffect = this.state.hovered ? 'list-item-hovered list-item' : 'list-item'

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };


    return (
      <div className={hoverEffect} style={style} onMouseEnter={this.onListItemHovered.bind(this)} onMouseLeave={this.onListItemHovered.bind(this)} onClick={this.onListItemClicked.bind(this)}>{ this.props.todo }</div>
    );
  }
}



var TodoList = (props) => (
  <div>
    {props.todos.map(todo =>
      < TodoListItem todo={todo} />
    )}
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);