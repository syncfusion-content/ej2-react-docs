{% raw %}



import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect, useRef } from 'react';
import {useRef } from 'react';
import { Animation } from '@syncfusion/ej2-base';

function App() {
  let element1 = useRef();
  let element2 = useRef();
  useEffect(() => {
    let animation: Animation = new Animation();
    animation.animate(element1, { name: 'FadeOut' });
    animation.animate(element2, { name: 'ZoomOut' });
  },[])

  return (
    <div id="container">
      <div id="element1" ref={(ele) => { element1 = ele; }}></div>
      <div id="element2" ref={(ele) => { element2 = ele; }}></div>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



{% endraw %}