import { PivotViewComponent, Pager, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Pager as GridPager } from '@syncfusion/ej2-grids';
import * as React from 'react';
import './App.css';

function App() {
    let pivotObj;
    let remoteData = new DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });

    let dataSourceSettings = {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
        filters: []
    };

    let rowPager;
    let columnPager;

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

    function rowPageClick(args) {
        pivotObj.pageSettings.currentRowPage = args.currentPage;
    }

    function columnPageClick(args) {
        pivotObj.pageSettings.currentColumnPage = args.currentPage;
    }

    return (
        <div>
            <PivotViewComponent
                ref={d => (pivotObj = d)}
                id='PivotView'
                height={350}
                dataSourceSettings={dataSourceSettings}
                gridSettings={{ columnWidth: 120 }}
                pageSettings={{
                    rowPageSize: 10,
                    columnPageSize: 5,
                    currentColumnPage: 1,
                    currentRowPage: 1
                }}
                pagerSettings={{
                    template: '#template'
                }}
                enablePaging={true}
                dataBound={dataBound.bind(this)}
            >
                <Inject services={[Pager]} />
            </PivotViewComponent>
            <script id="template" type="text/x-template">
                <div class="pager-label">Row Pager: </div>
                <div id="row-pager" class="e-pagertemplate"></div>
                <div class="pager-label">Column Pager: </div>
                <div id="column-pager" class="e-pagertemplate"></div>
            </script>
        </div>

    );
}

export default App;
