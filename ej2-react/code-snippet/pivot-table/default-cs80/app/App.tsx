
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CalculatedField, PivotFieldListComponent, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  React.useEffect(() => {
    renderComplete();
  }, []);

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  let fieldlistObj: PivotFieldListComponent;
  
  return (
    <div>
      <div className="control-section">
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Field List</ButtonComponent>
        <PivotViewComponent id='PivotView' ref={(d: PivotViewComponent) => pivotObj = d} enginePopulated={afterPivotPopulate.bind(this)} height={350} gridSettings={{ columnWidth: 140 }}></PivotViewComponent>
        <PivotFieldListComponent id='PivotFieldList' ref={(d: PivotFieldListComponent) => fieldlistObj = d} enginePopulated={afterPopulate.bind(this)} dataSourceSettings={dataSourceSettings} target='#PivotFieldList' renderMode={"Popup"} allowCalculatedField={true}><Inject services={[CalculatedField]} /></PivotFieldListComponent></div>
      <div className='col-lg-3 property-section'></div></div>);

  function btnClick(): void {
    fieldlistObj.dialogRenderer.fieldListDialog.show();
  }

  function afterPopulate(): void {
    if (fieldlistObj && pivotObj) {
        fieldlistObj.updateView(pivotObj);
    }
  }
  function afterPivotPopulate(): void {
      if (fieldlistObj && pivotObj) {
          fieldlistObj.update(pivotObj);
      }
  }
  function renderComplete(): void {
      fieldlistObj.updateView(pivotObj);
  }
};

export default App;
