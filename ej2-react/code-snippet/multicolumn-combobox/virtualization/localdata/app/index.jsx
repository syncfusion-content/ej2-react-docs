import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // local data generation function
  let data = (count) => {
    let names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
    let hours = [8, 12, 16];
    let status = ["Pending", "Completed", "In Progress"];
    let designation = ["Engineer", "Manager", "Tester"];
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.floor(Math.random() * names.length)],
            Designation: designation[Math.floor(Math.random() * designation.length)],
            Estimation: hours[Math.floor(Math.random() * hours.length)],
            Status: status[Math.floor(Math.random() * status.length)]
        });
    }
    return result;
  };
  // maps the appropriate column to fields property
  const fields = { text: 'Engineer', value: 'TaskID' };
  // set placeholder to multicolumn ComboBox input element
  const waterMark = 'Select an engineer';

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={data(150)} fields={fields} placeholder={waterMark} popupHeight={230} gridSettings={{ rowHeight: 40 }} enableVirtualization={true}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' header='Employee ID' width={100}></ColumnDirective>
            <ColumnDirective field='Engineer' header='Name' width={140}></ColumnDirective>
            <ColumnDirective field='Designation' header='Designation' width={130}></ColumnDirective>
            <ColumnDirective field='Estimation' header='Estimation' width={120}></ColumnDirective>
            <ColumnDirective field='Status' header='Status' width={120}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
