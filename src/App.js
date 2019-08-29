import React from 'react';

// components
import Sample from 'components/Sample/Sample.container';
import SampleWrapped from 'components/SampleWrapped';

const App = props => (
  <div className="App">
    <Sample />
    <SampleWrapped />
  </div>
);

const alpha = props => props;

export default App;
