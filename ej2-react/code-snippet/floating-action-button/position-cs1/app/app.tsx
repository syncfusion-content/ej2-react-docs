{% raw %}


import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
    return (
        <div>
            <div id="target" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
            <FabComponent id="fab1" iconCss='fab-icons fab-icon-people' position='TopLeft' target='#target'></FabComponent>
            <FabComponent id="fab2" iconCss='fab-icons fab-icon-people' position='TopCenter' target='#target'></FabComponent>
            <FabComponent id="fab3" iconCss='fab-icons fab-icon-people' position='TopRight' target='#target'></FabComponent>
            <FabComponent id="fab4" iconCss='fab-icons fab-icon-people' position='MiddleLeft' target='#target'></FabComponent>
            <FabComponent id="fab5" iconCss='fab-icons fab-icon-people' position='MiddleCenter' target='#target'></FabComponent>
            <FabComponent id="fab6" iconCss='fab-icons fab-icon-people' position='MiddleRight' target='#target'></FabComponent>
            <FabComponent id="fab7" iconCss='fab-icons fab-icon-people' position='BottomLeft' target='#target'></FabComponent>
            <FabComponent id="fab8" iconCss='fab-icons fab-icon-people' position='BottomCenter'  target='#target'></FabComponent>
            <FabComponent id="fab9" iconCss='fab-icons fab-icon-people' position='BottomRight' target='#target'></FabComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));


{% endraw %}