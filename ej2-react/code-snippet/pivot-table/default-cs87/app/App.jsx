import { FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Products' }],
        dataSource: pivotData,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true} enginePopulated={afterPopulate.bind(this)}><Inject services={[FieldList]}/></PivotViewComponent>);
    function afterPopulate() {
        Object.keys(pivotObj.engineModule.fieldList).forEach((key, index) => {
            if (key === 'Quarter') {
                pivotObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
            }
            else if (key === 'Year') {
                pivotObj.engineModule.fieldList[key].caption = 'Production Year';
            }
        });
    }
};
export default App;

