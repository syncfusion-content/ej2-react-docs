{% raw %}



// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    public onFocus(args: FocusEventArgs){
        this.dateObj.show();
    }

    public render() {
        return (
            // Specifies the tag for render the DatePicker component
            <DatePickerComponent focus={this.onFocus.bind(this)} placeholder="Choose a date" ref = {scope => {this.dateObj = scope }}/>
        );
     }
 }

ReactDOM.render(<App />, document.getElementById('element'));



{% endraw %}