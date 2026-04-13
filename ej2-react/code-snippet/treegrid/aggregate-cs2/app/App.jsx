import { getObject } from '@syncfusion/ej2-grids';
import { Aggregate, AggregatesDirective, ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { summaryData } from './datasource';
function App() {
    const footerSum = (props) => {
        return (<span>Total: {getObject('Sum', props)}</span>);
    };
    const customAggregateFn = (row) => {
        const sampleData = getObject('result', row);
        let countLength = 0;
        sampleData.filter((item) => {
            const data = getObject('category', item);
            const value = 'Frozen seafood';
            if (data === value) {
                countLength++;
            }
        });
        return countLength;
    };
    const custom = (props) => {
        return (<span> Count of Frozen seafood: {getObject('Custom', props)}</span>);
    };
    return <TreeGridComponent dataSource={summaryData} treeColumnIndex={0} childMapping='subtasks' height='260'>
        <ColumnsDirective>
            <ColumnDirective field='category' headerText='Category' width='160'/>
            <ColumnDirective field='units' headerText='Total Units' width='130' type='number' textAlign='Right'/>
            <ColumnDirective field='unitPrice' headerText='Unit Price($)' width='90' textAlign='Right' type='number' format='C2'/>
            <ColumnDirective field='price' headerText='Price($)' type='number' width='160' textAlign='Right' format='C'/>
        </ColumnsDirective>
            <AggregatesDirective>
            <AggregateDirective showChildSummary={false}>
                <AggregateColumnsDirective>
                <AggregateColumnDirective field='price' columnName='category' type='Custom' customAggregate={customAggregateFn} footerTemplate={custom}/>
                </AggregateColumnsDirective>
                </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Aggregate]}/>
    </TreeGridComponent>;
}
;
export default App;
