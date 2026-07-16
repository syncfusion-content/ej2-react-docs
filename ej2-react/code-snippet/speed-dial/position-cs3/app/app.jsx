import { ButtonComponent, SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

function App() {
    let speeddialObj;
    const items = [
        { iconCss: 'e-icons e-cut' },
        { iconCss: 'e-icons e-copy' },
        { iconCss: 'e-icons e-paste' }
    ];
    function refresh() {
        document.getElementById("targetElement").style.minHeight = "300px";
        speeddialObj.refreshPosition();
    }
    return (<div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '340px', border: '1px solid', padding: '10px' }}>
      <ButtonComponent id="refresh" cssClass="e-primary" onClick={refresh}> Refresh </ButtonComponent></div>
      <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} position='MiddleRight' target="#targetElement" ref={scope => { speeddialObj = scope; }}></SpeedDialComponent>
    </div>);
}
export default App;
createRoot(document.getElementById('button')).render(<App />);