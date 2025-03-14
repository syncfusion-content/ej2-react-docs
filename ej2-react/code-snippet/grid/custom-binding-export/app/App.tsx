import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective,GridComponent,Inject,Page,Toolbar,ExcelExport,PdfExport,ExcelExportProperties,PdfExportProperties, ToolbarItems, DataStateChangeEventArgs} from "@syncfusion/ej2-react-grids";
import { fetchData } from './reducer/action';
import store from "./reducer/store/store";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

const App = () => {
  const gridInstance = useRef<GridComponent | null>(null); 
  const exportingRef = useRef(false); 
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [gridData, setGridData] = useState([]);
  const toolbarOptions: ToolbarItems[] = ["ExcelExport", "PdfExport"];
  const validationRule = { required: true };
  const orderidRules = { required: true, number: true };

  const dataStateChange = (state: DataStateChangeEventArgs) => {
    if (state.action?.requestType !== "refresh") {
      dispatch(fetchData(state));
    }
  };

  useEffect(() => {
    if (!exportingRef.current) {
      setGridData(state.data);
    }
  }, [state.data]);

  const toolbarClick = async (args: ClickEventArgs) => {
    (gridInstance.current as GridComponent).showSpinner(); 
    exportingRef.current = true; 
    const exportState = {
      skip: 0,
      take:  (gridInstance.current as GridComponent).pageSettings.totalRecordsCount
    };
    await dispatch(fetchData(exportState));
    const updatedState = store.getState();
    const exportData = updatedState.data.result; 
    if (args.item.text === "Excel Export") {
      const excelExportProps: ExcelExportProperties = {
        dataSource: exportData, 
      };
      (gridInstance.current as GridComponent).excelExport(excelExportProps);
    } else if (args.item.text === "PDF Export") {
      const pdfExportProps: PdfExportProperties = {
        dataSource: exportData, 
      };
      (gridInstance.current as GridComponent).pdfExport(pdfExportProps); 
    }
    exportingRef.current = false; 
  };
  
  const exportComplete = () => {
    gridInstance.current?.hideSpinner();
  };
  return (
    <GridComponent ref={gridInstance} dataSource={gridData} allowExcelExport={true} allowPdfExport={true} allowPaging={true}  toolbar={toolbarOptions} toolbarClick={toolbarClick} excelExportComplete={exportComplete} pdfExportComplete={exportComplete} dataStateChange={dataStateChange}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" width="140" textAlign="Right" validationRules={orderidRules}
        isPrimaryKey={true}/>
        <ColumnDirective field="CustomerID" headerText="Customer Name" width="150" validationRules={validationRule}/>
        <ColumnDirective field="ProductID" headerText="ProductID" width="140" format="C2" textAlign="Right"/>
        <ColumnDirective field="ProductName" headerText="ProductName" width="150"/>
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, ExcelExport, PdfExport]} />
    </GridComponent>
  );
};
export default App;