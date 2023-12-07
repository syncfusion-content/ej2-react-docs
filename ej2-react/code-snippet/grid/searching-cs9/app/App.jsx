import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const actionBegin = (args) => {
        if (args.requestType === 'searching') {
            args.cancel = true;
            setTimeout(() => {
                var columns = grid.getColumns();
                var predicate = null;
                for (var i = 0; i < columns.length; i++) {
                    var val = grid.valueFormatterService.fromView(args.searchString, columns[i].getParser(), columns[i].type);
                    if (val) {
                        if (predicate == null) {
                            predicate = new Predicate(columns[i].field, 'contains', val, true, true);
                        } else {
                            predicate = predicate.or(columns[i].field, 'contains', val, true, true);
                        }
                    }
                }
                grid.query = new Query().where(predicate);
            }, 200);
        }
    }

    const keyPressed = (args) => {
        if (args.key === 'Enter' && args.target && args.target.closest('.e-search') && args.target.value === '') {
            args.cancel = true;
            grid.query = new Query();
        }
    }
    return (<div>
        <GridComponent ref={g => grid = g} dataSource={data} height={280} toolbar={['Search']} actionBegin={actionBegin} keyPressed={keyPressed}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right" />
                <ColumnDirective field='OrderDate' headerText='OrderDate' width='100' format='yMd' />
            </ColumnsDirective>
            <Inject services={[Toolbar]} />
        </GridComponent>
    </div>);
};
export default App;