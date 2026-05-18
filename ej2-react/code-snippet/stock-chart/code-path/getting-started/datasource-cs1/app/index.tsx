{% raw %}


import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, CandleSeries } from '@syncfusion/ej2-react-charts';

let data = [
  { x: new Date('2012-04-02'), open: 320.71, high: 324.07, low: 317.74, close: 323.78, volume: 45638000 },
  { x: new Date('2012-04-03'), open: 323.03, high: 324.30, low: 319.64, close: 321.63, volume: 40857000 },
  { x: new Date('2012-04-04'), open: 319.54, high: 319.82, low: 315.87, close: 317.89, volume: 32519000 },
  { x: new Date('2012-04-05'), open: 316.44, high: 318.53, low: 314.60, close: 316.48, volume: 46327000 },
  { x: new Date('2012-04-06'), open: 317.20, high: 320.50, low: 315.30, close: 319.80, volume: 38200000 },
  { x: new Date('2012-04-07'), open: 320.00, high: 322.90, low: 318.50, close: 321.10, volume: 35500000 },
  { x: new Date('2012-04-08'), open: 321.50, high: 325.20, low: 320.80, close: 324.70, volume: 41200000 },
  { x: new Date('2012-04-09'), open: 325.00, high: 326.80, low: 322.40, close: 323.90, volume: 39800000 },
  { x: new Date('2012-04-10'), open: 324.20, high: 327.00, low: 323.10, close: 326.10, volume: 42100000 },
  { x: new Date('2012-04-11'), open: 326.30, high: 329.20, low: 325.50, close: 328.70, volume: 44500000 },
  { x: new Date('2012-04-12'), open: 328.90, high: 330.50, low: 326.70, close: 327.80, volume: 36700000 },
  { x: new Date('2012-04-13'), open: 327.60, high: 329.00, low: 324.90, close: 326.20, volume: 35200000 },
  { x: new Date('2012-04-14'), open: 326.40, high: 328.70, low: 325.20, close: 327.90, volume: 33900000 },
  { x: new Date('2012-04-15'), open: 328.00, high: 331.10, low: 327.30, close: 330.50, volume: 41000000 },
  { x: new Date('2012-04-16'), open: 330.80, high: 333.20, low: 329.60, close: 332.90, volume: 43800000 },
  { x: new Date('2012-04-17'), open: 333.10, high: 335.50, low: 331.80, close: 334.20, volume: 46200000 },
  { x: new Date('2012-04-18'), open: 334.40, high: 336.00, low: 332.20, close: 333.00, volume: 38900000 },
  { x: new Date('2012-04-19'), open: 333.20, high: 334.80, low: 330.90, close: 331.50, volume: 36000000 },
  { x: new Date('2012-04-20'), open: 331.70, high: 333.90, low: 329.50, close: 330.20, volume: 34800000 },
  { x: new Date('2012-04-21'), open: 330.40, high: 332.60, low: 328.80, close: 331.90, volume: 37000000 }
];

function App() {
  return (<StockChartComponent id='stockchart' title='Stock Chart' primaryXAxis={{
    valueType: 'DateTime',
    majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
    crosshairTooltip: { enable: true }
  }} primaryYAxis={{
    labelFormat: 'n0',
    lineStyle: { width: 0 }, rangePadding: 'None',
    majorTickLines: { width: 0 }
  }} height='350' enablePeriodSelector={false} >
    <Inject services={[DateTime, CandleSeries]} />
    <StockChartSeriesCollectionDirective>
      <StockChartSeriesDirective dataSource={data} xName="x" high="high" low="low" close="close" open="open" type='Candle'>
      </StockChartSeriesDirective>
    </StockChartSeriesCollectionDirective>
  </StockChartComponent>);
}

export default App;


{% endraw %}