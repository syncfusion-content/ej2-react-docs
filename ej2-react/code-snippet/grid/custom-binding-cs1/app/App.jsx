import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, LazyLoadGroup, Inject, Page, Sort, Edit, Toolbar, Group } from '@syncfusion/ej2-react-grids'
import { addRow, deleteRow, fetchData, updateRow } from './reducer/action';

const App = () => {    
  let gridInstance;
  const toolbar = ['Add', 'Edit', 'Delete',  'Update', 'Cancel', 'Search'];
  const editSettings = {allowAdding: true, allowDeleting: true, allowEditing: true};
  const groupSettings={enableLazyLoading: true, columns:['ProductName'], showGroupedColumn: true};
  const filterSettings = {columns: [{field: 'CustomerName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Maria'}]}
  const sortSettings = {columns: [{ field: 'ProductID', direction: 'Descending' }]}
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const dataStateChange = (state) => {
    const query = gridInstance.getDataModule().generateQuery();
    dispatch(fetchData(state, query));
  }

  const dataSourceChange = (state) =>{
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
      gridInstance.dataSource = state.data;
    }
  },[state.data])
  
  return (
      <GridComponent ref={grid => gridInstance = grid} allowSorting={true} allowFiltering={true} 
      allowPaging={true} 
      allowGrouping={true}
      filterSettings={filterSettings}
      groupSettings={groupSettings}
      sortSettings={sortSettings}
      toolbar={toolbar}
      editSettings={editSettings}
      dataStateChange={dataStateChange}
      dataSourceChanged={dataSourceChange}
      >
        <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' isPrimaryKey={true} />
        <ColumnDirective field='ProductName' headerText='Product Name' width='160' />
        <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' />
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group, LazyLoadGroup, Edit, Toolbar]} />
      </GridComponent>
  )
}

export default (App);