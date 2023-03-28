import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
function App() {
    let data = [
        { "Vegetable": "Cabbage", "Category": "Leafy and Salad", "Id": "item1" },
        { "Vegetable": "Spinach", "Category": "Leafy and Salad", "Id": "item2" },
        { "Vegetable": "Wheat grass", "Category": "Leafy and Salad", "Id": "item3" },
        { "Vegetable": "Yarrow", "Category": "Leafy and Salad", "Id": "item4" },
        { "Vegetable": "Pumpkins", "Category": "Leafy and Salad", "Id": "item5" },
        { "Vegetable": "Chickpea", "Category": "Beans", "Id": "item6" },
        { "Vegetable": "Green bean", "Category": "Beans", "Id": "item7" },
        { "Vegetable": "Horse gram", "Category": "Beans", "Id": "item8" },
        { "Vegetable": "Garlic", "Category": "Bulb and Stem", "Id": "item9" },
        { "Vegetable": "Nopal", "Category": "Bulb and Stem", "Id": "item10" },
        { "Vegetable": "Onion", "Category": "Bulb and Stem", "Id": "item11" }
    ];
    let fields = { text: "Vegetable", groupBy: "Category", value: "Id" };
    return (<ListBoxComponent dataSource={data} fields={fields}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
