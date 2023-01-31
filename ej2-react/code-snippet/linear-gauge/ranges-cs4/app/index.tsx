


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent id='gauge'>
        <AxesDirective>
            <AxisDirective>
                <RangesDirective>
                    <RangeDirective start={0} end={30} statWidth={10} endWidth={10} color='#41f47f'>
                    </RangeDirective>
                    <RangeDirective start={30} end={50} statWidth={10} endWidth={10} color='#f49441'>
                    </RangeDirective>
                    <RangeDirective start={50} end={100} statWidth={10} endWidth={10} color='#cd41f4'>
                    </RangeDirective>
                </RangesDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>,document.getElementById('gauge'));



