import React, { useRef, useState } from "react";
import {GridComponent, ColumnsDirective, ColumnDirective, ExcelExport, Inject, Toolbar, ToolbarItems, ToolbarClickEventArgs, ExcelExportCompleteArgs} from "@syncfusion/ej2-react-grids";
import { Query } from "@syncfusion/ej2-data";
import { data } from "./datasource";

function App() {
  const gridRef = useRef(null);
  const [message, setMessage] = useState("");
  const toolbarOptions: ToolbarItems[] = ["ExcelExport"];
  const toolbarClick  = (args: ToolbarClickEventArgs) => {
    if (gridRef.current && args.item.id === "Grid_excelexport") {
      let queryClone = gridRef.current.query;
      gridRef.current.query = new Query().addParams("recordcount", "15");
      setMessage(`Key: ${gridRef.current.query.params[0].key} and Value: ${gridRef.current.query.params[0].value} on ${args.item.text}`);
      gridRef.current.excelExport();
    }
  };
  const excelExportComplete  = (args: ExcelExportCompleteArgs): void =>  {
    gridRef.current.query = new Query(); 
  };
  return (
    <div>
      <p id="message">{message}</p>
      <GridComponent
        id="Grid"
        dataSource={data}
        height={272}
        toolbar={toolbarOptions}
        allowExcelExport={true}
        toolbarClick={toolbarClick}
        excelExportComplete={excelExportComplete}
        ref={gridRef}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width="120" />
          <ColumnDirective field="CustomerID" headerText="Customer ID" visible={false} width="150" />
          <ColumnDirective field="ShipCity" headerText="Ship City" width="150" />
          <ColumnDirective field="ShipName" headerText="Ship Name" width="150" />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
      
    </div>
  );
}
export default App;