import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';
function App() {
    useEffect(() => {
        let intl = new Internationalization();
        let nParser = intl.getNumberParser({ format: 'P2', useGrouping: false });
        let val = nParser('123567.45%');
        document.querySelector('.result').innerHTML = val + '';
    }, []);
    return (<div id="container">
      <div>FormattedValue:<span className="format text">123567.45%</span></div>
      <div>ParsedOutput:<span className="result text"/></div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
