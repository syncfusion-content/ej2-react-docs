

// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {

    public onCreated(): void {
        const proxy: any = this;
        const clearBtn = document.createElement('button');
        clearBtn.setAttribute('class', 'e-btn e-clear e-flat');
        clearBtn.innerHTML = 'Clear';
        const footerElement: HTMLElement = document.querySelector('.e-footer-container') as HTMLElement;
        footerElement.insertBefore(clearBtn,footerElement.childNodes[0]);
        (document.querySelector(".e-clear") as HTMLElement).addEventListener("click",(e) => {
            proxy.value = null;
        });
    }
    public render() {
        return (
            <CalendarComponent id="calendar" created={this.onCreated} />
        );
     }
 }

ReactDOM.render(<App />, document.getElementById('element'));



