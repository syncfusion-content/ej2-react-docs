import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries } from '@syncfusion/ej2-react-charts';
function App() {
  const CategoryData = [
	{ Category: 'Electronics', Share: 22.5, DataLabel: 'Electronics: 22.5%' },
	{ Category: 'Fashion', Share: 18.0, DataLabel: 'Fashion: 18.0%' },
	{ Category: 'Home & Kitchen', Share: 15.5, DataLabel: 'Home & Kitchen: 15.5%' },
	{ Category: 'Beauty & Health', Share: 10.0, DataLabel: 'Beauty & Health: 10.0%' },
	{ Category: 'Sports & Outdoors', Share: 9.5, DataLabel: 'Sports & Outdoors: 9.5%' },
	{ Category: 'Books', Share: 8.0, DataLabel: 'Books: 8.0%' },
	{ Category: 'Toys & Games', Share: 7.0, DataLabel: 'Toys & Games: 7.0%' },
	{ Category: 'Groceries', Share: 6.0, DataLabel: 'Groceries: 6.0%' },
	{ Category: 'Other', Share: 3.5, DataLabel: 'Other: 3.5%' }
  ];
  const linearGradient = {
	x1: 0.1, y1: 0,
	x2: 0.9, y2: 1,
	gradientColorStop: [
		{ color: '#4F46E5', offset: 0, opacity: 1, brighten: 0.55 },
		{ color: '#4F46E5', offset: 60, opacity: 0.98, brighten: 0.15 },
		{ color: '#4F46E5', offset: 100, opacity: 0.95, brighten: -0.25 }
	]
};
	return (
		<AccumulationChartComponent id="charts" title="Orders by Category" legendSettings={{ visible: true, position: 'Right' }} tooltip={{ enable: true }} enableSmartLabels={true}>
			<Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective dataSource={CategoryData} xName="Category" yName="Share" name="Share by Category" type="Pie" dataLabel={{ visible: true, name: 'DataLabel', position: 'Outside', connectorStyle: { length: '10px' }, font: { size: '12px' } }} border={{ color: '#FFFFFF', width: 2 }} linearGradient={linearGradient} />
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	);
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

