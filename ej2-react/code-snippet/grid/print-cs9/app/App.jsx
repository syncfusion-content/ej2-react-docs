import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject as ChartInject, LineSeries, Legend, DateTime, Tooltip } from '@syncfusion/ej2-react-charts';
import { ActionEventArgs, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    let chart;
    let chartContainer;
    const pageOptions = { pageSize: 6 };
    const dataBound = () => {
        if (chart) {

            chart.series[0].marker = { visible: true };
            chart.series[0].xName = 'OrderDate';
            chart.series[0].yName = 'Freight';
            chart.series[0].dataSource = grid.getCurrentViewRecords();
            chart.refresh();
        }
    }
    const printClick = () => {
        grid.print();
    }
    const beforePrint = (args) => {
        if (chartContainer) {
            const clonedChartContainer = chartContainer.cloneNode(true);
            args.element.appendChild(clonedChartContainer);
        }
    }
    const actionComplete = (args) => {
        if (chart) {
            if (args.requestType === 'paging') {
                chart.series[0].dataSource = grid.getCurrentViewRecords();
                chart.refresh();
            }
        }
    }
    return (<div>
        <ButtonComponent className='printbtn' cssClass='e-danger' onClick={printClick}>Print</ButtonComponent>
        <GridComponent ref={g => grid = g} dataSource={data.slice(0, 20)}
            allowPaging={true} pageSettings={pageOptions} dataBound={dataBound} beforePrint={beforePrint} actionComplete={actionComplete} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='OrderDate' format='yMd' width='150' />
                <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Page]} />
        </GridComponent >
        <h4>Chart</h4>
        <div ref={cc => chartContainer = cc}>
            <ChartComponent ref={c => chart = c} width='60%' title='Chart Title' primaryXAxis={{ valueType: 'DateTime', labelFormat: 'MMM d' }}>
                <SeriesCollectionDirective>
                    <SeriesDirective type="Line" width={1} columnWidth={0.4}></SeriesDirective>
                </SeriesCollectionDirective>
                <ChartInject services={[LineSeries, Tooltip, Legend, DateTime]} />
            </ChartComponent>
        </div>
    </div>)
};
export default App;