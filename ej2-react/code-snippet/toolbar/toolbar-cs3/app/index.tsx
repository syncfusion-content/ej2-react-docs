

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';

function ReactApp() {
  let boldAttribute: any = {
    'class': 'custom_bold', 'id': 'itemId'
  };
  const italicAttribute: any = { 'class': 'custom_italic' };
  const underAttribute: any = { 'class': 'custom_underline' };
  return (
    <ToolbarComponent width="300" >
      <ItemsDirective>
        <ItemDirective text="Bold" htmlAttributes={boldAttribute} />
        <ItemDirective text="Italic" htmlAttributes={italicAttribute} />
        <ItemDirective text="Underline" htmlAttributes={underAttribute} />
        <ItemDirective type="Separator" />
        <ItemDirective text="Uppercase" cssClass="e-txt-casing" />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);



