import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
    let tooltip;
    function iFrame() {
        return (<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard"></iframe>);
    }
    return (<div id='container'>
        <TooltipComponent ref={obj => tooltip = obj} target="#iframeContent" content={iFrame} opensOn='Click' position='BottomCenter'>
          <div id="tooltipContent">
              <div className="content">
                  <button className="e-btn text" id="iframeContent">Embedded Iframe</button>
              </div>
          </div>
        </TooltipComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
