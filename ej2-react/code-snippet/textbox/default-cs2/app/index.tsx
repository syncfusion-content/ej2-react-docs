import * as React from "react";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';

function Default()  {
    const textBoxObj = useRef(null);

    function oncreate() {  
        (textBoxObj.current as any).addIcon('append', 'e-icons e-input-popup-date');
    }
    return (
        <TextBoxComponent
            id='default'
            placeholder="Enter Date"
            ref={textBoxObj}
            created={oncreate}
        />
    );
};   

createRoot(document.getElementById('default')).render(<Default />);