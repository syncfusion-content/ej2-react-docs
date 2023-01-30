

import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  return (
    <ToolbarComponent width="380" overflowMode="Popup">
      <ItemsDirective>
        <ItemDirective text="Cut" prefixIcon="e-cut-icon tb-icons" overflow="Show" />
        <ItemDirective text="Copy" prefixIcon="e-copy-icon tb-icons" overflow="Show" />
        <ItemDirective text="Paste" prefixIcon="e-paste-icon" overflow="Show" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Bold" prefixIcon="e-bold-icon tb-icons" />
        <ItemDirective text="Underline" prefixIcon="e-underline-icon tb-icons" />
        <ItemDirective text="Italic" prefixIcon="e-italic-icon tb-icons" />
        <ItemDirective type="Separator" />
        <ItemDirective text="A-Z Sort" prefixIcon="e-ascending-icon tb-icons" overflow="Show" />
        <ItemDirective text="Z-A Sort" prefixIcon="e-descending-icon tb-icons" overflow="Show" />
        <ItemDirective text="Clear" prefixIcon="e-clear-icon tb-icons" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);



