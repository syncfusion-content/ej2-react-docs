import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalculatedField, FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
function App() {
    let dataSourceSettings = {
        catalog: 'Adventure Works DW 2008 SE',
        cube: 'Adventure Works',
        providerType: 'SSAS',
        enableSorting: true,
        url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
        localeIdentifier: 1033,
        rows: [
            { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
        ],
        columns: [
            { name: '[Product].[Product Categories]', caption: 'Product Categories' },
            { name: '[Measures]', caption: 'Measures' },
        ],
        values: [
            { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
            { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' },
            { name: 'Order on Discount', isCalculatedField: true }
        ],
        filters: [
            { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
        ],
        calculatedFieldSettings: [
            {
                name: 'BikeAndComponents',
                formula: '([Product].[Product Categories].[Category].[Bikes] + [Product].[Product Categories].[Category].[Components] )',
                hierarchyUniqueName: '[Product].[Product Categories]',
                formatString: 'Standard'
            },
            {
                name: 'Order on Discount',
                formula: '[Measures].[Order Quantity] + ([Measures].[Order Quantity] * 0.10)',
                formatString: 'Currency'
            }
        ]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true} loadOnDemandInMemberEditor={true}><Inject services={[CalculatedField, FieldList]}/>
    </PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
