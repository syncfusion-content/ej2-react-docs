import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ColumnDirective, ColumnsDirective, GridComponent, DataStateChangeEventArgs, Inject, Page, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids'
import { fetchData } from './reducer/action';
import { Query } from '@syncfusion/ej2-data';

const App = () => {
    let gridInstance;
    const sortSettings = { columns: [{ field: 'ProductID', direction: 'Descending' }] }
    const query = new Query().addParams('Syncfusion_React_Grid', 'true');
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const dataStateChange = (state) => {
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