

import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { foodInformation } from './datasource';

function App() {
    const totalCalories = (field: string, data: { Protein: number, Fat: number, Carbohydrate: number }, column: Column): number => {
        return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
    };
    return <GridComponent dataSource={foodInformation} height={315}>
        <ColumnsDirective>
            <ColumnDirective field='FoodName' width='100' />
            <ColumnDirective field='Protein' width='90' textAlign="Right" />
            <ColumnDirective field='Fat' width='90' textAlign="Right" />
            <ColumnDirective field='Carbohydrate' width='100' textAlign="Right" />
            <ColumnDirective headerText='Calories In Take' width='140' textAlign="Right" valueAccessor={totalCalories} />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


