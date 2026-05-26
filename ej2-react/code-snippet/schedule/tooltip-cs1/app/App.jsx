import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { eventsData } from './datasource';

function App() {
	const template = (props) => {
		return (
			<div className="tooltip-wrap">
				<div className="content-area">
					<div className="name">{props.Subject}</div>
					{(props.City !== null && props.City !== undefined) ? <div className="city">{props.City}</div> : ''}
					<div className="time">From :{props.StartTime.toLocaleString()}</div>
					<div className="time">To  :{props.EndTime.toLocaleString()}</div>
				</div>
			</div>
		);
	}
	const eventSettings = {
		dataSource: eventsData,
		enableTooltip: true,
		tooltipTemplate: template
	};

	return (
		<ScheduleComponent
			width='100%'
			height='500px'
			selectedDate={new Date(2026, 1, 15)}
			eventSettings={eventSettings}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
}

export default App;
