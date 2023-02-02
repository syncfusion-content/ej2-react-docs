

import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return (
    <div className='control-container'>
      <AppBarComponent>
        <a href="https://www.syncfusion.com/react-components" target="_blank" rel="noopener" role="link" aria-label="Syncfusion react components">
          <div className="syncfusion-logo"></div>
        </a>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent isPrimary>FREE TRIAL</ButtonComponent>
      </AppBarComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


