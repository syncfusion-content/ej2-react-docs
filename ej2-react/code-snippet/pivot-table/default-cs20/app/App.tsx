import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ConditionalFormatting, IDataSet, Inject, PivotViewComponent, IConditionalFormatSettings } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        conditionalFormatSettings: [
            {
                measure: 'In_Stock',
                value1: 5000,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#80cbc4',
                    color: 'black',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                }
            }
        ]
  }
  let pivotObj: PivotViewComponent;
  
    return (<div><div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Apply Formatting</ButtonComponent></div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowConditionalFormatting={true} conditionalFormatting={conditionalFormatting.bind(this)}><Inject services={[ConditionalFormatting]}/> </PivotViewComponent></div>
    </div>);

  function btnClick(): void {
    pivotObj.conditionalFormattingModule.showConditionalFormattingDialog();
  }
  function conditionalFormatting(args: IConditionalFormatSettings): void {
    args.skipFormatting = true;
  }
};

export default App;



