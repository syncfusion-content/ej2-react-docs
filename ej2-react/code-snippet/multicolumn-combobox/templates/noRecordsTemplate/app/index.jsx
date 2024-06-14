import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // maps the appropriate column to fields property
  const fields = { text: 'Name', value: 'EmpID' };
  // set placeholder to multicolumn ComboBox input element
  const waterMark = 'Select an employee';
  // set noRecordsTemplate to multicolumn ComboBox input element
  const noRecordsTemplate = "<span class='norecord'> NO RECORDS FOUND </span>";

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={[]} fields={fields} noRecordsTemplate={noRecordsTemplate} placeholder={waterMark}>
        <ColumnsDirective>
            <ColumnDirective field='EmpID' header='Employee ID' width={90}></ColumnDirective>
            <ColumnDirective field='Name' header='Name' width={90}></ColumnDirective>
            <ColumnDirective field='Designation' header='Designation' width={90}></ColumnDirective>
            <ColumnDirective field='Country' header='Country' width={70}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
