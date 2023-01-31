

import { enableRipple } from '@syncfusion/ej2-base';
import { FormEventArgs, FormValidator, FormValidatorModel, ValidArgs } from '@syncfusion/ej2-inputs';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

// enable ripple effect
enableRipple(true);

export default class App extends React.Component<{}, {}> {
  public componentDidMount(): void {
        // add the rules for validation
         const options: FormValidatorModel = {
            // validation begin event
            validationBegin: (args: ValidArgs) => {
              const span = document.createElement("span");
              span.innerHTML = "Validation begin <hr>";
              const log = document.getElementById("EventLog") as HTMLElement;
              log.insertBefore(span, log.firstChild);
            },
            // validation complete event
            validationComplete: (args: FormEventArgs) => {
                if (args.status === "success") {
                  const span = document.createElement("span");
                  span.innerHTML = "Validation complete success <hr>";
                  const log = document.getElementById("EventLog") as HTMLElement;
                  log.insertBefore(span, log.firstChild);
                } else {
                  const span = document.createElement("span");
                  span.innerHTML = "Validation complete failure <hr>";
                  const log = document.getElementById("EventLog") as HTMLElement;
                  log.insertBefore(span, log.firstChild);
                }
            },  
        };
        // initialize the form validator
        const formObject: FormValidator = new FormValidator('#form1', options);
        formObject.addRules('timepicker', {required: true});
        (document.getElementById('clear') as HTMLElement).addEventListener('click', () => {
            (document.getElementById("EventLog") as HTMLElement).innerHTML = "";
        });  
    }

    public render() {
        return(
            <div>
            <div id='sample'>
                <form id='form1' method="post">
                    <div className='content-wrapper'>
                        <TimePickerComponent id="timepicker" placeholder="Select a Time"/>
                    </div>
                    <label className='e-error' id='timepickerError' htmlFor='timepicker'/>
                </form>
            </div>
            <div id="list_event">
            <h4><b>Event Trace</b></h4>
            <div id="evt">
                <div className="eventarea" >
                    {/*Event log element */}
                    <span className="EventLog" id="EventLog"/>
                </div>
                <div className="evtbtn">
                    {/*clear button element */}
                    <button className='e-btn' id="clear"> Clear </button>
                </div>
            </div>
        </div>
        </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('form-element'));


