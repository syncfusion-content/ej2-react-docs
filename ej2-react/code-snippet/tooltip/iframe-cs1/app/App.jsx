import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
    function iFrame() {
        return <iframe src="https://www.syncfusion.com/products/essential-js2"/>;
    }
    return (<div id="container">
      <TooltipComponent target="#iframeContent" content={iFrame} opensOn="Click" position="BottomCenter">
        <div id="tooltipContent">
          <div className="content">
            <ButtonComponent className="text" id="iframeContent">
              Embedded Iframe
            </ButtonComponent>
          </div>
        </div>
      </TooltipComponent>
    </div>);
}
export default App;
