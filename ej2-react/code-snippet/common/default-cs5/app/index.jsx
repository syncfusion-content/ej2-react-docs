import { Internationalization } from '@syncfusion/ej2-base';
import * as React from 'react';
import { useEffect } from 'react';
import * as ReactDom from 'react-dom';
function App() {
    useEffect(() => {
        let intl = new Internationalization();
        let dParser = intl.getDateParser({ skeleton: 'full', type: 'dateTime' });
        let val = dParser('Friday, November 4, 2016 at 1:03:04 PM GMT+05:30');
        document.querySelector('.result').innerHTML = val.toString();
    }, []);
    return (<div id="container">
      <div>Fromatted value:<span className="format text">Friday, November 4, 2016 at 1:03:04 PM GMT+05:30</span></div>
      <div>parsed Value:<span className="result text"/></div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
