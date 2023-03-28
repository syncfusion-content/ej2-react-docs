import * as React from 'react';
import { useEffect } from 'react';
import * as ReactDom from 'react-dom';
import { Draggable } from '@syncfusion/ej2-base';
function App() {
    useEffect(() => {
        let draggable = new Draggable(document.getElementById('element'), { clone: true });
    }, []);
    return (<div id='container'>
      <div id='element'><p>Draggable Element</p></div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
