

import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from './datasource';

function App() {
    return (
        <QueryBuilderComponent width='100%' dataSource={employeeData}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


