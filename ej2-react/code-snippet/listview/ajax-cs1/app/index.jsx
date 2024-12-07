import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { Ajax } from '@syncfusion/ej2-base';
import './index.css';
function App() {
    let template;
    let ajax;
    ajax = new Ajax("./template.html", "GET", false);
    ajax.onSuccess = (e) => {
        template = e;
    };
    ajax.send();
    //Define an array of JSON data
    let data = [
        { name: "Network & Internet", id: "0", description: "Wi-Fi, mobile, data usage, hotspot" },
        { name: "Connected devices", id: "1", description: "Bluetooth, cast, NFC" },
        { name: "Battery", id: "2", description: "18% -4h 12m left" },
        { name: "Display", id: "3", description: "Wallpaper, sleep, font size" },
        { name: "Sound", id: "4", description: "Volume, vibration, Do Not Disturb" },
        { name: "Storage", id: "5", description: "52% used - 15.48 GB free" }
    ];
    return (<ListViewComponent id="list" dataSource={data} headerTitle="Settings" showHeader={true} template={template} cssClass="e-list-template"/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
