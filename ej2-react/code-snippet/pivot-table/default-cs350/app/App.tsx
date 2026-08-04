import {
  EnginePopulatedEventArgs,
  FieldList,
  GroupingBar,
  IAxisSet,
  IDataSet,
  Inject,
  PivotViewComponent
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import D3GroupedBar from './D3GroupedBar';
import { pivotData } from './datasource';
import './App.css';

interface ChartDatum {
  row: string;
  column: string;
  value: number;
}

const dataSourceSettings: DataSourceSettingsModel = {
  dataSource: pivotData as IDataSet[],
  expandAll: false,
  enableSorting: true,
  allowMemberFilter: true,
  allowLabelFilter: true,
  allowValueFilter: true,
  rows: [{ name: 'Year', caption: 'Fiscal Year' }],
  columns: [{ name: 'Product' }],
  values: [{ name: 'Amount', caption: 'Revenue', type: 'Sum' }],
  filters: [{ name: 'Region' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }]
};

const gridSettings = {
  columnWidth: 110
};

function toChartData(
  pivotValues: IAxisSet[][],
  measureName: string
): ChartDatum[] {
  const chartData: ChartDatum[] = [];

  (pivotValues || []).forEach((row: IAxisSet[]) => {
    (row || []).forEach((cell: IAxisSet) => {
      if (!cell || cell.axis !== 'value' || cell.isGrandSum ||
          cell.actualText !== measureName ||
          cell.value === null || cell.value === undefined) {
        return;
      }

      const value: number = Number(cell.value);
      if (!isFinite(value)) {
        return;
      }

      chartData.push({
        row: cell.rowHeaders ? String(cell.rowHeaders) : 'All rows',
        column: cell.columnHeaders ? String(cell.columnHeaders) : measureName,
        value: value
      });
    });
  });

  return chartData;
}

function App() {
  const [chartData, setChartData] = React.useState<ChartDatum[]>([]);

  const handleEnginePopulated = React.useCallback(
    (args: EnginePopulatedEventArgs): void => {
      setChartData(toChartData(args.pivotValues || [], 'Amount'));
    },
    []
  );

  return (
    <main className="analytics-dashboard">
      <section className="dashboard-panel" aria-labelledby="pivot-heading">
        <h2 id="pivot-heading">Sales report</h2>
        <p className="panel-description">
          Rearrange or filter fields to update the visualization.
        </p>
        <PivotViewComponent
          id="PivotView"
          dataSourceSettings={dataSourceSettings}
          gridSettings={gridSettings}
          height={340}
          showFieldList={true}
          showGroupingBar={true}
          enginePopulated={handleEnginePopulated}
        >
          <Inject services={[FieldList, GroupingBar]} />
        </PivotViewComponent>
      </section>

      <section className="dashboard-panel" aria-labelledby="chart-heading">
        <h2 id="chart-heading">Revenue visualization</h2>
        <p className="panel-description">
          The chart uses the Pivot Table's current aggregated values.
        </p>
        <div className="chart-container">
          <D3GroupedBar
            data={chartData}
            title="Revenue by row and column fields"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
