import * as React from "react";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class Default extends React.Component {
    public textBoxObj = React.createRef();

    public oncreate() {  
        (this.textBoxObj.current as any).addIcon('append', 'e-icons e-input-popup-date');
    }

    public render() {
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
