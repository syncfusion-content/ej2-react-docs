import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const onDragStart = (args) => {
		args.interval = 10;
	}
	const eventSettings = { dataSource: scheduleData }

	return (
		<ScheduleComponent
			height='550px'
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
			dragStart={onDragStart}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
		</ScheduleComponent>
	);
}

export default App;
