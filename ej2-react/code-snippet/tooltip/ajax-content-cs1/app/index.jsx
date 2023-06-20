import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Fetch } from '@syncfusion/ej2-base';
function App() {
    let tooltipInstance;
    function onBeforeRender(args) {
        tooltipInstance.content = 'Loading...';
        tooltipInstance.dataBind();
        let fetchApi = new Fetch('./tooltipdata.json', 'GET');
        fetchApi.send().then((result) => {
            for (let i = 0; i < result.length; i++) {
                if (result[i].Id === args.target.getAttribute('data-content')) {
                    tooltipInstance.content = "<div class='contentWrap'>" + result[i].Sports + "</div>";
                }
            }
            tooltipInstance.dataBind();
        }, (reason) => {
            tooltipInstance.content = reason.message;
            tooltipInstance.dataBind();
        });
    }
    return (<div id="container">
      <h4>National Sports</h4>
      <TooltipComponent id="targetContainer" ref={t => tooltipInstance = t} className="e-prevent-select" content="Loading..." target=".target" position="RightCenter" beforeRender={onBeforeRender.bind(this)}>
        <div id="countrylist">
          <ul>
            <li className="target" title="1"><span>Australia</span></li>
            <li className="target" title="2"><span>Bhutan</span></li>
            <li className="target" title="3"><span>China</span></li>
            <li className="target" title="4"><span>Cuba</span></li>
            <li className="target" title="5"><span>India</span></li>
            <li className="target" title="6"><span>Switzerland</span></li>
            <li className="target" title="7"><span>United States</span></li>
          </ul>
        </div>
      </TooltipComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
