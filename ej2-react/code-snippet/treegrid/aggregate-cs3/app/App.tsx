

import { getObject } from '@syncfusion/ej2-grids';
import { Aggregate, AggregatesDirective, ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { summaryRowData } from './datasource';

function App() {
    const footerSum = (props: object) => {
        return(<span>Minimum: {getObject('Min', props)}</span>)
    }

    const footerSum2 = (props: object) => {
        return(<span>Maximum: {getObject('Max', props)}</span>)
    }

    return <TreeGridComponent dataSource={summaryRowData} treeColumnIndex={0} childMapping='children' height='260'>
        <ColumnsDirective>
            <ColumnDirective field='FreightID' headerText='Freight ID' width='130'/>
            <ColumnDirective field='FreightName' headerText='Freight Name' width='180'/>
            <ColumnDirective field='UnitWeight' headerText='Weight Per Unit' width='130' textAlign='Right' type='number'/>
            <ColumnDirective field='TotalUnits' headerText='Total Units' type='number' width='125' textAlign='Right'/>
        </ColumnsDirective>
            <AggregatesDirective>
            <AggregateDirective showChildSummary={false}>
                <AggregateColumnsDirective>
                <AggregateColumnDirective field='TotalUnits' columnName='TotalUnits' type='Min'
                    footerTemplate={footerSum}/>
                <AggregateColumnDirective field='UnitWeight' columnName='UnitWeight' type='Max'
                    footerTemplate={footerSum2}/>
                </AggregateColumnsDirective>
                </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Aggregate]}/>
    </TreeGridComponent>
};
export default App;


