import React, { useState, useCallback } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Inject } from '@syncfusion/ej2-react-grids';
import { customerData } from './datasource';
import Detail from './Detail';

function Master() {
    const customerNames = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
    const masterData = customerData.filter((e) => customerNames.indexOf(e.CustomerID) !== -1);
    const [rowIdx, setRowIdx] = useState(null);
    const [record, setRecord] = useState(null);

    const rowSelecting = (args) => {
        setRowIdx(args.rowIndex);
    };

    const rowSelected = useCallback((args) => {
        setRecord(args.data);
    }, [rowIdx]);

    return (
        <div>
            <div>
                <GridComponent dataSource={masterData} selectedRowIndex={2} rowSelecting={rowSelecting} rowSelected={rowSelected}>
                    <ColumnsDirective>
                        <ColumnDirective field='ContactName' headerText='Customer Name' width='150'></ColumnDirective>
                        <ColumnDirective field='CompanyName' headerText='Company Name' width='150'></ColumnDirective>
                        <ColumnDirective field='Address' headerText='Address' width='150' />
                        <ColumnDirective field='Country' headerText='Country' width='130' />
                    </ColumnsDirective>
                    <Inject services={[Selection]} />
                </GridComponent>
                <br/>
                <Detail detailRecord={record}/>
            </div>
        </div>
    );
}
export default Master;