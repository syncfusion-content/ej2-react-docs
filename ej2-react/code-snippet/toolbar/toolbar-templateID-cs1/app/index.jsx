import * as React from "react";
import * as ReactDOM from "react-dom";
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const buttonTemplate = () => {
  return (<div>
    <ButtonComponent content="Template"></ButtonComponent>
  </div>)
}

const ReactApp = () => {
  return (
    <ToolbarComponent >
      <ItemsDirective>
        <ItemDirective text="Cut" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Paste" />
        <ItemDirective type="Separator" />
        <ItemDirective template="<div><input type='checkbox' id='check1' checked=''>Accept</input></div>" />
        <ItemDirective text="Undo" />
        <ItemDirective text="Redo" />
        <ItemDirective template={buttonTemplate} />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);