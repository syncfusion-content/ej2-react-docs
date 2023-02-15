import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
function App() {
    let data = [
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
    let listboxobj;
    function created() {
        listboxobj.selectItems(['Bugatti Chiron']);
    }
    return (<ListBoxComponent dataSource={data} ref={(scope) => listboxobj = scope} created={created}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
