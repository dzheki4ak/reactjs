import React from 'react';

class Expand extends React.Component {
  state = {
    dialogOn: false,
  };

  handleDialogState = () => {
    this.setState({
      dialogOn: !this.state.dialogOn,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{this.props.title}</span>
            <button className="expand__toggle-btn" onClick={this.handleDialogState}>
              {!this.state.dialogOn ? (
                <i className="fas fa-chevron-down"></i>
              ) : (
                <i className="fas fa-chevron-up"></i>
              )}
            </button>
          </div>
          {!this.state.dialogOn ? null : this.props.children}
        </div>
      </div>
    );
  }
}

export default Expand;
