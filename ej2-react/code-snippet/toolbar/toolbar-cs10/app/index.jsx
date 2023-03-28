import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";
function ReactApp() {
    return (<ToolbarComponent width="330" overflowMode="Popup">
      <ItemsDirective>
        <ItemDirective text="Cut" prefixIcon="e-cut-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Copy" prefixIcon="e-copy-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Paste" prefixIcon="e-paste-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective type="Separator"/>
        <ItemDirective text="Bold" prefixIcon="e-bold-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Underline" prefixIcon="e-underline-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Italic" prefixIcon="e-italic-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Color-Picker" prefixIcon="e-color-icon tb-icons" showTextOn="Overflow" overflow="Hide"/>
        <ItemDirective type="Separator"/>
        <ItemDirective text="A-Z Sort" prefixIcon="e-ascending-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Z-A Sort" prefixIcon="e-descending-icon tb-icons" showTextOn="Overflow" overflow="Show"/>
        <ItemDirective text="Clear" prefixIcon="e-clear-icon tb-icons" showTextOn="Overflow" overflow="Hide"/>
      </ItemsDirective>
    </ToolbarComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
