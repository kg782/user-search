import React from 'react';
import PropTypes from 'prop-types';
import './UserList.scss';
import MoreVertIcon from '../icons/MoreVertIcon';
import PersonIcon from '../icons/PersonIcon';
import Search from '../Search/Search';

class UserList extends React.PureComponent {
  static defaultProps = {
    users: []
  };

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  state = { query: undefined };

  handleChange = query => {
    this.setState({
      query
    });
  };

  selectUsers() {
    const { query } = this.state;
    const { users } = this.props;

    if (!query || !users) return users;

    return users.filter(user =>
      `${user.fullName.toLowerCase()} ${user.email.toLowerCase()}`.includes(
        query.toLowerCase()
      )
    );
  }

  render() {
    const { users } = this.props;
    const selectedUsers = this.selectUsers(users);

    return (
      <div className="user-list-root">
        <Search onChange={this.handleChange} />
        {selectedUsers &&
          selectedUsers.map(item => (
            <div key={item.id} className="list">
              <div className="avatar">
                <PersonIcon />
              </div>
              <div className="person-info">
                <div className="name-and-email">
                  <div className="full-name">{item.fullName}</div>
                  <small>{item.email}</small>
                  <small className="mobile-only">
                    last login: {item.lastLogin}
                  </small>
                </div>
                <small className="date">{item.date}</small>
                <small className="last-login">{item.lastLogin}</small>
                <div className="icon">
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default UserList;
