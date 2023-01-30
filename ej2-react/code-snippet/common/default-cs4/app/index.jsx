import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';
function App() {
    useEffect(() => {
        let intl = new Internationalization();
        let formattedString = intl.formatNumber(12345.65, {
            format: 'C5', useGrouping: false,
            minimumSignificantDigits: 1, maximumSignificantDigits: 3
        });
        document.querySelector('.result').innerHTML = formattedString;
    }, []);
    return (<div id="container">
      <div>Value:<span className="format text">12345.65</span></div>
      <div>Formatted Value:<span className="result text"/></div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
