

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To render Chip.
function App() {
  return (
      <ChipListComponent id="chip-avatar" enableDelete={true} selection="Single">
          <ChipsDirective>
              <ChipDirective text="Andrew"></ChipDirective>
              <ChipDirective text="Janet"></ChipDirective>
              <ChipDirective text="Laura"></ChipDirective>
              <ChipDirective text="Margaret"></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('chip'));


