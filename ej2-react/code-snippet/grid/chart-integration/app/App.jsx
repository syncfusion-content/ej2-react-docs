import { ColumnDirective, ColumnsDirective, ContextMenu, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { GridChart } from '@syncfusion/ej2-grid-chart';
import * as React from 'react';
import { salesDatas } from './datasource';

function App() {
  let grid;
  let gridChart;
  const selectionSettings = { type: 'Multiple' };

  function created() {
    gridChart = new GridChart({
      enableRtl: grid.enableRtl,
      locale: grid.locale,
    });
  }

  function contextMenuClick(args) {
    if (args.chartType) {
      const chartArgs = {
        gridInstance: args.gridInstance,
        chartType: args.chartType,
        records: args.records
      };
      const chartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        }
      };
      const model = {
        chart: chartModel,
        accumulationChart: {}
      };
      const categorySeries = {
        category: ['Product', 'Month'],
        series: ['Online', 'Retail']
      };
      gridChart.render(chartArgs, model, categorySeries);
    }
  }

  return (
    <div>
      <GridComponent
        dataSource={salesDatas}
        height={340}
        ref={g => (grid = g)}
        created={created}
        contextMenuClick={contextMenuClick}
        allowSelection={true}
        contextMenuItems={[
          'Bar', 'StackingBar', 'StackingBar100',
          'Pie', 'Column', 'StackingColumn', 'StackingColumn100',
          'Line', 'StackingLine', 'StackingLine100',
          'Area', 'StackingArea', 'StackingArea100', 'Scatter'
        ]}
        selectionSettings={selectionSettings}
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="50" />
          <ColumnDirective field="Product" headerText="Product" width="90" />
          <ColumnDirective field="Month" headerText="Month" width="180" />
          <ColumnDirective field="Online" headerText="Online" width="120" textAlign="Right" />
          <ColumnDirective field="Retail" headerText="Retail" width="110" textAlign="Right" />
          <ColumnDirective field="Total" headerText="Total" width="110" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[ContextMenu]} />
      </GridComponent>
    </div>
  );
}

export default App;