import * as React from 'react';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
function App() {
    let dataSourceSettings = {
        catalog: 'Adventure Works DW 2008 SE',
        cube: 'Adventure Works',
        providerType: 'SSAS',
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
            { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
        ]
    };
    let pivotObj;

    function beforeServiceInvoke(args) {
        args.internalProperties.headers['accept-language'] = 'es-ES';
        console.log(args.internalProperties.headers);
    }
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} beforeServiceInvoke={beforeServiceInvoke.bind(this)}>
    </PivotViewComponent>);
};
export default App;