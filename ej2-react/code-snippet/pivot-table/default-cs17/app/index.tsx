

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ConditionalFormatting, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
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
            },
            {
                value1: 3400,
                value2: 40000,
                measure: 'Sold',
                conditions: 'Between',
                style: {
                    backgroundColor: '#f48fb1',
                    color: 'black',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                }
            }
        ]
  }
  let pivotObj: PivotViewComponent;

  return (<div><div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Apply Formatting</ButtonComponent></div><div className="col-md-9"> <PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowConditionalFormatting={true}><Inject services={[ConditionalFormatting]}/> </PivotViewComponent></div>
    </div>);
  function btnClick(): void {
    pivotObj.conditionalFormattingModule.showConditionalFormattingDialog();
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


