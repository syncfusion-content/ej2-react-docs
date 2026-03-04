{% raw %}

importÂ *Â asÂ ReactÂ fromÂ 'react';
import * as ReactDOM from 'react-dom';
importÂ { HeatMapComponent }Â fromÂ '@syncfusion/ej2-react-heatmap';

export function App()Â {
  returnÂ ( <HeatMapComponent ></HeatMapComponent> );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
