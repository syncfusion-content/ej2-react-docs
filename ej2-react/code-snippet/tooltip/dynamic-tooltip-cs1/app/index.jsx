import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Ajax } from '@syncfusion/ej2-base';
function App() {
  let tooltip = null;
  function beforeRender(args) {
    tooltip.content = "Loading...";
    tooltip.dataBind();
    let ajax = new Ajax("./tooltip.json", "GET", true);
    ajax.send().then((result) => {
      result = JSON.parse(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i].Id == args.target.id) {
          /* tslint:disable */
          tooltip.content = result[i].Name;
          /* tslint:enable */
        }
      }
      tooltip.dataBind();
    }, (reason) => {
      tooltip.content = reason.message;
      tooltip.dataBind();
    });
  }
  return (<div id="container">
    <TooltipComponent beforeRender={beforeRender.bind(this)} content="Loading..." target=".circletool" position="BottomCenter" showTipPointer={false} ref={i => (tooltip = i)}>
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
  </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
