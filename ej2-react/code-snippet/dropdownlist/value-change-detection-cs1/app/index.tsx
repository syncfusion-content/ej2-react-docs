{% raw %}



import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  private dropDownListObject:any;
    public onclick(){
        this.dropDownListObject.value = 'Football';
        }
    public onChange(args: any){
    const element: HTMLElement = document.createElement('p');
        if (args.isInteracted) {
            element.innerText = 'Changes happened by Interaction';
        } else {
            element.innerText = 'Changes happened by programmatic';
        }
        (document.getElementById('event') as any).append(element);
    }
  public render() {
    return (
        // specifies the tag for render the DropDownList component
      <div>
      <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObject = scope; }} dataSource={this.sportsData}  placeholder="Select a game" change={this.onChange} />
      <button id='btn' className="e-control e-btn" onClick={this.onclick = this.onclick.bind(this)}>
      Set value dynamically</button>
      <div id='event'/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}