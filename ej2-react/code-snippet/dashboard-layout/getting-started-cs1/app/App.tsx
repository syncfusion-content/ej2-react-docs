import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

function App() {
  const cellSpacing: number[] = [5, 5];
  return (
  <div>
      <div className="control-section">
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} columns={5}>
          <div id="one" className="e-panel" data-row="0" data-col="0" data-sizex="1" data-sizey="1">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">0</div>
          </div>
          </div>
          <div id="two" className="e-panel" data-row="1" data-col="0" data-sizex="1" data-sizey="2">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">1</div>
          </div>
          </div>
          <div id="three" className="e-panel" data-row="0" data-col="1" data-sizex="2" data-sizey="2">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">2</div>
          </div>
          </div>
          <div id="four" className="e-panel" data-row="2" data-col="1" data-sizex="1" data-sizey="1">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">3</div>
          </div>
          </div>
          <div id="five" className="e-panel" data-row="2" data-col="2" data-sizex="2" data-sizey="1">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">4</div>
          </div>
          </div>
          <div id="six" className="e-panel" data-row="0" data-col="3" data-sizex="1" data-sizey="1">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">5</div>
          </div>
          </div>
          <div id="seven" className="e-panel" data-row="1" data-col="3" data-sizex="1" data-sizey="1">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">6</div>
          </div>
          </div>
          <div id="eight" className="e-panel" data-row="0" data-col="4" data-sizex="1" data-sizey="3">
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
              <div className="text-align">7</div>
          </div>
          </div>
      </DashboardLayoutComponent>
      </div>
  </div>
  );
}
export default App;
