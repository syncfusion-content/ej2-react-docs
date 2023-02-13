

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(){
    // bind the DataManager instance to dataSource property
    const employeeData: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // bind the Query instance to query property
    const query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
    // maps the appropriate column to fields property
    const fields: object = { text: 'FirstName', value: 'EmployeeID' };
    // sort the resulted items
    const sortOrder: SortOrder = 'Ascending';

    // set the value to itemTemplate property
    function itemTemplate(data: any): JSX.Element {
      return (
       <span><span className='name'>{data.FirstName}</span><span className ='city'>{data.City}</span></span>
        );
    }
    return (
    // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" query={query} itemTemplate={itemTemplate = itemTemplate.bind(this)} dataSource={employeeData} sortOrder={sortOrder} fields={fields} placeholder="Select an employee" />
    );

}
ReactDOM.render(<App />, document.getElementById('sample'));


