

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To render Chip.
function App() {
    return (
        <ChipListComponent id="chip-avatar">
            <ChipsDirective>
                <ChipDirective text="Andrew" trailingIconCss='e-dlt-btn'></ChipDirective>
                <ChipDirective text="Janet" trailingIconCss='e-dlt-btn'></ChipDirective>
                <ChipDirective text="Laura" trailingIconCss='e-dlt-btn'></ChipDirective>
                <ChipDirective text="Margaret" trailingIconCss='e-dlt-btn'></ChipDirective>
            </ChipsDirective>
        </ChipListComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));


