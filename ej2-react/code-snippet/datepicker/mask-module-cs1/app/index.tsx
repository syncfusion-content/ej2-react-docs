


import { DatePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <DatePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></DatePickerComponent>
    }
}
ReactDOM.render(<App />, document.getElementById('element'));


