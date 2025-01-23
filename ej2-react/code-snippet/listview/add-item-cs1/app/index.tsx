{% raw %}



import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


function App() {
  let listviewInstance: ListViewComponent = null as any;

  function listTemplate(data: any): JSX.Element {
    return (
      <div className="text-content">
        {data.text}
        <span className="delete-icon" onClick={deleteItem.bind(this)} />
      </div>
    );
  }
  // define the array of Json
  let dataSource: any = [
    { text: "Hennessey Venom", id: "1", icon: "delete-icon" },
    { text: "Bugatti Chiron", id: "2", icon: "delete-icon" },
    { text: "Bugatti Veyron Super Sport", id: "3", icon: "delete-icon" },
    { text: "Aston Martin One- 77", id: "4", icon: "delete-icon" },
    { text: "Jaguar XJ220", id: "list-5", icon: "delete-icon" },
    { text: "McLaren P1", id: "6", icon: "delete-icon" }
  ];

  let fields: Object = { text: "text", iconCss: "icon" };

  function addItem() {
    let data = {
      text: "Koenigsegg - " + (Math.random() * 1000).toFixed(0),
      id: (Math.random() * 1000).toFixed(0).toString(),
      icon: "delete-icon"
    };
    listviewInstance.addItem([data]);
  }

  function deleteItem(args: any) {
    let liItem = args.target.closest('li');
    listviewInstance.removeItem(liItem);
  }

  return (
    <div>
      <ListViewComponent
        id="sample-list"
        dataSource={dataSource}
        fields={fields}
        template={listTemplate.bind(this) as any}
        ref={listview => {
          listviewInstance = listview as any;
        }}
      />
      <ButtonComponent id="btn" onClick={addItem.bind(this)}>
        Add Item
      </ButtonComponent>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}
