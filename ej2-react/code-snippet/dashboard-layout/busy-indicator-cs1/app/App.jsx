import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

function App() {
  let dashboardObj;
  const cellSpacing = [5, 5];
  const busyIndicatorTemplate = '<span role="status" aria-label="Loading"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="24 12"><animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="0.8s" repeatCount="indefinite"/></circle></svg></span>';
  const panels = [
    { id: 'panel-0', sizeX: 1, sizeY: 1, row: 0, col: 0, header: 'Panel 0', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' },
    { id: 'panel-1', sizeX: 3, sizeY: 2, row: 0, col: 1, header: 'Panel 1', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' },
    { id: 'panel-2', sizeX: 1, sizeY: 3, row: 0, col: 4, header: 'Panel 2', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' },
    { id: 'panel-3', sizeX: 1, sizeY: 1, row: 1, col: 0, header: 'Panel 3', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' },
    { id: 'panel-4', sizeX: 2, sizeY: 1, row: 2, col: 0, header: 'Panel 4', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' },
    { id: 'panel-5', sizeX: 1, sizeY: 1, row: 2, col: 2, header: 'Panel 5', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' },
    { id: 'panel-6', sizeX: 1, sizeY: 1, row: 2, col: 3, header: 'Panel 6', showBusyIndicator: true, busyIndicatorTemplate: busyIndicatorTemplate, content: '<div>Loading...</div>' }
  ];

  React.useEffect(() => {
    setTimeout(() => {
      if (dashboardObj) {
        dashboardObj.panels.forEach((panel) => {
          panel.showBusyIndicator = false;
          panel.content = '<div>Data Loaded Successfully</div>';
        });
        dashboardObj.dataBind();
      }
    }, 5000);
  }, []);

  return (
    <div>
      <div className="control-section">
        <DashboardLayoutComponent id='defaultLayout' ref={s => (dashboardObj = s)} cellSpacing={cellSpacing} panels={panels} columns={5} />
      </div>
    </div>
  );
}
export default App;
