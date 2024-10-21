import * as React from "react";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class Default extends React.Component {
    textBoxObj = React.createRef();

    oncreate = () => {  
        this.textBoxObj.current.addIcon('append', 'e-icons e-input-popup-date');
    }

    render() {
        return (
            <TextBoxComponent
                id='default'
                placeholder="Enter Date"
                ref={this.textBoxObj}
                created={this.oncreate}
            />
        );
    }
}

createRoot(document.getElementById('default')).render(<Default />);
