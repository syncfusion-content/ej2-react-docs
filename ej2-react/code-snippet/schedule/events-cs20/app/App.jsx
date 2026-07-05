import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const scheduleObj = React.useRef(null);
	const onDragStop = (args) => {
		args.cancel = true;
		scheduleObj.current.openEditor(args.data, "Save");
	}
	const eventSettings = { dataSource: scheduleData }

	return (
		<ScheduleComponent
			height='550px'
			ref={scheduleObj}
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
			dragStop={onDragStop}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
		</ScheduleComponent>
	);
}

export default App;
