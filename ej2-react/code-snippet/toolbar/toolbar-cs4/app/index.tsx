import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tooltip } from '@syncfusion/ej2-popups';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';

function ReactApp() {
  React.useEffect(() => {
    let tooltip: Tooltip = new Tooltip({
      target: '#toolbar [title]',
    });
    tooltip.appendTo('#Tooltip');
  }, []);
  return (
    <div id="Tooltip">
      <ToolbarComponent width="300">
        <ItemsDirective>
          <ItemDirective text="Cut" tooltipText="Cut" />
          <ItemDirective text="Copy" tooltipText="Copy" />
          <ItemDirective text="Paste" tooltipText="Paste" />
          <ItemDirective text="Undo" tooltipText="Undo" />
          <ItemDirective text="Redo" tooltipText="Redo" />
        </ItemsDirective>
      </ToolbarComponent></div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);



