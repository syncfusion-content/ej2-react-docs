import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CalculatedField, IDataOptions, IDataSet, Inject, PivotViewComponent, NumberFormatting, NumberFormattingEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Units', type: 'CalculatedField' }],
    calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
  }
  let pivotObj: PivotViewComponent;
    return (<div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} allowNumberFormatting={true}numberFormatting={numberFormatting.bind(this)}><Inject services={[CalculatedField, NumberFormatting]}/> </PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Number Formatting</ButtonComponent></div></div>);

  function btnClick(): void {
    pivotObj.numberFormattingModule.showNumberFormattingDialog();
  }

  function numberFormatting(args: NumberFormattingEventArgs): void {
    if(args.formatName === 'Amount') {
      args.cancel = true;
    }
  }
};

export default App;
