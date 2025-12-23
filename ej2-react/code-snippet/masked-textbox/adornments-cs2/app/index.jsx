import * as React from "react";
import * as ReactDOM from "react-dom";
import { useEffect } from 'react';

import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    const prependTemplate = () => {
        return (<>
            <span className="e-icons e-user"></span><span className="e-input-separator"></span>
        </>);
    };
    const appendTemplate = () => {
        return (<>
            <span className="e-input-separator"></span><span className="e-icons e-send"></span>
        </>);
    };
    return (<div className='control-pane'>
            <div className="control-section">
                <div className="content-wrapper">
                    <div className="mask-row">
                        <MaskedTextBoxComponent mask='000-000-0000' promptChar='#' cssClass='e-prepend-mask' placeholder='Enter phone number' floatLabelType='Auto' prependTemplate={prependTemplate} appendTemplate={appendTemplate}></MaskedTextBoxComponent>
                    </div>
                </div>
            </div>
        </div>);
};

ReactDOM.render(<App />,document.getElementById('sample'));