
 

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';

function App() {
  useEffect(() => {
    let intl: Internationalization = new Internationalization();
    let val: number = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
    document.querySelector('.result').innerHTML = val + '';
  },[])

  return (
    <div id="container">
      <div>FormattedValue:<span className="format text">$01,234,545.650</span></div>
      <div>ParsedOutput:<span className="result text" /></div>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



