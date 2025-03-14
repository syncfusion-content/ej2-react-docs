import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective,GridComponent,Inject,Page,Toolbar,ExcelExport,PdfExport} from "@syncfusion/ej2-react-grids";
import { fetchData } from './reducer/action';
import store from "./reducer/store/store";

const App = () => {
  const gridInstance = useRef(null);
  const exportingRef = useRef(false); 
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [gridData, setGridData] = useState([]);
  const toolbarOptions = ["ExcelExport", "PdfExport"];
  const validationRule = { required: true };
  const orderidRules = { required: true, number: true };

  const dataStateChange = (state) => {
    if (state.action?.requestType !== "refresh") {
      dispatch(fetchData(state));
    }
  };

  useEffect(() => {
    if (!exportingRef.current) {
      setGridData(state.data);
    }
  }, [state.data]);

  const toolbarClick = async (args) => {
    gridInstance.current.showSpinner(); 
    exportingRef.current = true; 
    const exportState = {
      skip: 0,
      take: gridInstance.current.pageSettings.totalRecordsCount
    };
    await dispatch(fetchData(exportState));
    const updatedState = store.getState();
    const exportData = updatedState.data.result; 
    if (args.item.text === "Excel Export") {
      const excelExportProps= {
        dataSource: exportData, 
      };
      gridInstance.current.excelExport(excelExportProps);
    } else if (args.item.text === "PDF Export") {
      const pdfExportProps = {
        dataSource: exportData, 
      };
      gridInstance.current.pdfExport(pdfExportProps); 
    }
    exportingRef.current = false; 
  };
  
  const exportComplete = () => {
    gridInstance.current?.hideSpinner();
  };
  return (
    <GridComponent ref={gridInstance} dataSource={gridData} allowExcelExport={true} allowPdfExport={true} allowPaging={true}  toolbar={toolbarOptions} toolbarClick={toolbarClick} excelExportComplete={exportComplete} pdfExportComplete{exportComplete} dataStateChange={dataStateChange}>
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