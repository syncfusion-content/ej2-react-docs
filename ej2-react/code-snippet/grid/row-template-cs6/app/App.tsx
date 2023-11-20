

import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID} />
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (<div>
    <GridComponent dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140' />
        <ColumnDirective headerText='Last Name' width='140' field='LastName' />
        <ColumnDirective headerText='Title' width='150' field='Title' />
        <ColumnDirective headerText='Country' width='150' field='Country' />
      </ColumnsDirective>
      <Inject services={[DetailRow]} />
    </GridComponent>
  </div>)
};
export default App;


