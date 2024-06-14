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
  // set placeholder to multicolumn ComboBox input element
  const waterMark = 'Select an employee';

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={empData} fields={fields} placeholder={waterMark}>
        <ColumnsDirective>
            <ColumnDirective field='EmpID' headerTemplate='<div class="header"> <span>Employee ID</span> </div>' width={90}></ColumnDirective>
            <ColumnDirective field='Name' headerTemplate='<div class="header"> <span>Employee Name</span> </div>' width={160}></ColumnDirective>
            <ColumnDirective field='Designation' headerTemplate='<div class="header"> <span>Designation</span> </div>' width={90}></ColumnDirective>
            <ColumnDirective field='Country' headerTemplate='<div class="header"> <span>Country</span> </div>' width={80}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
