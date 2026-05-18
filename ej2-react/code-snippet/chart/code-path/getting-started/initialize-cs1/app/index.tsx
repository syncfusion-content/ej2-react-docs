{% raw %}

import { ChartComponent  } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  return <ChartComponent id='charts' />
}
export default App;
// Root should point to a container div in index.html (e.g., <div id="root"></div>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);


{% endraw %}

