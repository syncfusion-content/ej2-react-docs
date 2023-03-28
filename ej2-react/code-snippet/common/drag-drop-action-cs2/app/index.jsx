import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useEffect } from 'react';
import { Draggable, Droppable } from '@syncfusion/ej2-base';
function App() {
    useEffect(() => {
        let draggable = new Draggable(document.getElementById('draggable'), { clone: false });
        let droppable = new Droppable(document.getElementById('droppable'), {
            drop: (e) => {
                e.droppedElement.querySelector('#drag').textContent = 'Dropped';
            }
        });
    }, []);
    return (<div id='container'>
           <div id='droppable'><p>Droppable Target </p></div>
           <div id='draggable'><p id='drag'>Draggable Element </p></div>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
