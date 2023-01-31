import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    let dashboardObj;
    let buttonObj;
    let resetPanes = [];
    const cellSpacing = [10, 10];
    let panels = [
        { 'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 0, content: '<div class="content">0</div>' },
        { 'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 2, content: '<div class="content">1</div>' },
        { 'sizeX': 2, 'sizeY': 2, 'row': 3, 'col': 4, content: '<div class="content">2</div>' }
    ];
    // Button click action to change the floating options for DashboardLayout
    function onClick(args) {
        if (buttonObj.value === "Disable Floating and Reset") {
            buttonObj.value = 'Enable Floating';
            dashboardObj.allowFloating = false;
            dashboardObj.panels = resetPanes;
        }
        else {
            buttonObj.value = 'Disable Floating and Reset';
            dashboardObj.allowFloating = true;
        }
    }
    // Using created event to initialize the panels
    function onCreate(args) {
        resetPanes = dashboardObj.serialize();
        resetPanes[0].content = '<div class="content">0</div>';
        resetPanes[1].content = '<div class="content">1</div>';
        resetPanes[2].content = '<div class="content">2</div>';
    }
    return (<div>
          <div id='container'>
          <div className="inline" id="control">
              <DashboardLayoutComponent id='defaultLayout' ref={s => (dashboardObj = s)} cellSpacing={cellSpacing} created={onCreate} panels={panels} allowFloating={false} cellAspectRatio={100 / 75} columns={6}/>
          </div>
          <div className="inline" id="properties">
              <input type="button" ref={s => buttonObj = s} className="e-btn e-flat e-primary e-outline" name="floating" id="floating" value="Enable Floating" onClick={onClick}/>
          </div>
          </div>
      </div>);
}
export default App;
