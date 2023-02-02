

import { CalculatedField, PivotFieldListComponent, IDataOptions, Inject, PivotViewComponent, VirtualScroll } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

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

function data(count: number) {
    let result: Object[] = [];
    let dt: number = 0;
    for (let i: number = 1; i < (count + 1); i++) {
        dt++;
        let round: string;
        let toString: string = i.toString();
        if (toString.length === 1) {
            round = '0000' + (i);
        }
        else if (toString.length === 2) {
            round = '000' + i;
        }
        else if (toString.length === 3) {
            round = '00' + i;
        } else if (toString.length === 4) {
            round = '0' + i;
        } else {
            round = toString;
        }
        result.push({
            ProductID: 'PRO-' + (i % 1000),
            Year: "FY " + (dt + 2013),
            Price: Math.round(Math.random() * 5000) + 5000,
            Sold: Math.round(Math.random() * 80) + 10,
        });
        if (dt / 4 == 1) {
            dt = 0;
        }
    }
    return result;
};
function App() {
  let pivotGridModule;
  let dataSourceSettings: IDataOptions = {
    dataSource: data(1000),
    enableSorting: false,
    expandAll: true,
    formatSettings: [{ name: 'Price', format: 'C0' }],
    rows: [{ name: 'ProductID' }],
    columns: [{ name: 'Year' }],
    values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
  }
  let pivotObj: PivotViewComponent;
  let fieldListObj: PivotFieldListComponent;
  
    return (<div className="control-section">
    <style>{SAMPLE_CSS}</style>
    <PivotViewComponent id='PivotView' ref={d => pivotObj = d} enableVirtualization={true} enginePopulated={afterPivotPopulate.bind(this)} width={'99%'} height={'530'}><Inject services={[VirtualScroll]}/></PivotViewComponent>
    <PivotFieldListComponent id='PivotFieldList' ref={d => fieldListObj = d} load={onLoad} enginePopulated={afterPopulate.bind(this)} dataSourceSettings={dataSourceSettings} renderMode={"Fixed"} allowCalculatedField={true}><Inject services={[CalculatedField]} /></PivotFieldListComponent></div>);

  function afterPopulate(): void {
    pivotObj = document.getElementById('PivotView').ej2_instances[0];
    fieldListObj = document.getElementById('PivotFieldList').ej2_instances[0];
    fieldListObj.updateView(pivotObj);
  }
  function afterPivotPopulate(): void {
    pivotObj = document.getElementById('PivotView').ej2_instances[0];
    fieldListObj = document.getElementById('PivotFieldList').ej2_instances[0];
    fieldListObj.update(pivotObj);
  }
  function rendereComplete(): void {
    fieldListObj.updateView(pivotObj);
    fieldListObj.update(pivotObj);
  }
  function onLoad(): void {
    //Getting component instance.
    pivotObj = document.getElementById('PivotView').ej2_instances[0];
    fieldListObj = document.getElementById('PivotFieldList').ej2_instances[0];
    pivotGridModule = pivotObj;
    //Assigning report to pivot table component.
    pivotObj.dataSourceSettings = fieldListObj.dataSourceSettings;
    //Generating page settings based on pivot table component’s size.
    pivotObj.updatePageSettings(true);
    //Assigning page settings to field list component.
    fieldListObj.pageSettings =  pivotObj.pageSettings;
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



