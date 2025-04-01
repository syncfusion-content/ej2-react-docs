import { CalculatedField, FieldList, IDataSet, Inject, PivotViewComponent, GroupingBar } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

const SAMPLE_CSS = `
//Value Cells
    .e-pivotview .e-valuescontent {
         text-align: center !important;
    }

    //Columns Headers
    /*.e-pivotview .e-columnsheader {
         text-align: center !important;
    }

    //Rows Headers
    .e-pivotview .e-rowsheader {
         text-align: center !important;
    }*/

    //Summary Cells
    /* .e-pivotview .e-summary {
         text-align: center !important;
    }*/`

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;

    return (
        <div>
            <style>{SAMPLE_CSS}</style>
            <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true} showGroupingBar={true}><Inject services={[CalculatedField, FieldList, GroupingBar]}/> </PivotViewComponent>
        </div>
    );
};

export default App;
