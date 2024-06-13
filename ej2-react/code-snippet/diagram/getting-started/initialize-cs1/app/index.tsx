

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
  return (
    <DiagramComponent id="container" width={"100%"} height={"350px"} />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);


