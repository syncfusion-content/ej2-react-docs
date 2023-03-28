

import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { MenuEventArgs, SplitButton, SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { getComponent, closest } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    let items: { text: string; }[];
    items = [
    {
        text: 'Png'
    },
    {
        text: 'Jpeg'
    },
    {
        text: 'Svg'
    }];

    function onSelect(args:MenuEventArgs ): void {
        let signature: Signature = getComponent(document.getElementById('signature'), 'signature');
        signature.save(args.item.text as SignatureFileType, 'Signature');
    }
    return (
        <div id='container'>
            <div>
                <span>Sign here</span>
                <SplitButtonComponent content="Save" iconCss='e-sign-icons e-save' items={items} select={onSelect} />
            </div>
            <div id="signature-control">
                <SignatureComponent id='signature'/>
            </div>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



