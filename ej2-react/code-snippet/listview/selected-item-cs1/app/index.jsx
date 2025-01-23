{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
  let listobj = null;
  // define the array of Json
  let data = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02", isChecked: true },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04", isChecked: true },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" },
    { text: "Aston Martin One- 77", id: "list-07", isChecked: true },
    { text: "Jaguar XJ220", id: "list-08" }
  ];
  const [state, SetState] = React.useState({
    selectedItemsValue: []
  });
  function getSelectedItems() {
    if (listobj) {
      SetState({
        selectedItemsValue: listobj.getSelectedItems().data
      });
    }
  }
  return (<div>
    <ListViewComponent id="list" dataSource={data} showCheckBox={true} ref={scope => {
      listobj = scope;
    }} />
    <ButtonComponent id="btn" onClick={getSelectedItems.bind(this)}>
      Get Selected Items
    </ButtonComponent>
    <div>
      <table>
        <tbody>
          <tr>
            <th>Text</th>
            <th>Id</th>
          </tr>

          {state.selectedItemsValue.map((item, index) => {
            return (<tr key={index}>
              <td>{item.text}</td>
              <td>{item.id}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}