import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let menuItems = [
    {
      text: 'View',
      items: [
        { text: 'Mobile' },
        { text: 'Desktop Smaller' },
        { text: 'Desktop Normal' },
        { text: 'Desktop Bigger Smaller' },
        { text: 'Desktop Bigger Normal' },
      ],
    },
    { text: 'Refresh' },
    { text: 'Paste' },
    { separator: true },
    { text: 'New' },
    { text: 'Personalize' },
  ];

  return (
    <div className="container">
      <div id="target">Right click / Touch hold to open the ContextMenu</div>
      <ContextMenuComponent
        id="contextmenu"
        target="#target"
        items={menuItems}
        enableScrolling={true}
        beforeOpen={(args) => {
          args.element.parentElement.style.height = '150px';
        }}
      />
    </div>
  );
}

export default App;
ReactDom.render(<App />, document.getElementById('element'));