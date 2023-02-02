// import DataManager related classes
import { DataManager, ODataV4Adaptor, Predicate, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    const employeeData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
    });
    // form  predicate to fetch the grouped data
    const groupPredicate = new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle');
    // bind the Query instance to query property
    const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(groupPredicate);
    // maps the appropriate column to fields property
    const fields = { value: 'FirstName', groupBy: 'City' };
    // sort the resulted items
    const sortOrder = 'Ascending';
    return (
    // specifies the tag for render the AutoComplete component
    <AutoCompleteComponent id="atcelement" query={query} groupTemplate={groupTemplate} dataSource={employeeData} sortOrder={sortOrder} fields={fields} placeholder="Find an employee"/>);
    // set the value to groupTemplate
    function groupTemplate(data) {
        return (<strong>{data.City}</strong>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
