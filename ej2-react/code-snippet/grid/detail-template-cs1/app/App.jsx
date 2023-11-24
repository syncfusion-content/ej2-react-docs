import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid;
  let textBox;
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
  const expand = () => {
    grid.detailRowModule.expand(textBox.value);
  }
  return (<div>
    <TextBoxComponent ref={t =>textBox =t} placeholder='Enter the row Index' width="250px" floatLabelType='Auto'></TextBoxComponent>
    <ButtonComponent id='sample' onClick={expand}>Expand</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
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