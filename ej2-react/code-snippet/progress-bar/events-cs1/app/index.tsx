{% raw %}


import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import {IProgressValueEventArgs} from '@syncfusion/ej2-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  let progressInstance: ProgressBarComponent;
  function changeValue() {
    progressInstance.value = 80;
  }

  return(<div> <button onClick={changeValue}>Change value</button><br></br>
            <ProgressBarComponent id="linear"
                        ref={linear1 => progressInstance = linear1}
                        type='Linear'
                        trackColor='gray'
                        progressColor='blue'
                        value={100}
                        animation={{
                            enable: false,
                            duration: 2000,
                            delay: 0
                        }}
                        valueChanged={(args: IProgressValueEventArgs) => {
                          args.progressValue = 90;
                        }}>
             </ProgressBarComponent>
         </div>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("container"));


{% endraw %}