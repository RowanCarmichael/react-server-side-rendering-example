import fetch from 'isomorphic-unfetch';

const handleError = (response) => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export default {
  fetchUsers: () => fetch('https://api.github.com/users')
    .then(response => handleError(response)),

  fetchUserDetails: user => fetch(`https://api.github.com/users/${user}`)
    .then(response => handleError(response)),

  fetchUserRepos: user => fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => handleError(response)),
};
