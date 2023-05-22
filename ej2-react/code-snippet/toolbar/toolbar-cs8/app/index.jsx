import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";
const ReactApp = () => {
    return (<ToolbarComponent>
      <ItemsDirective>
        <ItemDirective text="Cut" prefixIcon="e-cut-icon tb-icons"/>
        <ItemDirective text="Copy" prefixIcon="e-copy-icon tb-icons"/>
        <ItemDirective text="Paste" prefixIcon="e-paste-icon"/>
        <ItemDirective type="Separator"/>
        <ItemDirective text="Bold" prefixIcon="e-bold-icon tb-icons"/>
        <ItemDirective text="Underline" prefixIcon="e-underline-icon tb-icons"/>
        <ItemDirective text="Italic" prefixIcon="e-italic-icon tb-icons"/>
        <ItemDirective text="Color-Picker" prefixIcon="e-color-icon tb-icons"/>
        <ItemDirective type="Separator"/>
        <ItemDirective text="A-Z Sort" prefixIcon="e-ascending-icon tb-icons"/>
        <ItemDirective text="Z-A Sort" prefixIcon="e-descending-icon tb-icons"/>
        <ItemDirective text="Clear" prefixIcon="e-clear-icon tb-icons"/>
      </ItemsDirective>
    </ToolbarComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
