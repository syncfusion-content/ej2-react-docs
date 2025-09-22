import { PivotViewComponent, Pager, Inject, PagerSettings, PageSettings } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Pager as GridPager } from '@syncfusion/ej2-grids';
import * as React from 'react';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
    let pivotObj: PivotViewComponent;
    let remoteData: DataManager = new DataManager({
        url: 'https://bi.syncfusion.com/northwindservice/api/orders',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });

    let dataSourceSettings: DataSourceSettingsModel = {
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

    let gridSettings: GridSettings = {
        columnWidth: 120
    } as GridSettings;

    let pageSettings: PageSettings = {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
    };

    let pagerSettings: PagerSettings = {
        template: '#template'
    };
    
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
    }

    function columnPageClick(args: any) {
        pivotObj.pageSettings.currentColumnPage = args.currentPage;
    }

    return (
        <div>
            <PivotViewComponent
                ref={(d: PivotViewComponent) => (pivotObj = d)}
                id='PivotView'
                height={350}
                dataSourceSettings={dataSourceSettings}
                gridSettings={gridSettings}
                pageSettings={pageSettings}
                pagerSettings={pagerSettings}
                enablePaging={true}
                dataBound={dataBound.bind(this)}
            >
                <Inject services={[Pager]} />
            </PivotViewComponent>
            <script id="template" type="text/x-template">
                <div className="pager-label">Row Pager: </div>
                <div id="row-pager" className="e-pagertemplate"></div>
                <div className="pager-label">Column Pager: </div>
                <div id="column-pager" className="e-pagertemplate"></div>
            </script>
        </div>
    );
}

export default App;
