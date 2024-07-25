
import { CalculatedField, PivotFieldListComponent, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

const SAMPLE_CSS = `
.e-pivotview {
    width: 58%;
    height: 100%;
    float: left;
}
.e-pivotfieldlist {
    width: 42%;
    height: 100%;
    float: right;
}
.e-pivotfieldlist .e-static {
    width: 100% !important;
}`;

function App() {

  React.useEffect(() => {
    renderComplete();
  }, []);

  let dataSourceSettings: IDataOptions = {
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

  return (<div className="control-section">
    <style>{SAMPLE_CSS}</style>
    <PivotViewComponent id='PivotViewFieldList' ref={ (d: PivotViewComponent) => pivotObj = d } enginePopulated={afterPivotPopulate.bind(this)} allowDeferLayoutUpdate={true} width={'99%'} height={'530'} gridSettings={{columnWidth: 140}}></PivotViewComponent>
    <PivotFieldListComponent id='PivotFieldList' ref={ (d: PivotFieldListComponent) => fieldlistObj = d } enginePopulated={afterPopulate.bind(this)} dataSourceSettings={dataSourceSettings} renderMode={"Fixed"} allowDeferLayoutUpdate={true} allowCalculatedField={true}><Inject services={[CalculatedField]} /></PivotFieldListComponent></div>);

  function afterPopulate(): void {
    if (fieldlistObj && pivotObj) {
      if (fieldlistObj.isRequiredUpdate) {
        fieldlistObj.updateView(pivotObj);
      }
      pivotObj.notify('ui-update', pivotObj);
      fieldlistObj.notify('tree-view-update', fieldlistObj);
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
