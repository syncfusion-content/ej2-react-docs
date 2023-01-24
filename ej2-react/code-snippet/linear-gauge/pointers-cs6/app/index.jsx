import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
ReactDOM.render(<LinearGaugeComponent id='gauge'>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={80}>
                    </PointerDirective>
                    <PointerDirective value={60} markerType='Circle'>
                    </PointerDirective>
                    <PointerDirective value={30} markerType='Diamond'>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>, document.getElementById('gauge'));
