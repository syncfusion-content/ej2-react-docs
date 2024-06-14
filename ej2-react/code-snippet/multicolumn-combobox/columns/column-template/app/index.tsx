import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // defined the array of object data
  const data: { [key: string]: Object }[] = [
    { "Name": "Andrew Fuller", "Eimg": 7, "Designation": "Team Lead", "Country": "England", "DateofJoining": "12/10/2010" },
    { "Name": "Anne Dodsworth", "Eimg": 1, "Designation": "Developer", "Country": "USA", "DateofJoining": "10/05/2000" },
    { "Name": "Janet Leverling", "Eimg": 3, "Designation": "HR", "Country": "Russia", "DateofJoining": "23/02/2016" },
    { "Name": "Laura Callahan", "Eimg": 2, "Designation": "Product Manager", "Country": "Ukraine", "DateofJoining": "30/1/2012" },
    { "Name": "Margaret Peacock", "Eimg": 6, "Designation": "Developer", "Country": "Egypt", "DateofJoining": "15/08/2014" },
    { "Name": "Michael Suyama", "Eimg": 9, "Designation": "Team Lead", "Country": "Africa", "DateofJoining": "27/07/2015" },
    { "Name": "Nancy Davolio", "Eimg": 4, "Designation": "Product Manager", "Country": "Australia", "DateofJoining": "24/05/2017" },
    { "Name": "Robert King", "Eimg": 8, "Designation": "Developer ", "Country": "India", "DateofJoining": "08/09/2018" },
    { "Name": "Steven Buchanan", "Eimg": 10, "Designation": "CEO", "Country": "Ireland", "DateofJoining": "05/03/2020" }
  ];
  // maps the appropriate column to fields property
  const fields: Object = { text: 'Name', value: 'Eimg' };
  // set placeholder to multicolumn ComboBox input element
  const waterMark: string = 'Select an employee';

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" cssClass="multicolumn-customize" dataSource={data} fields={fields} popupHeight={230} placeholder={waterMark} gridSettings={{ rowHeight: 40 }}>
        <ColumnsDirective>
            <ColumnDirective field='Eimg' header='Photos' width={90} template='<div><img class="empImage" src="https://ej2.syncfusion.com/demos/src/multicolumn-combobox/Employees/${Eimg}.png" alt="employee"/> </div>'></ColumnDirective>
            <ColumnDirective field='Name' header='Employee Name' width={160} template='<div class="ename"> ${Name} </div> <div class="job"> ${Designation} </div>'></ColumnDirective>
            <ColumnDirective field='DateofJoining' header='Date of Joining' width={165} template='<div class="dateOfJoining"> ${DateofJoining} </div>'></ColumnDirective>
            <ColumnDirective field='Country' header='Country' width={100} template='<div class="country"> ${Country} </div>'></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
