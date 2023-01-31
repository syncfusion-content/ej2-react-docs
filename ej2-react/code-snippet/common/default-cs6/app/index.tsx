


import { Internationalization } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    let intl: Internationalization = new Internationalization();
    let val: Date = intl.parseDate('11/2016', { skeleton: 'yM' });
    document.querySelector('.result').innerHTML = val.toString();
  },[])

  return (
    <div id="container">
      <div>Fromatted value:<span className="format text">11/2016</span></div>
      <div>parsed Value:<span className="result text" /></div>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



