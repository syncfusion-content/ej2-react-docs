import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';
import { Internationalization } from '@syncfusion/ej2-base';
function App() {
    useEffect(() => {
        let intl = new Internationalization();
        let formattedString = intl.formatDate(new Date('1/12/2014 10:20:33'), { skeleton: 'GyMMM' });
        document.querySelector('.result').innerHTML = formattedString;
    }, []);
    return (<div id="container">
      <div>DateValue:<span className="format text">new Date('1/12/2014 10:20:33')</span></div>
      <div>Formatted Value:<span className="result text"/></div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
