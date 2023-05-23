import { ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";
const ReactApp = () => {
    return (<ToolbarComponent>
      <div>
        <div><button className='e-btn e-tbar-btn'>Cut</button> </div>
        <div><button className='e-btn e-tbar-btn'>Copy</button> </div>
        <div><button className='e-btn e-tbar-btn'>Paste</button> </div>
        <div className='e-separator'> </div>
        <div><button className='e-btn e-tbar-btn'>Bold</button> </div>
        <div><button className='e-btn e-tbar-btn'>Italic</button> </div>
      </div>
    </ToolbarComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
