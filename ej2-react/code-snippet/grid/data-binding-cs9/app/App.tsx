import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective, GridComponent, DataStateChangeEventArgs, Inject, Page, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids'
import { fetchData } from './reducer/action';
import { Query } from '@syncfusion/ej2-data';

export interface gridState {
  data: {
    result: Object[];
    count: number;
  }
}
const App = () => {
  let gridInstance: GridComponent | null;
  const sortSettings: SortSettingsModel = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
  const query: Query = new Query().addParams('Syncfusion_React_Grid', 'true');
  const state = useSelector((state: gridState) => state);
  const dispatch = useDispatch();

  const dataStateChange = (state: DataStateChangeEventArgs) => {
    dispatch(fetchData(state));
  }

  useEffect(() => {
    if (gridInstance) {
      gridInstance.dataSource = state.data;
    }
  }, [state.data])

  return (
    <GridComponent ref={grid => gridInstance = grid} query={query} allowSorting={true}
      allowPaging={true}
      sortSettings={sortSettings}
      dataStateChange={dataStateChange}
    >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' isPrimaryKey={true} />
        <ColumnDirective field='ProductName' headerText='Product Name' width='160' />
        <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' />
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' />
      </ColumnsDirective>
      <Inject services={[Page, Sort]} />
    </GridComponent>
  )
}

export default (App);