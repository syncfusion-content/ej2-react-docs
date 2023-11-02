

import { ColumnModel, Edit, EditSettingsModel, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import {data} from './datasource';

function App() {
    let grid: Grid | null;
    const editOptions: EditSettingsModel = {
        allowAdding: true, allowDeleting: true, allowEditing: true
    };
    const dataBound = () => {
        if (grid) {
            const column: ColumnModel = grid.columns[0] as ColumnModel;
            column.isPrimaryKey = true;
        }
    }
    return <GridComponent dataSource={data} dataBound={dataBound} ref={g => grid = g}
        editSettings={editOptions}>
        <Inject services={[Edit]} />
    </GridComponent>

};
export default App;


