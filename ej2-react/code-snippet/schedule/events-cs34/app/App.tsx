import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Inject, type ActionEventArgs, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

interface ScheduleEvent {
	Id: number;
	Subject: string;
	StartTime: Date;
	EndTime: Date;
}

function App() {
	const scheduleObj = React.useRef<ScheduleComponent | null>(null);

	const eventSettings: EventSettingsModel = {
		dataSource: scheduleData
	};

	const onActionBegin = (args: ActionEventArgs): void => {
		if (args.requestType !== 'eventCreate') return;

		if (!args.data || !Array.isArray(args.data) || args.data.length === 0) {
			return;
		}

		const schedule = scheduleObj.current;
		if (!schedule) return;

		const eventData = args.data[0] as ScheduleEvent;
		const eventField = schedule.eventFields;
		const startKey = eventField.startTime;
		const endKey = eventField.endTime;
		if (!startKey || !endKey) return;

		const startDate = eventData[startKey as keyof ScheduleEvent] as Date;
		const endDate = eventData[endKey as keyof ScheduleEvent] as Date;
		args.cancel = !schedule.isSlotAvailable(startDate, endDate);
	};

	return (
		<ScheduleComponent
			ref={scheduleObj}
			width="100%"
			height="550px"
			selectedDate={new Date(2026, 4, 20)}
			eventSettings={eventSettings}
			actionBegin={onActionBegin}
		>
			<Inject services={[Day, Week, WorkWeek]} />
		</ScheduleComponent>
	);
}

export default App;
