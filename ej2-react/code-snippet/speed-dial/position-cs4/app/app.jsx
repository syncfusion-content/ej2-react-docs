{% raw %}
{ /* Import the Speed Dial. */ }
import { ButtonComponent, SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
{ /* To render Speed Dial.*/ }
function App() {
    const items = [
        { iconCss: 'e-icons e-cut' },
        { iconCss: 'e-icons e-copy' },
        { iconCss: 'e-icons e-paste' }
    ];
    return (
      <div>
        <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
        <SpeedDialComponent id='speeddial' content='Edit' items={items} cssClass="custom-position" target="#targetElement"></SpeedDialComponent>
      </div>
      );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
{% endraw %}