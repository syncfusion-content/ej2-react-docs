import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';

function Default() {
    const textBoxObj = useRef(null);

    function oncreate() {
        textBoxObj.current.addIcon('append', 'e-icons e-input-popup-date');
    }

    return (
        <TextBoxComponent
            id='textbox'
            placeholder="Enter Date"
            ref={textBoxObj}
            created={oncreate}
        />
    );
};

ReactDOM.render(<Default />, document.getElementById('default'));
