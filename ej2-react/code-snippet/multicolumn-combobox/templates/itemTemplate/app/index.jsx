import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // defined the array of object data
  const empData = [
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "Michael", "Designation": "HR", "Country": "Russia" },
    { "EmpID": 1004, "Name": "Steven Buchanan", "Designation": "Product Manager", "Country": "Ukraine" },
    { "EmpID": 1005, "Name": "Margaret Peacock", "Designation": "Developer", "Country": "Egypt" },
    { "EmpID": 1006, "Name": "Janet Leverling", "Designation": "Team Lead", "Country": "Africa" },
    { "EmpID": 1007, "Name": "Alice", "Designation": "Product Manager", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Bob", "Designation": "Developer", "Country": "India" },
    { "EmpID": 1009, "Name": "John", "Designation": "Product Manager", "Country": "Ireland"},
    { "EmpID": 1010, "Name": "Mario Pontes", "Designation": "Team Lead", "Country": "South Africa" },
    { "EmpID": 1011, "Name": "Yang Wang", "Designation": "Developer", "Country": "Russia" },
    { "EmpID": 1012, "Name": "David", "Designation": "Product Manager", "Country": "Egypt" },
    { "EmpID": 1013, "Name": "Antonio Bianchi", "Designation": "Team Lead", "Country": "USA" },
    { "EmpID": 1014, "Name": "Laura", "Designation": "Developer", "Country": "England" },
    { "EmpID": 1015, "Name": "Carlos Hernandez", "Designation": "Developer", "Country": "Canada" },
    { "EmpID": 1016, "Name": "Lily", "Designation": "Product Manager", "Country": "France" },
    { "EmpID": 1017, "Name": "Tom Williams", "Designation": "Developer", "Country": "Ukraine" },
    { "EmpID": 1018, "Name": "Grace", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1019, "Name": "Olivia", "Designation": "Team Lead", "Country": "Ireland" },
    { "EmpID": 1020, "Name": "James", "Designation": "Developer", "Country": "China" },
];
  // maps the appropriate column to fields property
  const fields = { text: 'Name', value: 'EmpID' };
  // set itemTemplate to multicolumn ComboBox input element
  const itemTemplate = "<tr><td class ='emp-id'>${EmpID}</td><td class='name'>${Name}</td><td class ='city'>${Designation}</td></tr>";

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={empData} fields={fields} itemTemplate={itemTemplate}>
        <ColumnsDirective>
            <ColumnDirective field='EmpID' header='Employee ID' width={120}></ColumnDirective>
            <ColumnDirective field='Name' header='Name' width={100}></ColumnDirective>
            <ColumnDirective field='Designation' header='Designation' width={120}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
