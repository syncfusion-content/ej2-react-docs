


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];
  let listboxobj:ListBoxComponent;
  function btnClick(): void {
    if(!listboxobj.getDataByValue("Bugatti Veyron Super Sport")){
        listboxobj.addItems([{ text: 'Bugatti Veyron Super Sport', id: 'list-03' }, { text: 'SSC Ultimate Aero', id: 'list-04' }]);
    }
  }
  return (
    <div>
    <ListBoxComponent dataSource={data} ref={(scope) => listboxobj = scope as ListBoxComponent} />
    <ButtonComponent onClick={btnClick}>Add Items</ButtonComponent>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



