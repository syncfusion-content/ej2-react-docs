import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function Detail(props) {
    let detailGrid;
    useEffect(()=>{
        let showCustomerName = document.getElementById('CustomerName');
        if(props.detailRecord){
            showCustomerName.textContent = props.detailRecord.ContactName;
            detailGrid.dataSource = data.filter((record) => record.CustomerName === props.detailRecord.ContactName).slice(0, 5);
        }
    },[detailGrid, props.detailRecord]);

    return (
        <div>
            <div>
                Showing orders of Customer: <b id='CustomerName'></b>
            </div>
            <br/>
            <GridComponent allowSelection={false} ref={grid => detailGrid = grid}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' ></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='100' format='C2' type='number'></ColumnDirective>
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150'></ColumnDirective>
                </ColumnsDirective>
            </GridComponent>
        </div>
    );
}
export default Detail;