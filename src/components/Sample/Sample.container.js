import Sample from 'components/Sample/Sample';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sample} from 'Redux/actions/index';

function mapStateToProps(state, ownProps) {
  return {
    increment: state.sample.increment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sample}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
