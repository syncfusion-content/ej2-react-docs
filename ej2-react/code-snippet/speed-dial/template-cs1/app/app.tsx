import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
  const items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut', text: 'Cut' },
    { iconCss: 'e-icons e-copy', text: 'Copy' },
    { iconCss: 'e-icons e-paste', text: 'Paste' }
  ];

  function itemTemplate(props: any): JSX.Element {
    let classname: string = "icon " + props.properties.iconCss;
    return (
      <div className="itemlist">
        <span className={classname}></span>
        <span className="text">{props.properties.text}</span>
      </div>);
  }

  return (
    <div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
      {/* Initialize the SpeedDial component */}
      <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' content="Edit" items={items} itemTemplate={itemTemplate} target="#targetElement"></SpeedDialComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));