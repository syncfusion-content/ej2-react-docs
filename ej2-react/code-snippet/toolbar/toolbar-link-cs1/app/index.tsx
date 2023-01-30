


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';


function App() {

  function AnchorTemplate(): JSX.Element {
    return (
      <div>
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/react/documentation/toolbar/getting-started/"
        >
          Anchor Toolbar Link
        </a>
      </div>
    );
  }
  return (
    <div id='container'>
      <ToolbarComponent id="ej2Toolbar">
        <ItemsDirective>
          <ItemDirective text="Cut" />
          <ItemDirective text="Copy" />
          <ItemDirective type="Separator" />
          <ItemDirective text="Paste" />
          <ItemDirective type="Separator" />
          <ItemDirective template={AnchorTemplate} />
        </ItemsDirective>
      </ToolbarComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


