


import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the array of data
    private sportsData: string[] = ["BasketBall", "Cricket", "Football", "Golf"];


    public render() {
        return (
              // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" footerTemplate={this.footerTemplate = this.footerTemplate.bind(this)} dataSource={this.sportsData} placeholder="Select a game" />
        );
    }

    // set the value to footer template
    private footerTemplate(data: any): JSX.Element {
      return (
       <span className='foot'/>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


