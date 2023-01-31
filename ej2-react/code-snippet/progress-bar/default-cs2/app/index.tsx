

import { ProgressBarComponent, ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, Inject,
    ProgressAnnotation } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  let content: string = '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%</span></div>';

  return (<ProgressBarComponent id="circular" type='Circular' innerRadius="190%" height='160px' trackThickness={80} cornerRadius={"Round"} trackColor={"#FFD939"}>
          <Inject services={[ProgressAnnotation]} />
          <ProgressBarAnnotationsDirective>
              <ProgressBarAnnotationDirective content={content}>
              </ProgressBarAnnotationDirective>
          </ProgressBarAnnotationsDirective>
          </ProgressBarComponent>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("container"));


