import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

const ReactApp = () => {
  return (
    <ToolbarComponent id='toolbar'>
      <ItemsDirective>
        <ItemDirective text="Cut" />
        <ItemDirective text="Copy" />
        <ItemDirective text="Paste" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Bold" />
        <ItemDirective text="Italic" />
        <ItemDirective text="Underline" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
export default ReactApp;
ReactDOM.render(<ReactApp />, document.getElementById("toolbar"));


