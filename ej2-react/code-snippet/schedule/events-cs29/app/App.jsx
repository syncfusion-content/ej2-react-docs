import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
	const scheduleObj = React.useRef(null);
	const data = [{
		Id: 13,
		Subject: 'Myths of Andromeda Galaxy',
		StartTime: new Date(2026, 4, 20, 10, 30),
		EndTime: new Date(2026, 4, 20, 10, 40)
	}, {
		Id: 14,
		Subject: 'Aliens vs Humans',
		StartTime: new Date(2026, 4, 20, 10, 0),
		EndTime: new Date(2026, 4, 20, 10, 20)
	}];
	const eventSettings = { dataSource: data }

	const onEventRendered = (args) => {
		let cellHeight = scheduleObj.current.element.querySelector('.e-work-cells').offsetHeight;
		let appHeight = (args.data.EndTime.getTime() - args.data.StartTime.getTime()) / (60 * 1000) * (cellHeight * scheduleObj.current.timeScale.slotCount) / scheduleObj.current.timeScale.interval;
		args.element.style.height = appHeight + 'px';
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
