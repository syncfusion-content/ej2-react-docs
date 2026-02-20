import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import { employeeData, employeePerformanceData } from './datasource';

function App() {
    function GridRowTemplate(props) {
        const primaryXAxis = {
            valueType: 'Category',
        };
        const getChartData = (employeeID) => {
            const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID);
            return employeePerformance ? employeePerformance.chartData : [];
        };
        return (
            <tr>
                <td className="custom">
                    <div>{props.Name}</div>
                </td>
                <td className="custom">
                    <div>{props.Designation}</div>
                </td>
                <td className="custom">
                    <div>{props.Team}</div>
                </td>
                <td className="details">
                    <ChartComponent id={`chart-container-${props.EmployeeID}`} primaryXAxis={primaryXAxis} height="150px">
                        <Inject services={[ColumnSeries, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={getChartData(props.EmployeeID)} xName='month' yName='performance' type='Column' name='Performance' />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </td>
            </tr>
        );
    }
    return (
        <div>
            <GridComponent dataSource={employeeData} rowTemplate={GridRowTemplate} height={315}>
                <ColumnsDirective>
                    <ColumnDirective field='Name' headerText='Name' width='180' />
                    <ColumnDirective field='Designation' headerText='Designation' width='150' />
                    <ColumnDirective field='Team' headerText='Team' width='180' />
                    <ColumnDirective headerText='Employee Performance' width='300' textAlign="Center" />
                </ColumnsDirective>
            </GridComponent>
        </div>
    );
}

export default App;
