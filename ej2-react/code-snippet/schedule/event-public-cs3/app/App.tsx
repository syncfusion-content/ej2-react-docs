import * as React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, type EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

function App() {
	const scheduleObj = React.useRef<ScheduleComponent | null>(null);
	const eventLog = React.useRef<HTMLSpanElement | null>(null);
	const eventSettings: EventSettingsModel = { dataSource: scheduleData };

	const onDataBound = (): void => {
		const schedule = scheduleObj.current;
		if (!schedule) return;

		const event = schedule.getEvents() as Record<string, any>[];

		appendElement('Events present on scheduler <b>' + event.length + '<b><hr>');
	};

	const appendElement = (html: string): void => {
		const log = eventLog.current;
		if (!log) return;

		const span: HTMLElement = document.createElement('span');
		span.innerHTML = html;

		log.insertBefore(span, log.firstChild);
	};

	const onClick = (): void => {
		const log = eventLog.current;
		if (!log) return;

		log.innerHTML = '';
	};

	return (
		<div className='content-wrapper'>
			<div className='col-lg-9 control-section'>
				<ScheduleComponent
					ref={scheduleObj}
					width='100%'
					height='550px'
					selectedDate={new Date(2026, 1, 15)}
					eventSettings={eventSettings}
					dataBound={onDataBound}
				>
					<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
				</ScheduleComponent>
			</div>

			<div className='col-lg-3 property-section'>
				<div title='Event Trace'>
					<table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
						<tbody>
							<tr style={{ height: '250px' }}>
								<td>
									<div className='eventarea' style={{ height: '245px', overflow: 'auto' }}>
										<span className='EventLog' ref={eventLog} style={{ wordBreak: 'normal' }}></span>
									</div>
								</td>
							</tr>

							<tr style={{ height: '50px' }}>
								<td style={{ width: '30%' }}>
									<div className='evtbtn' style={{ paddingBottom: '10px' }}>
										<ButtonComponent title='Clear' onClick={onClick}>
											Clear
										</ButtonComponent>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
