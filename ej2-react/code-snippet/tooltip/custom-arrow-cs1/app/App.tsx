import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {
  ButtonComponent,
  RadioButtonComponent,
  ChangeArgs,
} from '@syncfusion/ej2-react-buttons';

function App() {
  let tooltip: TooltipComponent;
  let bubble: TooltipComponent;

  function onChange(args: ChangeArgs): void {
    tooltip.position = args.value as any;
    tooltip.dataBind();
  }

  function onChanged(args: ChangeArgs): void {
    bubble.position = args.value as any;
    if (bubble.position == "BottomLeft") {
      bubble.offsetY = -30;
    } else {
      bubble.offsetY = 0;
    }
    bubble.dataBind();
  }
  return (
    <div id="container">
      <TooltipComponent
        cssClass="curvetips e-tooltip-css"
        content="Tooltip arrow customized"
        target="#target"
        ref={d => (tooltip = d as any)}
      >
        <TooltipComponent
          cssClass="bubbletip e-tooltip-css"
          content="Tooltip arrow customized as balloon tip"
          target="#bubbletip"
          position="TopRight"
          ref={d => (bubble = d as any)}
        >
          <TooltipComponent
            cssClass="pointertip e-tooltip-css"
            mouseTrail={true}
            target="#tooltip"
            content="Disabled tooltip pointer"
            showTipPointer={false}
          >
            <div id="customization" className="customTipContainer">
              <ButtonComponent id="target">Customized Tip Arrow</ButtonComponent>
              <div id="positions">
                <ul>
                  <li>
                    <RadioButtonComponent
                      id="element1"
                      label="TopCenter"
                      name="default"
                      checked={true}
                      value="TopCenter"
                      change={onChange as any}
                    />
                  </li>
                  <li>
                    <RadioButtonComponent
                      id="element2"
                      label="BottomLeft"
                      name="default"
                      value="BottomLeft"
                      change={onChange as any}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div id="balloon" className="customTipContainer">
              <ButtonComponent id="bubbletip">Bubble Tip Arrow</ButtonComponent>
              <div id="btn">
                <ul>
                  <li>
                    <RadioButtonComponent
                      id="radio1"
                      label="BottomLeft"
                      name="position"
                      value="BottomLeft"
                      change={onChanged as any}
                    />
                  </li>
                  <li>
                    <RadioButtonComponent
                      id="radio2"
                      label="TopRight"
                      name="position"
                      value="TopRight"
                      checked={true}
                      change={onChanged as any}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div id="disabledContainer" className="customTipContainer">
              <ButtonComponent id="tooltip">Disabled Tip Arrow</ButtonComponent>
            </div>
          </TooltipComponent>
        </TooltipComponent>
      </TooltipComponent>
    </div>
  );
}
export default App;
