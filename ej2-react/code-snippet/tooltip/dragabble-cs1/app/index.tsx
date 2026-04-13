

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Draggable } from '@syncfusion/ej2-base';

function App() {
    React.useEffect(() => {
        rendereComplete();
    }, []);
    let tooltipInstance: TooltipComponent;
    let tooltipAnimation: Object = {
        open: { effect: 'None' },
        close: { effect: 'None' }
    };
    function rendereComplete() {
        let ele: HTMLElement = document.getElementById('demoSmart');
        let drag: Draggable = new Draggable(ele, {
            clone: false,
            dragArea: '#targetContainer',
            drag: (args: any) => {
                if (args.element.getAttribute('data-tooltip-id') === null) {
                    tooltipInstance.open(args.element);
                } else {
                    tooltipInstance.refresh(args.element);
                }
            },
            dragStart: (args: any) => {
                if (args.element.getAttribute('data-tooltip-id') === null) {
                    tooltipInstance.open(args.element);
                }
            },
            dragStop: (args: any) => {
                tooltipInstance.close();
            }
        });
    }
    return (<div id='targetContainer'>
        <TooltipComponent ref={t => tooltipInstance = t} target='#demoSmart' content='Drag me !!!' animation={tooltipAnimation}>
            <div id='demoSmart'>
            </div>
        </TooltipComponent>
    </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



