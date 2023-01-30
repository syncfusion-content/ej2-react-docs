{% raw %}


import { enableRipple } from '@syncfusion/ej2-base';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let btn: ButtonComponent;
    function onCreated(): void {
      (btn.element as HTMLElement).setAttribute('title','Primary Button');
    }
    return (
        <div>
            <ButtonComponent id='btn' ref={(scope) => { btn = scope as ButtonComponent; }} created={onCreated} isPrimary={true}>Button</ButtonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));



{% endraw %}