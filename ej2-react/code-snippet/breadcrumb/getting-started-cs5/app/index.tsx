

import { enableRipple } from '@syncfusion/ej2-base';
import { BreadcrumbComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {

    return (
            <BreadcrumbComponent enableNavigation={false}> </BreadcrumbComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


