

import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return <Chart3DComponent id='charts' />
};
export default App;

const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);


