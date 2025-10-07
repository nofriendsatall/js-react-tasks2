import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputText: ''
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      this.setState({ tasks: response.data.reverse() });
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { inputText, tasks } = this.state;
    
    if (!inputText.trim()) return;

    try {
      const response = await axios.post('/api/tasks', {
        text: inputText
      });
      
      this.setState({
        tasks: [response.data, ...tasks],
        inputText: ''
      });
    } catch (error) {
      console.error('Ошибка при создании задачи:', error);
    }
  };

  handleTaskToggle = async (taskId, currentState) => {
    const { tasks } = this.state;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) return;

    try {
      const endpoint = currentState === 'active' 
        ? `/api/tasks/${taskId}/finish`
        : `/api/tasks/${taskId}/activate`;
      
      const response = await axios.patch(endpoint);
      
      const updatedTasks = update(tasks, {
        [taskIndex]: { $set: response.data }
      });
      
      this.setState({ tasks: updatedTasks });
    } catch (error) {
      console.error('Ошибка при обновлении задачи:', error);
    }
  };

  render() {
    const { tasks, inputText } = this.state;
    
    const activeTasks = tasks.filter(task => task.state === 'active');
    const finishedTasks = tasks.filter(task => task.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={inputText}
                required
                className="form-control me-3"
                placeholder="I am going..."
                onChange={this.handleInputChange}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>

        {activeTasks.length > 0 && (
          <div className="todo-active-tasks">
            {activeTasks.map((task, index) => (
              <Item
                key={task.id}
                task={task}
                number={activeTasks.length - index}
                onToggle={this.handleTaskToggle}
              />
            ))}
          </div>
        )}

        {finishedTasks.length > 0 && (
          <div className="todo-finished-tasks">
            {finishedTasks.map((task, index) => (
              <Item
                key={task.id}
                task={task}
                number={finishedTasks.length - index}
                onToggle={this.handleTaskToggle}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;
// END
