import React, {createElement as e} from 'react';

function App() {
  return e("div", {className: 'container'}, [
    e("h1", {className: 'font-bold'}, "test JSX"),
    e('button', {className: ''}, "click me")
  ])
}

export default App;
