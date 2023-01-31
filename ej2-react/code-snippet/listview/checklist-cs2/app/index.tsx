


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

function App() {
  //define the array of JSON
  let settings: { [key: string]: Object }[] = [
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
  let fields = { text: "text", id: "id" };
  return (
    // specifies the tag to render the ListView component
    <ListViewComponent
      id="list"
      dataSource={settings}
      fields={fields}
      showCheckBox={true}
      checkBoxPosition="Right"
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


