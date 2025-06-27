import { ColumnDirective, ColumnsDirective, ContextMenu, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { GridChart} from '@syncfusion/ej2-grid-chart';
import * as React from 'react';
import { salesDatas } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';


function App() {
  let grid;
  let gridChart;
  const selectionSettings = { type: 'Multiple' };

  function created() {
    gridChart = new GridChart({
      enablePropertyPanel: true,
      allowExport: true,
      enableRtl: grid.enableRtl,
      locale: grid.locale,
      updateChartSettings: updateChartSettings
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
        },
        margin: {
          top: 20,
          bottom: 20,
          right: 20,
          left: 20
        },
        tooltip: {
          enable: true,
          textStyle: {
            size: '16px',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }
        },
        title: 'Sales Data',
        titleStyle: {
          size: '24px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontWeight: 'Bold'
        },
        subTitle: 'Sales data for various products over the months',
        load: (args) => {
          if (args.chart.titleStyle) {
            args.chart.titleStyle.color = '#1976d2';
          }
        }
      };
      const accumulationChartModel = {
        title :'Sales Distribution'
      };
      const model = {
        chart: chartModel,
        accumulationChart: accumulationChartModel
      };
      const categorySeries = {
        category: ['Product', 'Month'],
        series: ['Online', 'Retail']
      };
      gridChart.render(chartArgs, model, categorySeries);
    }
  }

  function updateChartSettings(args) {
    const chart = args.changes.chart;
    if (!chart) return;
    const chartMargin = chart.margin;
    if (chartMargin && !isNullOrUndefined(chartMargin)) {
      if (chartMargin.top < 20) chartMargin.top = 20;
      if (chartMargin.bottom < 20) chartMargin.bottom = 20;
      if (chartMargin.left < 20) chartMargin.left = 20;
      if (chartMargin.right < 20) chartMargin.right = 20;
    }
  }

  return (
    <div>
      <GridComponent dataSource={salesDatas} height={420} ref={g => grid = g}  created={created}
        contextMenuClick={contextMenuClick}
        allowSelection={true}
        contextMenuItems={[
          'Bar', 'StackingBar', 'StackingBar100',
          'Pie', 'Column', 'StackingColumn', 'StackingColumn100',
          'Line', 'StackingLine', 'StackingLine100',
          'Area', 'StackingArea', 'StackingArea100', 'Scatter'
        ]}
        selectionSettings={selectionSettings} >
        <ColumnsDirective>
          <ColumnDirective type='checkbox' width='50' />
          <ColumnDirective field='Product' headerText='Product' width='90' />
          <ColumnDirective field='Month' headerText='Month' width='180' />
          <ColumnDirective field='Online' headerText='Online' width='120' textAlign='Right' />
          <ColumnDirective field='Retail' headerText='Retail' width='110' textAlign='Right' />
          <ColumnDirective field='Total' headerText='Total' width='110' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[ContextMenu]} />
      </GridComponent>
    </div>
  );
}

export default App;