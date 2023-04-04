{% raw %}


import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
    return (
        <div>
            <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
            {/* To render Floating Action Button */}
            <FabComponent id='fab' iconCss= 'e-icons e-edit' content='<span class="text-container"><span class="textEle">Edit</span></span>' cssClass= 'fab-hover' target='#targetElement'></FabComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));


{% endraw %}