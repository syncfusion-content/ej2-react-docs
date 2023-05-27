import { React, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, Edit, ColumnsDirective, Filter, GridComponent, Inject, Page, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import { pageRow, filterRow, sortRow, updateRow, deleteRow, addRow } from './action';

const App = () => {   
  var gridInstance; 
  const orderidRules = { required: true, number: true };
  const pageSettings={pageCount: 4, pageSizes: true}
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const dataStateChange = (state) => {
    if (state.action.requestType === 'filtering') {
      dispatch(filterRow(state, query));
    }
    if (state.action.requestType === 'sorting') {
      dispatch(sortRow(state, query));    
    }
    const query = gridInstance.getDataModule().generateQuery(true);
    if (state.action.requestType === "paging" || state.action.requestType === "refresh" || state.action.requestType === "delete") {
      dispatch(pageRow(state, query));
    }
  }

  function  dataSourceChanged(state) {
    const query = gridInstance.getDataModule().generateQuery(true);  
    if (state.requestType === "save") {
      if (state.action === "add") {
        dispatch(addRow(state, query));
      } else if (state.action === "edit") {
        dispatch(updateRow(state, query));
      }
    }
    if (state.requestType === 'delete') {
      dispatch(deleteRow(state, query));
    }
  }

  useEffect(() => {
    if (gridInstance) {
      gridInstance.dataSource = state.data
    }
  })
  
  return (
    <>
      <GridComponent ref={grid => gridInstance = grid} dataSource={state.data} allowSorting={true} allowFiltering={true} 
      allowPaging={true} 
      pageSettings={pageSettings}
      editSettings={editOptions} 
      toolbar={toolbarOptions}
      dataStateChange={dataStateChange.bind(this)}
      dataSourceChanged={dataSourceChanged.bind(this)}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='CustomerID' headerText='Customer Name' width='150'></ColumnDirective>
          <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' ></ColumnDirective>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' ></ColumnDirective>
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Edit, Toolbar]} />
      </GridComponent>
    </>
  )
}

export default (App);
