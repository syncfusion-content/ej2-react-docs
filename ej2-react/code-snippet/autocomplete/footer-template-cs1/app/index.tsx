{% raw %}



import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    // define the array of data
    private atcObject: any;
    private sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    public onOpen = (e: any) => {
      const count = this.atcObject.getItems().length;
      // set the value to footerTemplate property
      const ele = document.getElementsByClassName('foot')[0];
      ele.innerHTML =  "Total list item: " + count;
    };


   public render() {
        return (
              // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" ref={(autocomplete) => { this.atcObject = autocomplete }} footerTemplate={this.footerTemplate} dataSource={this.sportsData} placeholder="Find a game" open={ this.onOpen =this.onOpen.bind(this)}/>
        );
    }

    // set the footer template
    private footerTemplate(): JSX.Element {
      return (
             <span className='foot'/>
        );
      }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}