

import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return (
    <div className='control-container'>
      <AppBarComponent colorMode="Primary" aria-label="appbar">
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-home"></ButtonComponent>
      </AppBarComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


