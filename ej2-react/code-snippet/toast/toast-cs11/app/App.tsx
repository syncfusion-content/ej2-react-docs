

import { ButtonComponent, ChangeEventArgs, CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{}, {}> {
  public toastInstance: ToastComponent;
  public checkboxObj: CheckBoxComponent;

  constructor(props: any) {
    super(props);
    this.state = {
      content: 'Hey, wanna dress up as wizards and ride our hoverboards?',
      position: { X: 'Center', Y: "Bottom" },
      title: 'Matt sent you a friend request',
      width: 300
    }
  }

  public toastCreated(): void {
    this.toastShow(600);
  }

  public toastShow(timeOutDelay: number) {
    setTimeout(
      () => {
        this.toastInstance.show();
      }, timeOutDelay);
  }

  public checkboxChange(e: any): void {
    if (e.event.target.checked) {
      this.setState({ position: { Y: "Top" } });
      this.toastInstance.hide('All');
      this.toastShow(700);
    }
  }

  public checkboxChange1(e: any): void {
    if (e.event.target.checked) {
      this.setState({ position: { Y: "Bottom" } });
      this.toastInstance.hide('All');
      this.toastShow(700);
    }
  }

  public onChange(e: ChangeEventArgs): void {
    if (e.checked) {
      this.toastInstance.hide('All');
      this.setState({
        content: "<div class='e-custom'>Take a look at our next generation <b>Javascript</b> <a href='https://ej2.syncfusion.com/home/index.html' target='_blank'>LEARN MORE</a></div>",
        width: '100%',
        title: ''
      });
      this.toastShow(500);
    } else {
      this.toastInstance.hide('All');
      this.setState({
        content: 'Hey, wanna dress up as wizards and ride our hoverboards?',
        width: 300,
        title: 'Matt sent you a friend request'
      });
      this.toastShow(500);
    }
  }

  public render() {
    return (
      <div id="container">
        <div id="toast_full_width" className='row'>
          <table>
            <tr>
              <td>
                <div>
                  <RadioButtonComponent checked={true} label='Top' name="toast" change={this.checkboxChange = this.checkboxChange.bind(this)} />
                </div>
              </td>
              <td>
                <div>
                  <RadioButtonComponent checked={true} label='Bottom' name="toast" change={this.checkboxChange1 = this.checkboxChange1.bind(this)} />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <CheckBoxComponent label='100% Width' ref={scope => this.checkboxObj = scope!} change={this.onChange = this.onChange.bind(this)} />
                </div>
              </td>
            </tr>
          </table>
        </div>
        <ButtonComponent cssClass="e-primary" onClick={this.toastShow = this.toastShow.bind(this, 500)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => this.toastInstance = toast!} width={this.state.width} title={this.state.title} content={this.state.content} position={this.state.position} created={this.toastCreated = this.toastCreated.bind(this)} />
      </div>
    );
  }
}
export default App;


