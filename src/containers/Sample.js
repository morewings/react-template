import * as React from 'react';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {fetchUsers} from './../actions/index';

function mapStateToProps(state) {
  return {
    followingUsers: state.users.followingUsers,
    newUsers: state.users.newUsers,
    hasMore: state.users.hasMore
  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({fetchUsers}, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
