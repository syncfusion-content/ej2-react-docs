

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';

function App() {
    let tooltipInstance: TooltipComponent;
    let TooltipAnimation: Object = {
        open: { effect: 'ZoomIn', duration: 500 },
        close: { effect: 'ZoomOut', duration: 500 }
    };
    function onBeforeRender(args: TooltipEventArgs): void {
        if (args.element) {
            tooltipInstance.animation = { open: { effect: 'None' } };
            args.element.style.display = 'block';
            args.element.style.transitionProperty = 'left,top';
            args.element.style.transitionDuration = '1000ms';
        }
    };
    function onAfterClose(args: TooltipEventArgs): void {
        tooltipInstance.animation = TooltipAnimation;
    };
    let c1: Object = {
    top: '18%',
    left: '5%'
    };
    let c2: Object = {
    top: '30%',
    left: '30%'
    };
    let c3: Object = {
    top: '80%',
    left: '80%'
    };
    let c4: Object = {
    top: '65%',
    left: '50%'
    };
    let c5: Object = {
    top: '75%',
    left: '15%'
    };
    let c6: Object = {
    top: '30%',
    left: '70%'
    };
    return (
        <div className='wrap'>
        <h3> Transition effect </h3>
        <TooltipComponent className='circle-container' target='.circle-tool' animation={TooltipAnimation} closeDelay={1000} ref={t => tooltipInstance = t} beforeRender={onBeforeRender.bind(this)} afterClose={onAfterClose.bind(this)}>
            <div className="circle-tool" style={c1} title="This is Turtle !!!"></div>
            <div className="circle-tool" style={c2} title="This is Snake !!!"></div>
            <div className="circle-tool" style={c3} title="This is Croc !!!"></div>
            <div className="circle-tool" style={c4} title="This is String Ray !!!"></div>
            <div className="circle-tool" style={c5} title="This is Blob Fish !!!"></div>
            <div className="circle-tool" style={c6} title="This is Mammoth !!!"></div>
        </TooltipComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('sample'));



