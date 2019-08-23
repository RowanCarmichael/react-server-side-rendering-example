import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchUsers } from '../../actions';
import GithubCard from '../GithubCard/GithubCard';

const GithubCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
  align-items: center;
`;

export default class GithubUsersContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { error, loading, users } = this.props;
    return (
      <div>
        {error && <p>error...</p>}
        {loading && <p>Loading...</p>}
        {!loading && !error &&
          <GithubCards>{users.map(user => (
            <GithubCard
              key={user.login}
              userName={user.login}
              avatarUrl={user.avatar_url}
              githubUrl={user.html_url}
            />
          ))}</GithubCards>
        }
      </div>
    )
  }
}
