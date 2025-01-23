

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";

function App() {
  let list: any[] = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" }
  ];
  let fields: Object = { text: "text", id: "id" };
  const [state, SetState] = React.useState({ listData: list });
  function onKeyUp(e: any) {
    let value = e.target.value;
    let data = new DataManager(state.listData).executeLocal(
      new Query().where("text", "startswith", value, true)
    );
    if (!value) {
      SetState({
        listData: list
      });
    } else {
      SetState({
        listData: data
      });
    }
  }

  return (
    <div id="sample">
      <input
        className="e-input"
        type="text"
        id="textbox"
        placeholder="Filter"
        onKeyUp={onKeyUp.bind(this)}
        title="Type in a name"
      />
      <ListViewComponent
        id="list"
        dataSource={state.listData}
        fields={fields}
        sortOrder="Ascending"
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));


