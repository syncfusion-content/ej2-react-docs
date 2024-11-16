{% raw %}
{ /* Import the Speed Dial. */ }
import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
{ /* To render Speed Dial.*/ }
function App() {
    const items = [
        { iconCss: 'e-icons e-cut' },
        { iconCss: 'e-icons e-copy' },
        { iconCss: 'e-icons e-paste' }
    ];
    return (<div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
      {/* Initialize the SpeedDial component */}
      <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} target="#targetElement" cssClass='custom-css'></SpeedDialComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
{% endraw %}