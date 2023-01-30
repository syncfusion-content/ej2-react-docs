

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
              <ChipDirective text="Primary" cssClass="e-primary"></ChipDirective>
              <ChipDirective text="Success" cssClass="e-success"></ChipDirective>
              <ChipDirective text="Info" cssClass="e-info"></ChipDirective>
              <ChipDirective text="Warning" cssClass="e-warning"></ChipDirective>
              <ChipDirective text="Danger" cssClass="e-danger"></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('chip'));


