import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
function App() {
    const gridTemplate = (props) => {
        const src = 'https://ej2.syncfusion.com/react/demos/src/grid/images/' + props.EmployeeID + ".png";
        return (<tr className="templateRow">
      <td className="photo">
        <img src={src} alt={props.EmployeeID}/>
      </td>
      <td className="details">
        <table className="CardTable" cellPadding={3} cellSpacing={2}>
          <colgroup>
            <col style={{ width: "30%"}}/>
            <col style={{ width: "10%" }}/>
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
          </tbody>
        </table>
      </td>
    </tr>);
    };
    return (<div>
    <GridComponent dataSource={employeeData} rowTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective headerText='EmployeeImage' width='180' textAlign='Center' field='OrderID'/>
        <ColumnDirective headerText='Employee Details' width='300' textAlign='Left' field='CustomerName'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
