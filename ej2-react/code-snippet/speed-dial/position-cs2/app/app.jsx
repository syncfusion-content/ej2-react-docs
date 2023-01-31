{% raw %}
{ /* Import the Speed Dial. */ }
import { ButtonComponent, SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
{ /* To render Speed Dial.*/ }
function App() {
    let speeddialObj;
    const items = [
        { iconCss: 'e-icons e-cut' },
        { iconCss: 'e-icons e-copy' },
        { iconCss: 'e-icons e-paste' }
    ];
    function showClick() {
        speeddialObj.show();
    }
    function hideClick() {
        speeddialObj.hide();
    }
    return (<div>
        <div id="targetElement" style={{ position: 'relative', minHeight: '340px', border: '1px solid', padding: '10px' }}>
        <ButtonComponent id="show" cssClass="e-primary" onClick={showClick}> Show </ButtonComponent>
        <ButtonComponent id="hide" cssClass="e-primary" onClick={hideClick}> Hide </ButtonComponent></div>
        <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} opensOnHover={true} target="#targetElement" ref={(scope) => { speeddialObj = scope; }}></SpeedDialComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
{% endraw %}