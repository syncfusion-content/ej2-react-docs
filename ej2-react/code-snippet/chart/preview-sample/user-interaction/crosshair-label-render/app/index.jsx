import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Crosshair, LineSeries, Category } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
import ReactDOM from 'react-dom';

function App() {
    const crosshairLabelRender = (args) => {
        if (args.axisName === 'primaryYAxis' && typeof args.value === 'number') {
            if (args.value > 1000) {
                args.text = (args.value / 1000).toFixed(1) + 'K';
                args.textStyle = args.textStyle || {};
                args.textStyle.color = '#d32f2f';
                args.fill = '#ffebee';
            }
            if (args.value < 0) {
                args.cancel = true;
            }
        }
        if (args.axisOrientation === 'Horizontal' && typeof args.text === 'string') {
            if (args.text.length > 8) {
                args.text = args.text.substring(0, 8) + '...';
            }
        }
    };

    return <ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', crosshairTooltip: { enable: true } }} primaryYAxis={{ crosshairTooltip: { enable: true } }} crosshair={{ enable: true }} crosshairLabelRender={crosshairLabelRender}>
        <Inject services={[LineSeries, Crosshair, Category]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' name='Series'></SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>;
}

export default App;

ReactDOM.render(<App />, document.getElementById("charts"));
