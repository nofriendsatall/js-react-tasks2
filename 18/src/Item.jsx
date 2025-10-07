import React from 'react';

// BEGIN (write your solution here)
class Item extends React.Component {
  handleClick = () => {
    const { task, onToggle } = this.props;
    onToggle(task.id, task.state);
  };

  render() {
    const { task, number } = this.props;
    const isFinished = task.state === 'finished';

    const taskContent = (
      <a href="#" className="todo-task" onClick={this.handleClick}>
        {task.text}
      </a>
    );

    return (
      <div className="row">
        <div className="col-1">{number}</div>
        <div className="col">
          {isFinished ? <s>{taskContent}</s> : taskContent}
        </div>
      </div>
    );
  }
}

export default Item;
// END
