

import { Effect } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public timeOutDelay: number = 600;
  public position = { X: 'Right', Y: 'Bottom' };
  public animation: { show: { effect: 'SlideRightIn' }, hide: { effect: 'SlideLeftOut' } };
  public style = { paddingTop: '20px' };
  public dropDownShowInstance: DropDownListComponent;
  public dropDownHideInstance: DropDownListComponent;
  public AnimationDB = ['FadeIn', 'Fadeout', 'FadeZoomIn', 'FadeZoomOut', 'FlipLeftDownIn', 'FlipLeftDownOut', 'FlipLeftUpIn', 'FlipLeftUpOut', 'FlipRightDownIn', 'FlipRightDownOut', 'SlideBottomIn', 'SlideBottomOut', 'ZoomIn', 'ZoomOut'];

  public toastCreated(): void {
    this.toastShow();
  }

  public toastShow() {
    setTimeout(
      () => {
        this.toastInstance.show();
      }, this.timeOutDelay);
  }

  public btnClick(): void {
    this.toastShow()
  }

  public valueChange(): void {
    this.toastInstance.animation.show = { effect: this.dropDownShowInstance.value as Effect };
  }

  public valueChangeHide(): void {
    this.toastInstance.animation.hide = { effect: this.dropDownHideInstance.value as Effect };
  }

  public render() {
    return (
      <div>
        <ButtonComponent cssClass="e-primary" onClick={this.btnClick = this.btnClick.bind(this)}> Show Toast</ButtonComponent>
        <div className='e-row' style={this.style}>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label>Show Animation</label>
          </div>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent ref={drop => this.dropDownShowInstance = drop!} dataSource={this.AnimationDB} placeholder="Select a ProgressBar Color" change={this.valueChange = this.valueChange.bind(this)} index={0} />
          </div>
        </div>
        <div className='e-row' style={this.style}>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label>Hide Animation</label>
          </div>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent ref={drop => this.dropDownHideInstance = drop!} dataSource={this.AnimationDB} placeholder="Select a ProgressBar Color" change={this.valueChangeHide = this.valueChangeHide.bind(this)} index={0} />
          </div>
        </div>
        <ToastComponent ref={toast => this.toastInstance = toast!} title='Matt sent you a friend request' content='Hey, wanna dress up as wizards and ride our hoverboards?' position={this.position} animation={this.animation} showProgressBar='true' created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
};
export default App;



