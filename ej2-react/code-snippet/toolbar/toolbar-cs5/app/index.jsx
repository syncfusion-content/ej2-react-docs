import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";
const ReactApp = () => {
    return (<ToolbarComponent>
      <ItemsDirective>
        <ItemDirective text="Cut"/>
        <ItemDirective text="Copy"/>
        <ItemDirective type="Separator"/>
        <ItemDirective text="Paste"/>
        <ItemDirective type="Separator"/>
        <ItemDirective text="Undo"/>
        <ItemDirective text="Redo"/>
      </ItemsDirective>
    </ToolbarComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
