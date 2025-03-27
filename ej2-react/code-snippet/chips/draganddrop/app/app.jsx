import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To render Chip.
function App() {
    return (
        <div id="chip-draganddrop-wrapper">
            <div class="chips-headers">To-do lists</div>
            <div class="sample-padding">
                <ChipListComponent id="choice-container" allowDragAndDrop={true}>
                    <ChipsDirective>
                        <ChipDirective text = 'Report' cssClass = 'e-info'></ChipDirective>
                        <ChipDirective text = 'Meeting' cssClass = 'e-warning'></ChipDirective>
                        <ChipDirective text = 'Review' cssClass = 'e-warning'></ChipDirective>
                        <ChipDirective text = 'Budget' cssClass = 'e-danger'></ChipDirective>
                        <ChipDirective text = 'Design' cssClass = 'e-primary'></ChipDirective>
                        <ChipDirective text = 'Presentation' cssClass = 'e-success'></ChipDirective>
                        <ChipDirective text = 'Email' cssClass = 'e-success'></ChipDirective>
                        <ChipDirective text = 'Research' cssClass = 'e-success'></ChipDirective>
                    </ChipsDirective>
                </ChipListComponent>
                <ChipListComponent id="selection-container" allowDragAndDrop={true}></ChipListComponent>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));
