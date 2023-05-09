import {Component} from 'react'
import SimpleTodo from './components/SimpleTodo'

import './App.css';

const initialTodoList = [
  {
    id: 1,
    text: 'Book the ticket for today evening'
  },
  {
    id: 2,
    text: 'Rent the movie for tomorrow movei night'
  },
  {
    id: 3,
    text: 'Confirm the slot for the yoga session tomorrow morning'
  },
  {
    id: 4,
    text: 'Drop the parcel at Bioomingdale'
  },
  {
    id: 5,
    text: 'Order the parcel at Bloomingdale'
  },
  {
    id: 6,
    text: 'Fix the production issue'
  }
]

class App extends Component {
  state = {
    todoList: initialTodoList
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const filterdTodoList = todoList.filter(eachTodo => 
        eachTodo.id !== id
      )
      this.setState({
        todoList: filterdTodoList
      })
  }

  render() {
    const {todoList} = this.state

    return(
      <div className='destination-search-app'>
        <div className='destination-search-container'>
          <h1 className='ds-title'>Destination Search</h1>
          <ul className='destination-item-card'>
          {todoList.map((eachTodo) => (
              <SimpleTodo todoList = {eachTodo} id={eachTodo.id} deleteTodo={this.deleteTodo}/>
            ))
          }
          </ul>
        </div>      
      </div> 
    )
  }
}

export default App;
