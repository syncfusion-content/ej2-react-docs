
import { PivotViewComponent, Pager, Inject, PagerSettings, PageSettings} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
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
        isInversed: true
    };

        return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} gridSettings={gridSettings} pageSettings={pageSettings} pagerSettings={pagerSettings} enablePaging={true}>
            <Inject services={[Pager]} />
        </PivotViewComponent>);
};

export default App;
