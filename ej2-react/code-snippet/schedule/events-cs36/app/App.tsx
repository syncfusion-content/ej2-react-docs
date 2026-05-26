import * as React from 'react';
import { ScheduleComponent, TimelineViews, TimelineMonth, ViewsDirective, ViewDirective, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const eventSettings: EventSettingsModel = { dataSource: scheduleData, enableMaxHeight: true, enableIndicator: false }

	return (
		<ScheduleComponent
			width='100%'
			height='500px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
		>
			<ViewsDirective>
				<ViewDirective option='TimelineWeek' />
				<ViewDirective option='TimelineMonth' />
			</ViewsDirective>
			<Inject services={[TimelineViews, TimelineMonth]} />
		</ScheduleComponent>
	);
}

export default App;
