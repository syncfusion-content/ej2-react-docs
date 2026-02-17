import { ColumnDirective, ColumnsDirective, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';
import React, { useState } from "react";
import { DataManager, WebApiAdaptor, Query } from "@syncfusion/ej2-data";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

function App() {
  const [statusMessage, setStatusMessage] = useState('');
  const [setData, setDataSource] = useState<Object[]>([]); 
  const hostUrl = "https://services.syncfusion.com/react/production/";
  const data = new DataManager({ url: hostUrl + 'api/Orders', adaptor: new WebApiAdaptor });
  const executeQuery = () => {
    setStatusMessage("Fetching data...");
    data.executeQuery(new Query())
    .then((response) => {
      setDataSource(response.result);
      setStatusMessage(`Data fetched successfully! Total Records: ${response.result.length}`);
    })
    .catch(() => {
      setStatusMessage("Error fetching data!");
    });
  };
  
  return (
    <div>
      <div style={{ margin: "5px 10px" }}>
        <ButtonComponent onClick={executeQuery}>Execute Query</ButtonComponent>
      </div>
      <p style={{ textAlign: "center", color: "red" }}>{statusMessage}</p>
      <GridComponent dataSource={setData} allowPaging={true} height={260}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" width="120" textAlign="Right" />
          <ColumnDirective field="CustomerID" headerText="Customer ID" width="160" />
          <ColumnDirective field="EmployeeID" headerText="Employee ID" width="120" textAlign="Right" />
          <ColumnDirective field="Freight" headerText="Freight" width="150" format="C2" textAlign="Right" />
          <ColumnDirective field="ShipCountry" headerText="Ship Country" width="150" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};
export default App;