import * as React from 'react';
import { ScheduleComponent, Month, Inject, ViewsDirective, ViewDirective, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const eventSettings: EventSettingsModel = { dataSource: scheduleData };

	return (
		<ScheduleComponent
			width='100%'
			height='380px'
			selectedDate={new Date(2026, 11, 15)}
			eventSettings={eventSettings}
		>
			<ViewsDirective>
				<ViewDirective option='Month' maxEventsPerRow={3} />
			</ViewsDirective>
			<Inject services={[Month]} />
		</ScheduleComponent>
	);
};

export default App;
