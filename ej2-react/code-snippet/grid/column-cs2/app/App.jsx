import { GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import {data} from './datasource';

function App() {
    return <GridComponent dataSource={data}/>;
}
;
export default App;
