import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { webinarData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

function App() {
	const instance = new Internationalization();
	const getTimeString = (value) => {
		return instance.formatDate(value, { skeleton: 'hm' });
	}
	const eventTemplate = (props) => {
		const secondaryColor = { background: props.SecondaryColor };
		const primaryColor_1 = { background: props.PrimaryColor };
		const primaryColor_2 = { background: props.PrimaryColor };
		return (
			<div className="template-wrap" style={secondaryColor}>
				<div className="subject" style={primaryColor_1}>{props.Subject}</div>
				<div className="time" style={primaryColor_2}>
					Time: {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}</div>
			</div>
		);
	}
	const eventSettings = { dataSource: webinarData, template: eventTemplate };

	return (
		<ScheduleComponent
			width='100%'
			height='550px'
			selectedDate={new Date(2026, 1, 10)}
			eventSettings={eventSettings}
			readonly={true}
		>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
		</ScheduleComponent>
	);
};

export default App;
