import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
// To render Chip.
function App() {
    return (<ChipListComponent id="chip-avatar">
          <ChipsDirective>
              <ChipDirective text="Andrew" avatarText='A'></ChipDirective>
              <ChipDirective text="Janet" avatarText='J'></ChipDirective>
              <ChipDirective text="Laura" avatarText='L'></ChipDirective>
              <ChipDirective text="Margaret" avatarText='M'></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));
