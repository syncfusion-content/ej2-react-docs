


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective , PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent id='gauge' container={ { width:30, type:'Thermometer' } }>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={50} width={15} type='Bar'>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>,document.getElementById('gauge'));



