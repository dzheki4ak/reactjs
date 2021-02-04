import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  onChange = event => {
    this.setState({
      value: event.target.value,
    });
  };



  render() {
    const { users } = this.props;

    const listToRender = this.state.value !== ''
    ? users.filter(user => user.name.toLowerCase().includes(this.state.value))
    : users;

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={listToRender.length}
          onChange={this.onChange}
        />
        <ul className="users">
          {listToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
