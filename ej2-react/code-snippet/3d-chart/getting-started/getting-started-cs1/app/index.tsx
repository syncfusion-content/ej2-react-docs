

import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { createRoot } from 'react-dom/client';

function App() {
  return <Chart3DComponent id='charts' />
};
export default App;
createRoot(document.getElementById('charts')).render(<App />);



