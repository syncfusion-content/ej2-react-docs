import * as React from 'react';
import { ScheduleComponent, ViewDirective, Month, Resize, ExcelExport, DragAndDrop, Inject, ViewsDirective } from '@syncfusion/ej2-react-schedule';
import { eventsData } from './datasource';

function App() {
	const scheduleObj = React.useRef(null);
	const onTooltipOpen = (args) => {
		if (args.data.Subject === 'Vacation') {
			args.cancel = true;
		}
	};
	const eventSettings = {
		dataSource: eventsData,
		enableTooltip: true,
		fields: {
			subject: { title: 'Name', name: 'Subject' },
			location: { title: 'Country Name', name: 'Location' },
			description: { title: 'Summary', name: 'Description' },
			startTime: { title: 'From', name: 'StartTime' },
			endTime: { title: 'To', name: 'EndTime' },
			startTimezone: { title: 'Origin', name: 'StartTimezone' },
			endTimezone: { title: 'Destination', name: 'EndTimezone' },
		},
	};

	return (
		<ScheduleComponent
			cssClass="excel-export"
			width="100%"
			height="550px"
			id="schedule"
			ref={scheduleObj}
			selectedDate={new Date(2026, 1, 10)}
			eventSettings={eventSettings}
			tooltipOpen={onTooltipOpen}
		>
			<ViewsDirective>
				<ViewDirective option="Month" />
			</ViewsDirective>
			<Inject services={[Month, Resize, DragAndDrop, ExcelExport]} />
		</ScheduleComponent>
	);
}

export default App;
