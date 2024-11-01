


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';

function App() {
  let listbox: ListBoxComponent;
  let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];

  const handleFilterChange = (event: any) => {
    if (listbox) {
      listbox.filter(data, new Query().where('text', 'contains', event.target.value, true));
    }
  };

  return (
    <div className="e-section-control">
      <label>Enter Text: </label>
      <input type="text" id="filterTextBox" onInput={handleFilterChange} placeholder="Enter text to filter"/>
      <h4>Select your favorite car:</h4>
      <ListBoxComponent
        id="listbox"
        dataSource={data}
        ref={(listbox) => { listbox = listbox }}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



