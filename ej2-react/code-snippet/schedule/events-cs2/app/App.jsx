import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

function App() {
	const initialLoad = React.useRef(true);
	const scheduleRef = React.useRef(null);

	const onDataBound = () => {
		if (initialLoad.current) {
			if (scheduleRef.current) {
				const element = scheduleRef.current.element.querySelector('.e-all-day-appointment-section')
				if (element) {
					element.click();
				}
			}
			initialLoad.current = false;
		}
	};

	const data = [
		{
			EndTime: new Date(2026, 4, 1, 0, 0),
			Id: '2',
			IsAllDay: true,
			StartTime: new Date(2026, 3, 29, 0, 0),
			Subject: 'Plumbing Checklist | Jaimungal | 3671 :: Pool',
		},
		{
			EndTime: new Date(2026, 4, 2, 0, 0),
			Id: '4',
			IsAllDay: true,
			StartTime: new Date(2026, 3, 28, 0, 0),
			Subject: 'Underground Plumbing | Jaimungal | 3671 :: Pool',
		},
		{
			EndTime: new Date(2026, 4, 1, 12, 1),
			Id: '7',
			IsAllDay: true,
			StartTime: new Date(2026, 3, 26, 0, 0),
			Subject: 'Steel/ Checklist | VP Highland Model | 3719 :: Pool',
		},
		{
			EndTime: new Date(2026, 4, 1, 0, 0),
			Id: '9',
			IsAllDay: true,
			StartTime: new Date(2026, 3, 29, 0, 0),
			Subject: 'Tile Selections/ Pavers/ Finish | VP Highland Model | 3719 :: Pool',
		},
		{
			EndTime: new Date(2026, 4, 1, 0, 0),
			Id: '10',
			IsAllDay: true,
			StartTime: new Date(2026, 3, 26, 0, 0),
			Subject: 'Layout/ Form Rebar Shell | VP Highland Model | 3719 :: Pool',
		},
		{
			EndTime: new Date(2026, 3, 1, 0, 0),
			Id: '11',
			IsAllDay: true,
			StartTime: new Date(2026, 3, 26, 0, 0),
			Subject: ' VP Highland Model | 3719 :: Pool',
		},
	];

	const eventSettings = { dataSource: data };

	return (
		<ScheduleComponent
			height="550px"
			ref={scheduleRef}
			selectedDate={new Date(2026, 3, 26)}
			eventSettings={eventSettings}
			dataBound={onDataBound}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
		</ScheduleComponent>
	);
};

export default App;
