import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
function App() {
    let toastInstance;
    let timeOutDelay = 600;
    let position = { X: 'Right', Y: 'Bottom' };
    let animation;
    let style = { paddingTop: '20px' };
    let dropDownShowInstance;
    let dropDownHideInstance;
    let AnimationDB = ['FadeIn', 'Fadeout', 'FadeZoomIn', 'FadeZoomOut', 'FlipLeftDownIn', 'FlipLeftDownOut', 'FlipLeftUpIn', 'FlipLeftUpOut', 'FlipRightDownIn', 'FlipRightDownOut', 'SlideBottomIn', 'SlideBottomOut', 'ZoomIn', 'ZoomOut'];
    function toastCreated() {
        toastShow();
    }
    function toastShow() {
        setTimeout(() => {
            toastInstance.show();
        }, timeOutDelay);
    }
    function btnClick() {
        toastShow();
    }
    function valueChange() {
        toastInstance.animation.show = { effect: dropDownHideInstance.value };
    }
    function valueChangeHide() {
        toastInstance.animation.hide = { effect: dropDownHideInstance.value };
    }
    return (<div>
        <ButtonComponent cssClass="e-primary" onClick={btnClick.bind(this)}> Show Toast</ButtonComponent>
        <div className='e-row' style={style}>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label>Show Animation</label>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent ref={drop => dropDownShowInstance = drop} dataSource={AnimationDB} placeholder="Select a ProgressBar Color" change={valueChange.bind(this)} index={0}/>
        </div>
        </div>
        <div className='e-row' style={style}>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label>Hide Animation</label>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent ref={drop => dropDownHideInstance = drop} dataSource={AnimationDB} placeholder="Select a ProgressBar Color" change={valueChangeHide.bind(this)} index={0}/>
        </div>
        </div>
        <ToastComponent ref={toast => toastInstance = toast} title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' position={position} showProgressBar={true} created={toastCreated.bind(this)} animation={animation}/>
    </div>);
}
;
export default App;
