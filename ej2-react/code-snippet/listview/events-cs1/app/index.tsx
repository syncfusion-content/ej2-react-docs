

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


function App() {
  //Define an array of JSON data
  let data: any[] = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" },
    { text: "Aston Martin One- 77", id: "list-07" },
    { text: "Jaguar XJ220", id: "list-08" },
    { text: "McLaren P1", id: "list-09" },
    { text: "Ferrari LaFerrari", id: "list-10" }
  ];
  const [state, SetState] = React.useState({
  eventData: [],
  });
  function btnClick() {
    SetState({
      eventData: []
    });
  }

  //Handler for actionBegin event trace
  function onActionBegin(): void {
    setTimeout(() => {
      SetState({
        eventData: [...state.eventData, "actionBegin"]
      });
    }, 0);
  }

  //Handler for select event trace
  function onSelect(args: SelectEventArgs): void {
    SetState({
      eventData: [...state.eventData, `${args.text} is selected`]
    });
  }

  //Handler for actionComplete event trace
  function onActionComplete(): void {
    setTimeout(() => {
      SetState({
        eventData: [...state.eventData, "actionComplete"]
      });
    }, 0);
  }

  //Display event log
  function appendElement(html: string): void {
    let span: HTMLElement = document.createElement("span");
    span.innerHTML = html;
    let log: any = document.getElementById("EventLog");
    log.insertBefore(span, log.firstChild);
  }

    return (
      <div id="sample">
        <div className="content-wrapper">
          <ListViewComponent
            id="listview-def"
            dataSource={data}
            width="250"
            select={onSelect.bind(this) as any}
            actionBegin={onActionBegin.bind(this) as any}
            actionComplete={onActionComplete.bind(this) as any}
          />
        </div>
        <div id="list_event">
          <h4>
            <b>Event Trace</b>
          </h4>
          <div id="evt">
            <div className="eventarea">
              {/*Event log element */}
              <span className="EventLog" id="EventLog">
                <div />
                {state.eventData.map((data: string, index: number) => (
                  <div key={index}>{data}</div>
                ))}
              </span>
            </div>
            <div className="evtbtn">
              {/*clear button element */}
              <ButtonComponent id="clear" onClick={btnClick.bind(this)}>
                Clear
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


