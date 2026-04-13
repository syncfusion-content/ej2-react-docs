import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Month, Inject, Resize, DragAndDrop, ToolbarItemsDirective, ToolbarItemDirective } from '@syncfusion/ej2-react-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { scheduleData } from './datasource';

const App = () => {
    const schedule = useRef(null);
    const eventSettings = { dataSource: scheduleData, query: new Query().where('OwnerId', 'equal', 1) };
    const ownerData = [
        { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
        { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
        { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
    ];
    const fields = { text: 'OwnerText', value: 'OwnerId' };

    const template = () => {
        return (<DropDownListComponent id='ddlelement' dataSource={ownerData} fields={fields} value={1} change={OnChange} />);
    };

    const OnChange = (args) => {
        let predicate;
        predicate = new Predicate('OwnerId', 'equal', parseInt(args.value, 10));
        schedule.current.eventSettings.query = new Query().where(predicate);
    };

    return (<ScheduleComponent cssClass='schedule-header-bar' width='100%' height='650px' id='schedule' ref={schedule} selectedDate={new Date(2024, 11, 15)} eventSettings={eventSettings}>
        <ResourcesDirective>
            <ResourceDirective field='OwnerId' title='Owner' name='Owners' dataSource={ownerData} textField='OwnerText' idField='OwnerId' groupIDField='GroupId' colorField='Color'>
            </ResourceDirective>
        </ResourcesDirective>
        <ViewsDirective>
            <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Month, Resize, DragAndDrop]} />
        <ToolbarItemsDirective>
            <ToolbarItemDirective name='Previous' align='Left'></ToolbarItemDirective>
            <ToolbarItemDirective name='Next' align='Left'></ToolbarItemDirective>
            <ToolbarItemDirective name='DateRangeText' align='Left'></ToolbarItemDirective>
            <ToolbarItemDirective name='Today' align='Right'></ToolbarItemDirective>
            <ToolbarItemDirective align='Center' template={template}></ToolbarItemDirective>
        </ToolbarItemsDirective>
    </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);