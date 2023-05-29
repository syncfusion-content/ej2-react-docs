import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { getComponent } from '@syncfusion/ej2-base';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let items;
    items = [
        {
            text: 'Png'
        },
        {
            text: 'Jpeg'
        },
        {
            text: 'Svg'
        }
    ];
    function onSelect(args) {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        signature.save(args.item.text, 'Signature');
    }
    return (<div id='container'>
            <div>
                <span>Sign here</span>
                <SplitButtonComponent content="Save" iconCss='e-sign-icons e-save' items={items} select={onSelect}/>
            </div>
            <div id="signature-control">
                <SignatureComponent id='signature' backgroundColor="rgb(103 58 183)" saveWithBackground={true}/>
            </div>
        </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
