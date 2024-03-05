import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
  return (
    <div id="container">
      <TooltipComponent
        position="TopCenter"
        content="<img src=text onerror=alert (`XSS_Script_Attack`) \/>"
        enableHtmlSanitizer={true}
        target="#target"
      >
        <button className="e-btn tooltipElement" id="target">
          Hover me for a tooltip!
        </button>
      </TooltipComponent>
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);
