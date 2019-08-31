import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components';
import GithubUsersContainer from './../src/components/GithubUsersContainer/GithubUsersContainer';

injectGlobal`
  body, p, h1, h2 {
    margin: 0;
    font-family: sans-serif;
  }
`;

export default connect(state => state)(GithubUsersContainer);
