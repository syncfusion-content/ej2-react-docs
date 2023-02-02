

import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  return (
    <ToolbarComponent width="300" overflowMode="Popup" >
      <ItemsDirective>
        <ItemDirective text="Cut" prefixIcon="e-cut-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective text="Copy" prefixIcon="e-copy-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective text="Paste" prefixIcon="e-paste-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Bold" prefixIcon="e-bold-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective text="Underline" prefixIcon="e-underline-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective text="Italic" prefixIcon="e-italic-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective type="Separator" />
        <ItemDirective text="A-Z Sort" prefixIcon="e-ascending-icon tb-icons" showTextOn="Overflow" />
        <ItemDirective text="Z-A Sort" prefixIcon="e-descending-icon tb-icons" showTextOn="Overflow" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);



