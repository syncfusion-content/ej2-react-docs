

import { CheckBox, RadioButton } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  const data: any = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
  const numericTem: any = new NumericTextBox({ format: 'c2', value: 1 });
  const templateDropdown: any = new DropDownList({ dataSource: data, width: 120, index: 2 });
  const templateCheckbox: any = new CheckBox({ label: 'Checkbox', checked: true });
  const templateRadiobutton: any = new RadioButton({ label: 'Radio', name: 'default', checked: true });

  return (
    <ToolbarComponent >
      <ItemsDirective>
        <ItemDirective text="Cut" />
        <ItemDirective text="Copy" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Undo" />
        <ItemDirective text="Redo" />
        <ItemDirective type="Separator" />
        <ItemDirective type="Input" template={numericTem} />
        <ItemDirective type="Input" template={templateDropdown} />
        <ItemDirective type="Input" template={templateCheckbox} />
        <ItemDirective type="Input" template={templateRadiobutton} />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);



