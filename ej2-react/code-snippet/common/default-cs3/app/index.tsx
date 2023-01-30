


import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';

function App() {
  useEffect(() => {
    let intl: Internationalization = new Internationalization();
    let nFormatter: Function = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
    let formattedValue: string = nFormatter(1234545.65);
    document.querySelector('.result').innerHTML = formattedValue;
  },[])

  return (
    <div id="container">
      <div>Value:<span className="format text">1234545.65</span></div>
      <div>Formatted Value:<span className="result text" /></div>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



