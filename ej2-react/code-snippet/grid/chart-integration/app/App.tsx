import { ColumnDirective, ColumnsDirective, ContextMenuClickEventArgs, ContextMenu, GridComponent, Inject , SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { GridChart, CategorySeries, ChartChanges} from '@syncfusion/ej2-grid-chart';
import { ChartModel } from '@syncfusion/ej2-charts';
import * as React from 'react';
import { salesDatas } from './datasource';

interface SalesRecord {
  Product: string;
  Month: string;
  Online: number;
  Retail: number;
  Total: number;
}

function App() {
  let grid: GridComponent | null;
  let gridChart: GridChart;
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };

  function created() {
    gridChart = new GridChart({
      enableRtl: (grid as GridComponent).enableRtl,
      locale: (grid as GridComponent).locale,
    });
  }

  function contextMenuClick(args: ContextMenuClickEventArgs) {
    if (args.chartType) {
      const chartArgs = {
        gridInstance: (args.gridInstance as GridComponent),
        chartType: args.chartType,
        records: (args.records as SalesRecord[])
      };
      const chartModel: ChartModel = {
        primaryXAxis: {
          valueType: 'Category',
          labelRotation: 315
        }
      };
      const model: ChartChanges = {
        chart: chartModel,
        accumulationChart: {}
      };
      const categorySeries: CategorySeries = {
        category: ['Product', 'Month'],
        series: ['Online', 'Retail']
      };
      (gridChart as GridChart).render(chartArgs, model, categorySeries);
    }
  }

 return (
  <div>
    <GridComponent
      dataSource={salesDatas}
      height={420}
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