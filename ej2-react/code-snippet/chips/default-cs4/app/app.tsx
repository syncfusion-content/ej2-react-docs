

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To render Chip.
function App() {
  return (
      <ChipListComponent id="chip-avatar" selection="Single">
          <ChipsDirective>
              <ChipDirective text="Small"></ChipDirective>
              <ChipDirective text="Medium"></ChipDirective>
              <ChipDirective text="Large"></ChipDirective>
              <ChipDirective text="Extra Large"></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('chip'));


