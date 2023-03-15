import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      inputValue: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleAddTodo = (e, text) => {
    e.preventDefault()

    this.setState({
      todos: [...this.state.todos, { text, id: Math.random() * 100000 }],
    })

    this.setState({
      inputValue: '',
    })
  }

  handleDeleteTodo = (id) => {
    return this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Todo List</h1>

        <form onSubmit={(e) => this.handleAddTodo(e, this.state.inputValue)}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>

        {this.state.todos.map((todo) => (
          <>
            <h1>{todo.text}</h1>
            <button onClick={() => this.handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </>
        ))}
      </div>
    )
  }
}

export default App
