


import { IDataOptions, PivotViewComponent, Pager, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Pager as GridPager } from '@syncfusion/ej2-grids';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    let pivotObj: PivotViewComponent;
    let remoteData: DataManager = new DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    let dataSourceSettings: IDataOptions = {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
        filters: []
    };

    let rowPager: GridPager;
    let columnPager: GridPager;

    function dataBound() {
        updateTemplate();
    }

    function updateTemplate() {
        if (!isNullOrUndefined(rowPager)) {
            rowPager.destroy();
            rowPager = null;
        }
        rowPager = new GridPager({
            pageSize: pivotObj.pageSettings.rowPageSize,
            totalRecordsCount: pivotObj.engineModule.rowCount,
            currentPage: pivotObj.pageSettings.currentRowPage,
            pageCount: 5,
            click: rowPageClick
        });
        rowPager.appendTo('#row-pager');
        if (!isNullOrUndefined(columnPager)) {
            columnPager.destroy();
            columnPager = null;
        }
        columnPager = new GridPager({
            pageSize: pivotObj.pageSettings.columnPageSize,
            totalRecordsCount: pivotObj.engineModule.columnCount,
            currentPage: pivotObj.pageSettings.currentColumnPage,
            pageCount: 5,
            click: columnPageClick
        });
        columnPager.appendTo('#column-pager');
    }

    function rowPageClick(args: any) {
        pivotObj.pageSettings.currentRowPage = args.currentPage;
        pivotObj.refreshData();
    }

    function columnPageClick(args: any) {
        pivotObj.pageSettings.currentColumnPage = args.currentPage;
        pivotObj.refreshData();
    }

    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} gridSettings={{ columnWidth: 120 }} pageSettings={{
            rowPageSize: 10,
            columnPageSize: 5,
            currentColumnPage: 1,
            currentRowPage: 1
        }} pagerSettings={{
            template: '#template'
        }} enablePaging={true} dataBound={dataBound.bind(this)}>
            <Inject services={[Pager]} />
        </PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



