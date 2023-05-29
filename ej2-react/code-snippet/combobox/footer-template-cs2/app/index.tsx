

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // define the array of data
    const sportsData: string[] = ["BasketBall", "Cricket", "Football", "Golf"];

    // set the value to footer template
    function footerTemplate(data: any): JSX.Element {
        return (
            <span className='foot'/>
        );
    }
    return (
    // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" footerTemplate={footerTemplate} dataSource={sportsData} placeholder="Select a game" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


