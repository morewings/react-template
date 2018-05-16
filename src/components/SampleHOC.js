import React from 'react';
import PropTypes from 'prop-types';

const wrapHoc = options => WrappedComponent => (
  class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }

    render() {
      // Filter out extra props that are specific to this HOC and shouldn't be
      // passed through
      const { extraProp, ...passThroughProps } = this.props;

      // Inject props into the wrapped component. These are usually state values or
      // instance methods.
      const injectedProp = 'someStateOrInstanceMethod';
      // Pass props to wrapped component
      return (
        <WrappedComponent
          injectedProp={injectedProp}
          {...passThroughProps} />
      );
    }
  }
);

export default wrapHoc;
