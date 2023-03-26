{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

function App() {
  return(<ProgressBarComponent
                  id="lineardeterminate"
                  type="Linear"
                  height="60"
                  value={100}
                  animation={{
                    enable: true,
                    duration: 2000,
                    delay: 0
                  }}
                  tooltip={{enable: true,
                    textStyle: {
                      fontWeight: '600',
                      size: '9px',
                      color: 'red',
                      fontFamily: 'Roboto',
                      fontStyle: 'Italic'
                  }}}>
          </ProgressBarComponent>
        )
};
export default App;
ReactDOM.render(<App />, document.getElementById("container"));


{% endraw %}