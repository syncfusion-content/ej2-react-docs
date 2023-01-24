// import the calendarcomponent
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    onCreated() {
        const proxy = this;
        const clearBtn = document.createElement('button');
        clearBtn.setAttribute('class', 'e-btn e-clear e-flat');
        clearBtn.innerHTML = 'Clear';
        const footerElement = document.querySelector('.e-footer-container');
        footerElement.insertBefore(clearBtn, footerElement.childNodes[0]);
        document.querySelector(".e-clear").addEventListener("click", (e) => {
            proxy.value = null;
        });
    }
    render() {
        return (<CalendarComponent id="calendar" created={this.onCreated}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
