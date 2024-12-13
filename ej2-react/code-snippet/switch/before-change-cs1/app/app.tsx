import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent, BeforeChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// Enable ripple effect for Syncfusion components
enableRipple(true);

// This function is called before the Switch state changes
function beforeChange(args: BeforeChangeEventArgs) {
  // Set cancel to true to prevent the switch state change
  args.cancel = true;
}

// Render the Switch component with checked state
function App() {
  return (
    <SwitchComponent
      checked={true}
      beforeChange={beforeChange}
    />
  );
}

export default App;
ReactDom.render(<App />, document.getElementById('switch'));