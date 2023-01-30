

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To render Chip.
function App() {
  return (
  <div>
      <ChipListComponent id="chip-avatar" cssClass="e-outline">
          <ChipsDirective>
              <ChipDirective text="Chai"></ChipDirective>
              <ChipDirective text="Chang"></ChipDirective>
              <ChipDirective text="Aniseed Syrup"></ChipDirective>
              <ChipDirective text="Ikura"></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>
      <ChipListComponent id="chip-avatar" cssClass="e-outline" enableDelete={true}>
          <ChipsDirective>
              <ChipDirective text="Andrew"></ChipDirective>
              <ChipDirective text="Janet"></ChipDirective>
              <ChipDirective text="Laura"></ChipDirective>
              <ChipDirective text="Margaret"></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>
  </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('chip'));


