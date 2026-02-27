
import * as React from "react";
import { createRoot } from "react-dom/client";
import { CircularGaugeComponent } from '@syncfusion/ej2-react-circulargauge';

function App() {
  return <CircularGaugeComponent />;
}

const root = createRoot(document.getElementById('container')!);
root.render(<App />);
