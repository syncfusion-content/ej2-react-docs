import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
// To render Chip.
function App() {
    function chipClick(e) {
        alert('you have clicked ' + e.target.textContent);
    }
    return (<ChipListComponent id="chip-avatar" onClick={chipClick.bind(this)}>
      <ChipsDirective>
        <ChipDirective text="Send a text"/>
        <ChipDirective text="Set a remainder"/>
        <ChipDirective text="Read my emails"/>
        <ChipDirective text="Set alarm"/>
      </ChipsDirective>
    </ChipListComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));
