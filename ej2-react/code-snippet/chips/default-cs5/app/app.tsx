

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To render Chip.
function App() {
    return (
        <ChipListComponent id="chip-avatar" selection="Multiple">
            <ChipsDirective>
                <ChipDirective text="Chai"></ChipDirective>
                <ChipDirective text="Chung"></ChipDirective>
                <ChipDirective text="Aniseed Syrup"></ChipDirective>
                <ChipDirective text="Ikura"></ChipDirective>
            </ChipsDirective>
        </ChipListComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));


