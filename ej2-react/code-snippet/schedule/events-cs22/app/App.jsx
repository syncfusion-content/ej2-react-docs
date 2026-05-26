import * as React from 'react';
import { ScheduleComponent, Day, Week, TimelineViews, TimelineMonth, Month, Agenda, Resize, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const eventSettings = { dataSource: scheduleData }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
		>
			<ViewsDirective>
				<ViewDirective option='Day' />
				<ViewDirective option='TimelineWeek' />
				<ViewDirective option='Week' />
				<ViewDirective option='TimelineMonth' />
				<ViewDirective option='Month' />
				<ViewDirective option='Agenda' />
			</ViewsDirective>
			<Inject services={[Day, Week, TimelineViews, TimelineMonth, Month, Agenda, Resize]} />
		</ScheduleComponent>
	);
}

export default App;
