


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the array of data
    private sportsData: string[] = ["BasketBall", "Cricket", "Football", "Golf"];

    // set the value to footer template
    public footerTemplate(): JSX.Element {
      return (
       <span className='foot'/>
        );
    }
    public render() {
        return (
              // specifies the tag for render the MultiSelect component
            <MultiSelectComponent id="mtselement" footerTemplate={this.footerTemplate} dataSource={this.sportsData} placeholder="Select a game" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


