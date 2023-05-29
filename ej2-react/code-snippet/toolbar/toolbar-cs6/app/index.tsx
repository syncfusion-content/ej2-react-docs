import { CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

const ReactApp = () => {
  const data: any = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];

  const dropDownList = () => {
    return (<div>
      <DropDownListComponent dataSource={data} width={120} index={2} />
    </div>)
  }
  const numericText = () => {
    return (<div>
      <NumericTextBoxComponent format='c2' value={1}></NumericTextBoxComponent>
    </div>)
  }
  const checkBox = () => {
    return (<div>
      <CheckBoxComponent label='Checkbox' checked={true}></CheckBoxComponent>
    </div>)
  }
  const radioButton = () => {
    return (<div>
      <RadioButtonComponent label='Radio' name='default' checked={true}></RadioButtonComponent>
    </div>)
  }

  return (
    <ToolbarComponent >
      <ItemsDirective>
        <ItemDirective text="Cut" />
        <ItemDirective text="Copy" />
        <ItemDirective type="Separator" />
        <ItemDirective text="Undo" />
        <ItemDirective text="Redo" />
        <ItemDirective type="Separator" />
        <ItemDirective type="Input" template={numericText} />
        <ItemDirective type="Input" template={dropDownList} />
        <ItemDirective type="Input" template={checkBox} />
        <ItemDirective type="Input" template={radioButton} />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);