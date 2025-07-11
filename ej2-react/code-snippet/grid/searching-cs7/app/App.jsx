import { Toolbar, GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let values = '';
    const key = '';
    let refresh = false;
    let removeQuery = false;
    let valueAssign = false;
    let grid;
    const searchOptions = {
        fields: ['OrderID', 'CustomerID', 'Freight', 'ShipCountry'],
        key: '',
        operator:'contains',
        ignoreCase: true
      };
    const toolbarOptions = ['Search'];
    const actionBegin = (args) => {
        if (args.requestType == 'searching') {
            const keys = args.searchString.split(',');
            let flag = true;
            let predicate;
            if (keys.length > 1) {
                if (grid.searchSettings.key !== '') {
                    values = args.searchString;
                    keys.forEach((key) => {
                        grid.getColumns().forEach((col) => {
                            if (flag) {
                                predicate = new Predicate(col.field, 'contains', key, true);
                                flag = false;
                            }
                            else {
                                var predic = new Predicate(col.field, 'contains', key, true);
                                predicate = predicate.or(predic);
                            }
                        });
                    });
                    grid.query = new Query().where(predicate);
                    grid.searchSettings.key = '';
                    refresh = true;
                    valueAssign = true;
                    removeQuery = true;
                    grid.refresh();
                }
            }
        }
    };
    const actionComplete = (args) => {
        if (args.requestType === 'refresh' && valueAssign) {
            document.getElementById(grid.element.id + '_searchbar').value = values;
            valueAssign = false;
        }
        else if (document.getElementById(grid.element.id + '_searchbar').value === '' &&
            args.requestType === 'refresh' &&
            removeQuery
        ) {
            grid.query = new Query();
            removeQuery = false;
            grid.refresh();
        }
        document.getElementById(grid.element.id + '_searchbar').addEventListener('keyup', (args) => {
            if (args.target.value === '' && (args.key === 'Enter' || args.key === 'Backspace')) {
                grid.query = new Query();
                removeQuery = false;
                grid.refresh();
            }
        });
    };
    return (<div>
    <GridComponent dataSource={data} height={280} toolbar={toolbarOptions} searchSettings={searchOptions} ref={g => grid = g} actionBegin={actionBegin} actionComplete={actionComplete}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
        </ColumnsDirective>
        <Inject services={[Toolbar]}/>
    </GridComponent>
    </div>);
};
export default App;