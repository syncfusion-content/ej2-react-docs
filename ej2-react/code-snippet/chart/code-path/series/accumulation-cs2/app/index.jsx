{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationAnnotation, AccumulationAnnotationsDirective, AccumulationAnnotationDirective } from '@syncfusion/ej2-react-charts';
import { labelData } from '../datasource.ts';
function App() {
    const template = chartTemplate;
    function chartTemplate() {
        return (<div className='template'>
                    <div style={{ border: '1px solid black', backgroundColor: '#f5f5f5', padding: '5px 5px 5px 5px' }}>13.5</div>
                </div>);
    }
    ;
    return <AccumulationChartComponent id='charts'>
            <Inject services={[AccumulationAnnotation]}/>
            <AccumulationAnnotationsDirective>
                <AccumulationAnnotationDirective content={template} region='Chart' coordinateUnits='Pixel' x={550} y={150}>
                </AccumulationAnnotationDirective>
            </AccumulationAnnotationsDirective>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={labelData} xName='x' yName='y'>
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}