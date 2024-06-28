import * as React from 'react';
import { PivotViewComponent, Inject, Toolbar } from '@syncfusion/ej2-react-pivotview';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    let toolbarOptions = [{ template: '#enablertl' }, { template: '#disablertl' }];
    return (<div><div><PivotViewComponent id='PivotView' ref={d => pivotObj = d} dataSourceSettings={dataSourceSettings} width={'100%'} height={350} showToolbar={true} toolbar={toolbarOptions}><Inject services={[Toolbar]}/></PivotViewComponent></div><div><ButtonComponent id='enablertl' cssClass="e-flat e-primary" onClick={enableRtl.bind(this)}>ENABLE RTL</ButtonComponent></div><div><ButtonComponent id='disablertl' cssClass="e-flat e-primary" onClick={disableRtl.bind(this)}>DISABLE RTL</ButtonComponent></div></div>);
    function enableRtl() {
        pivotObj.enableRtl = true;
    }
    function disableRtl() {
        pivotObj.enableRtl = false;
    }
};
export default App;

