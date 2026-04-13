{% raw %}

import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let customTooltip: TooltipComponent = null as any;
  function handleDoubleClick(args: any): void {
    if (args.target.getAttribute("data-tooltip-id")) {
      customTooltip.close();
    } else {
      customTooltip.open(args.target);
    }
  }
  return (
    <div id="showTooltip">
      <div id="first">
        <TooltipComponent
          opensOn="Hover"
          content="Tooltip from hover"
          position="BottomCenter"
        >
          <ButtonComponent
            className="blocks"
            id="tooltiphover"
            cssClass="e-outline"
            isPrimary={true}
          >
            Hover me
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          opensOn="Click"
          content="Tooltip from click"
          position="BottomCenter"
        >
          <ButtonComponent
            className="blocks"
            id="tooltipclick"
            cssClass="e-outline"
            isPrimary={true}
          >
            Click me
          </ButtonComponent>
        </TooltipComponent>
      </div>
      <br />
      <br />
      <div id="second">
        <TooltipComponent
          content="Click close icon to close me"
          position="BottomCenter"
          isSticky={true}
        >
          <ButtonComponent
            className="blocks"
            id="tooltipclick"
            cssClass="e-outline"
            isPrimary={true}
          >
            Sticky mode
          </ButtonComponent>
        </TooltipComponent>
        <TooltipComponent
          content="Opens and closes Tooltip with delay of <i>1000 milliseconds</i>"
          position="BottomCenter"
          openDelay="1000"
          closeDelay="1000"
        >
          <ButtonComponent
            className="blocks"
            id="tooltipclick"
            cssClass="e-outline"
            isPrimary={true}
          >
            Tooltip with delay
          </ButtonComponent>
        </TooltipComponent>
      </div>
      <br />
      <br />
      <div id="third">
        <TooltipComponent
          content="Tooltip from custom mode"
          ref={tooltip => {
            customTooltip = tooltip as any;
          }}
          position="BottomCenter"
          opensOn="Custom"
        >
          <button
            className="blocks e-primary e-outline e-btn"
            id="tooltipcustom"
            onDoubleClick={handleDoubleClick.bind(this)}
          >
            Double Click on Me
          </button>
        </TooltipComponent>
        <TooltipComponent content="Tooltip from focus" position="BottomCenter">
          <div id="textbox" className="e-float-input blocks">
            <input id="focus" type="text" placeholder="Focus and blur" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
}
export default App;
{% endraw %}