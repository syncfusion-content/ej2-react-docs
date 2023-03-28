import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Ajax } from '@syncfusion/ej2-base';
import {
  ButtonComponent,
  RadioButtonComponent,
  ChangeArgs,
} from '@syncfusion/ej2-react-buttons';

function App() {
  let tooltip: TooltipComponent = null as any;
  function beforeRender(args: any) {
    tooltip.content = "Loading...";
    tooltip.dataBind();
    let ajax: Ajax = new Ajax("./tooltip.json", "GET", true);
    ajax.send().then(
      (result: any) => {
        result = JSON.parse(result);
        for (let i: number = 0; i < result.length; i++) {
          if (result[i].Id == args.target.id) {
            /* tslint:disable */
            tooltip.content = result[i].Name;
            /* tslint:enable */
          }
        }
        tooltip.dataBind();
      },
      (reason: any) => {
        tooltip.content = reason.message;
        tooltip.dataBind();
      }
    );
  }
  return (
    <div id="container">
      <TooltipComponent
        beforeRender={beforeRender.bind(this)}
        content="Loading..."
        target=".circletool"
        position="BottomCenter"
        showTipPointer={false}
        ref={i => (tooltip = i as any)}
      >
        <h2> Dynamic Tooltip content </h2>
        <div id="box" className="e-prevent-select">
          <div id="1" className="circletool bold-01" />
          <div id="2" className="circletool italic" />
          <div id="3" className="circletool underline-02" />
          <div id="4" className="circletool cut-02" />
          <div id="5" className="circletool copy" />
          <div id="6" className="circletool paste" />
        </div>
      </TooltipComponent>
    </div>
  );
}
export default App;