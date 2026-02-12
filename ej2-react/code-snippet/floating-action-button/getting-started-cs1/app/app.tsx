import { enableRipple } from '@syncfusion/ej2-base';
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    return (
        <div>
            <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
            {/* To render Floating Action Button with position. */}
            <FabComponent id='fab' content='Add' target='#targetElement'></FabComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));