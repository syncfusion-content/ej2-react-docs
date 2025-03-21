

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
                <ChipDirective text="Andrew" leadingIconCss='andrew'></ChipDirective>
                <ChipDirective text="Janet" leadingIconCss='janet'></ChipDirective>
                <ChipDirective text="Laura" leadingIconCss='laura'></ChipDirective>
                <ChipDirective text="Margaret" leadingIconCss='margaret'></ChipDirective>
            </ChipsDirective>
        </ChipListComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));


