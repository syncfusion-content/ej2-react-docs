import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';
// To render Chip.
function App() {
    return (<ChipListComponent text="Janet Leverling"></ChipListComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));
