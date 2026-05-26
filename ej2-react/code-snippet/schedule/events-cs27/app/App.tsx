import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventRenderedArgs, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const scheduleObj = React.useRef<ScheduleComponent>(null);
	const eventSettings: EventSettingsModel = { dataSource: scheduleData }

	const onEventRendered = (args: EventRenderedArgs): void => {
		applyCategoryColor(args, scheduleObj.current.currentView);
	}
	const applyCategoryColor = (args: EventRenderedArgs, currentView: string): void => {
		let categoryColor: string = args.data.CategoryColor as string;
		if (!args.element || !categoryColor) {
			return;
		}
		if (currentView === 'Agenda') {
			(args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
		} else {
			args.element.style.backgroundColor = categoryColor;
		}
	}

	return (
		<ScheduleComponent
			width='100%'
			height='550px'
			ref={scheduleObj}
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
			eventRendered={onEventRendered}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
}

export default App;
