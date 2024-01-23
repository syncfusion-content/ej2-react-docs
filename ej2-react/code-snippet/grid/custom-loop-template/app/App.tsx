import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
    const item = [1, 2, 3, 4, 5];
    const isRatingGreater = (dataRating: number, comparisonValue: number) => {
        return dataRating >= comparisonValue;
    }
    const template = (props) => {
        return (
            <div className="rate">
                <div className="rating">
                    {item.map((i) => (
                        <span
                            key={i}
                            className={`${isRatingGreater(props.Rating, i) ? 'checked' : ''} star`}
                        ></span>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <GridComponent dataSource={data} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100'></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='CustomerID' width='100' />
                <ColumnDirective field='Rating' headerText='Customer Rating' width='150' template={template}></ColumnDirective>
            </ColumnsDirective>
        </GridComponent>);
}
export default App;