import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Internationalization } from '@syncfusion/ej2-base';
import * as React from 'react';
import { employeeData } from './datasource';

let instance: Internationalization = new Internationalization();

interface DateFormat extends Window {
  format?: Function;
}
function App() {
  const format = (value: Date) => {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
  }
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (<tr className="templateRow">
      <td className="photo">
        <img src={src} alt={props.EmployeeID} />
      </td>
      <td className="details">
        <table className="CardTable" cellPadding={3} cellSpacing={2}>
          <colgroup>
            <col style={{width: "30%" }} />
            <col style={{width: "10%" }}/>
          </colgroup>
          <tbody>
            <tr>
              <td className="CardHeader">First Name </td>
              <td>:</td>
              <td>{props.FirstName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Last Name</td>
              <td>:</td>
              <td>{props.LastName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Title</td>
              <td>:</td>
              <td>{props.Title}</td>
            </tr>
            <tr>
              <td className="CardHeader">Birth Date</td>
              <td>:</td>
              <td> {format(props.BirthDate)}</td>
            </tr>
            <tr>
              <td className="CardHeader">Hire Date</td>
              <td>:</td>
              <td>{format(props.HireDate)}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    );
  }
  return (<div>
    <GridComponent dataSource={employeeData} rowTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective headerText='EmployeeImage' width='180' textAlign='Center' field='OrderID' />
        <ColumnDirective headerText='Employee Details' width='300' textAlign='Left' field='CustomerName' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


