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
