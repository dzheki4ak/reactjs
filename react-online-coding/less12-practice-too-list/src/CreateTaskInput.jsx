import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleCgange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleCgange}
          className="create-task__input"
        />
        <button className="btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1. Take text from input and
// 2. Create task with this text { text: 'Taken text', done: false, id: ... }
// 3. Add task object to the task list
