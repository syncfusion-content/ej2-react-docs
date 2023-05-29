import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent, RadioButtonComponent, } from '@syncfusion/ej2-react-buttons';
function App() {
    let tooltip;
    let bubble;
    function onChange(args) {
        tooltip.position = args.value;
        tooltip.dataBind();
    }
    function onChanged(args) {
        bubble.position = args.value;
        if (bubble.position == "BottomLeft") {
            bubble.offsetY = -30;
        }
        else {
            bubble.offsetY = 0;
        }
        bubble.dataBind();
    }
    return (<div id="container">
      <TooltipComponent cssClass="curvetips e-tooltip-css" content="Tooltip arrow customized" target="#target" ref={d => (tooltip = d)}>
        <TooltipComponent cssClass="bubbletip e-tooltip-css" content="Tooltip arrow customized as balloon tip" target="#bubbletip" position="TopRight" ref={d => (bubble = d)}>
          <TooltipComponent cssClass="pointertip e-tooltip-css" mouseTrail={true} target="#tooltip" content="Disabled tooltip pointer" showTipPointer={false}>
            <div id="customization" className="customTipContainer">
              <ButtonComponent id="target">Customized Tip Arrow</ButtonComponent>
              <div id="positions">
                <ul>
                  <li>
                    <RadioButtonComponent id="element1" label="TopCenter" name="default" checked={true} value="TopCenter" change={onChange}/>
                  </li>
                  <li>
                    <RadioButtonComponent id="element2" label="BottomLeft" name="default" value="BottomLeft" change={onChange}/>
                  </li>
                </ul>
              </div>
            </div>
            <div id="balloon" className="customTipContainer">
              <ButtonComponent id="bubbletip">Bubble Tip Arrow</ButtonComponent>
              <div id="btn">
                <ul>
                  <li>
                    <RadioButtonComponent id="radio1" label="BottomLeft" name="position" value="BottomLeft" change={onChanged}/>
                  </li>
                  <li>
                    <RadioButtonComponent id="radio2" label="TopRight" name="position" value="TopRight" checked={true} change={onChanged}/>
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
    </div>);
}
export default App;
