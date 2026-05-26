import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const eventSettings = { dataSource: scheduleData }

	return (
		<ScheduleComponent
			width='100%'
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			allowInline={true}
			eventSettings={eventSettings}
		>
			<ViewsDirective>
				<ViewDirective option='Day' />
				<ViewDirective option='Week' />
				<ViewDirective option='WorkWeek' />
				<ViewDirective option='Month' />
				<ViewDirective option='Agenda' />
			</ViewsDirective>
			<Inject services={[Day, Week, WorkWeek, Agenda, Month]} />
		</ScheduleComponent>
	);
}

export default App;
