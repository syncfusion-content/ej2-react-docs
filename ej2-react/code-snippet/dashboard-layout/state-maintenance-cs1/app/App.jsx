import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    let dashboardObj;
    const cellSpacing = [20, 20];
    let panels = [
        { "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
        { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
        { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
        { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
    ];
    let restoreModel = [];
    function onRestore(args) {
        dashboardObj.panels = restoreModel;
    }
    function onSave(args) {
        restoreModel = dashboardObj.serialize();
        restoreModel[0].content = '<div class="content">0</div>';
        restoreModel[1].content = '<div class="content">1</div>';
        restoreModel[2].content = '<div class="content">2</div>';
        restoreModel[3].content = '<div class="content">3</div>';
        restoreModel[4].content = '<div class="content">4</div>';
        restoreModel[5].content = '<div class="content">5</div>';
        restoreModel[6].content = '<div class="content">6</div>';
    }
    return (<div>
      <div id='container'>
          <div className="inline" id="control">
              <DashboardLayoutComponent id='defaultLayout' created={onSave} ref={s => (dashboardObj = s)} cellSpacing={cellSpacing} panels={panels} columns={5}/>
          </div>
          <div className="inline" id="properties">
              <button className="e-btn e-primary" onClick={onSave}>Save</button>
              <button className="e-btn e-flat e-outline" id="restore" onClick={onRestore}>Restore</button>
          </div>
      </div>
  </div>);
}
export default App;
