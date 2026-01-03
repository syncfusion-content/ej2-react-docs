import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';

function App() {
    let dataSourceSettings = {
        url: 'https://services.syncfusion.com/react/production/api/pivot/post',
        mode: 'Server',
        expandAll: true,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
        filters: []
    };

    function beforeServiceInvoke(args) {
        const token = getAuthToken(); // obtain securely at runtime

        args.internalProperties = args.internalProperties || {};
        args.internalProperties.headers = {
            ...(args.internalProperties.headers || {}),
            'Authorization': `Bearer ${token}`
        };
    }

    function getAuthToken() {
        // Retrieve and return a valid auth token securely
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    }

    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} beforeServiceInvoke={beforeServiceInvoke.bind(this)}>
        </PivotViewComponent>);
};
export default App;