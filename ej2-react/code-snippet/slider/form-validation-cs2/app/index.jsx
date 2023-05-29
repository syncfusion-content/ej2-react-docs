{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import { FormValidator } from '@syncfusion/ej2-inputs';
function App() {
    React.useEffect(() => {
        componentDidMount();
    }, []);
    let ticks = { placement: "Before", largeStep: 20, smallStep: 5, showSmallTicks: true };
    let value = [30, 70];
    // sets required property in the FormValidator rules collection
    let minOptions = {
        rules: {
            "min-slider": {
                validateHidden: true,
                min: [40, "You must select value greater than or equal to 40"]
            }
        }
    };
    // sets required property in the FormValidator rules collection
    let maxOptions = {
        rules: {
            "max-slider": {
                validateHidden: true,
                max: [40, "You must select value less than or equal to 40"]
            }
        }
    };
    // sets required property in the FormValidator rules collection
    let valOptions = {
        rules: {
            "val-slider": {
                validateHidden: true,
                regex: [/40/, "You must select value equal to 40"]
            }
        }
    };
    // sets required property in the FormValidator rules collection
    let rangeOptions = {
        rules: {
            "range-slider": {
                validateHidden: true,
                range: [40, 80, "You must select values between 40 and 80"]
            }
        }
    };
    // sets required property in the FormValidator rules collection
    let customOptions = {
        rules: {
            "custom-slider": {
                validateHidden: true,
                range: [validateRange.bind(this), "You must select values between 40 and 80"]
            }
        }
    };
    // Initialize Form validation
    let formMinObj = null;
    let formMaxObj = null;
    let formValObj = null;
    let formRangeObj = null;
    let formCustomObj = null;
    function componentDidMount() {
        formMinObj = new FormValidator("#formMinId", minOptions);
        formMaxObj = new FormValidator("#formMaxId", maxOptions);
        formValObj = new FormValidator("#formValId", valOptions);
        formRangeObj = new FormValidator("#formRangeId", rangeOptions);
        formCustomObj = new FormValidator("#formCustomId", customOptions);
    }
    function onMinChanged(args) {
        // validate the slider value in the form
        formMinObj.validate();
    }
    function onMaxChanged(args) {
        // validate the slider value in the form
        formMaxObj.validate();
    }
    function onValChanged(args) {
        // validate the slider value in the form
        formValObj.validate();
    }
    function onRangeChanged(args) {
        // validate the slider value in the form
        formRangeObj.validate();
    }
    function onCustomChanged(args) {
        // validate the slider value in the form
        formCustomObj.validate();
    }
    let SliderCustomObj = null;
    function validateRange(args) {
        return (SliderCustomObj.value[0] >= 40 &&
            SliderCustomObj.value[1] <= 80);
    }
    return (<div id="container">
      <div className="col-lg-12 control-section">
        <div className="content-wrapper">
          <div className="form-title">
            <span>Min</span>
          </div>
          <form id="formMinId" className="form-horizontal">
            <div className="form-group">
              <div className="e-float-input">
                <SliderComponent id="min-slider" name="min-slider" type="MinRange" value={30} ticks={ticks} changed={onMinChanged.bind(this)}/>
              </div>
            </div>
          </form>
          <div className="form-title">
            <span>Max</span>
          </div>
          <form id="formMaxId" className="form-horizontal">
            <div className="form-group">
              <div className="e-float-input">
                <SliderComponent id="max-slider" name="max-slider" type="MinRange" value={30} ticks={ticks} changed={onMaxChanged.bind(this)}/>
              </div>
            </div>
          </form>
          <div className="form-title">
            <span>Value</span>
          </div>
          <form id="formValId" className="form-horizontal">
            <div className="form-group">
              <div className="e-float-input">
                <SliderComponent id="val-slider" name="val-slider" type="MinRange" value={30} ticks={ticks} changed={onValChanged.bind(this)}/>
              </div>
            </div>
          </form>
          <div className="form-title">
            <span>Range</span>
          </div>
          <form id="formRangeId" className="form-horizontal">
            <div className="form-group">
              <div className="e-float-input">
                <SliderComponent id="range-slider" name="range-slider" type="MinRange" value={30} ticks={ticks} changed={onRangeChanged.bind(this)}/>
              </div>
            </div>
          </form>
          <div className="form-title">
            <span>Custom</span>
          </div>
          <form id="formCustomId" className="form-horizontal">
            <div className="form-group">
              <div className="e-float-input">
                <SliderComponent id="custom-slider" name="custom-slider" type="Range" value={value} ticks={ticks} changed={onCustomChanged.bind(this)} ref={slider => {
            SliderCustomObj = slider;
        }}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}