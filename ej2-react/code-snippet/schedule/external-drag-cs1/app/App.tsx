import * as React from 'react';
import { useRef } from 'react';
import {
	ScheduleComponent, ViewsDirective, ViewDirective, Inject, TimelineViews,
	Resize, DragAndDrop, type ActionEventArgs, type CellClickEventArgs, type EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { eventData, waitingList } from './datasource';
import { closest, remove, addClass } from '@syncfusion/ej2-base';
import { type DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

function App() {
	const scheduleObj = useRef<ScheduleComponent>(null);
	const treeObj = useRef<TreeViewComponent>(null);
	let isTreeItemDropped: boolean = false;
	let draggedItemId: string = '';
	let allowDragAndDrops: boolean = true;

	const fields: object = { dataSource: waitingList, id: 'Id', text: 'Name' };
	const fieldsData = {
		subject: { title: 'Patient Name', name: 'Name' },
		startTime: { title: 'From', name: 'StartTime' },
		endTime: { title: 'To', name: 'EndTime' },
		description: { title: 'Reason', name: 'Description' }
	};
	const eventSettings: EventSettingsModel = { dataSource: eventData, fields: fieldsData };

	const treeTemplate = (props: any) => {
		return (
			<div id="waiting">
				<div id="waitdetails">
					<div id="waitlist">{props.Name}</div>
					<div id="waitcategory">{props.DepartmentName}</div>
				</div>
			</div>
		);
	};

	const onItemDrag = (event: any): void => {
		if (scheduleObj.current!.isAdaptive) {
			const classElement: HTMLElement = scheduleObj.current!.element.querySelector('.e-device-hover')!;
			if (classElement) {
				classElement.classList.remove('e-device-hover');
			}
			if (event.target.classList.contains('e-work-cells')) {
				addClass([event.target], 'e-device-hover');
			}
		}
		if (document.body.style.cursor === 'not-allowed') {
			document.body.style.cursor = '';
		}
		if (event.name === 'nodeDragging') {
			const dragElementIcon: NodeListOf<HTMLElement> =
				document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
			for (let i: number = 0; i < dragElementIcon.length; i++) {
				dragElementIcon[i].style.display = 'none';
			}
		}
	};

	const onActionBegin = (event: ActionEventArgs): void => {
		if (event.requestType === 'eventCreate' && isTreeItemDropped) {
			const treeViewdata: { [key: string]: object }[] = treeObj.current!.fields.dataSource as { [key: string]: object }[];
			const filteredPeople: { [key: string]: object }[] =
				treeViewdata.filter((item: any) => item.Id !== parseInt(draggedItemId, 10));
			treeObj.current!.fields.dataSource = filteredPeople;
			const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.e-drag-item.treeview-external-drag');
			for (let i: number = 0; i < elements.length; i++) {
				remove(elements[i]);
			}
		}
	};

	const onTreeDragStop = (event: DragAndDropEventArgs): void => {
		const treeElement: Element = closest(event.target, '.e-treeview');
		const classElement: HTMLElement = scheduleObj.current!.element.querySelector('.e-device-hover')!;
		if (classElement) {
			classElement.classList.remove('e-device-hover');
		}
		if (!treeElement) {
			event.cancel = true;
			const scheduleElement: Element = closest(event.target, '.e-content-wrap');
			if (scheduleElement) {
				const treeviewData: { [key: string]: object }[] =
					treeObj.current!.fields.dataSource as { [key: string]: object }[];
				if (event.target.classList.contains('e-work-cells')) {
					const filteredData: { [key: string]: object }[] =
						treeviewData.filter((item: any) => item.Id === parseInt(event.draggedNodeData.id as string, 10));
					const cellData: CellClickEventArgs = scheduleObj.current!.getCellDetails(event.target);
					const eventData: Record<string, any> = {
						Name: filteredData[0].Name,
						StartTime: cellData.startTime,
						EndTime: cellData.endTime,
						IsAllDay: cellData.isAllDay,
						Description: filteredData[0].Description
					};
					scheduleObj.current!.addEvent(eventData);
					isTreeItemDropped = true;
					draggedItemId = event.draggedNodeData.id as string;
				}
			}
		}
	};

	return (
		<div className='schedule-control-section'>
			<div className='col-lg-12 control-section'>
				<div className='content-wrapper'>
					<div className="schedule-container">
						<div className="title-container">
							<div className="title-text">Scheduler</div>
						</div>
						<ScheduleComponent ref={scheduleObj} cssClass='schedule-drag-drop' width='100%' height='650px' selectedDate={new Date(2026, 7, 1)}
							currentView='TimelineDay'
							eventSettings={eventSettings}
							actionBegin={onActionBegin} drag={onItemDrag}
						>
							<ViewsDirective>
								<ViewDirective option='TimelineDay' />
							</ViewsDirective>
							<Inject services={[TimelineViews, Resize, DragAndDrop]} />
						</ScheduleComponent>
					</div>
					<div className="treeview-container">
						<div className="title-container">
							<div className="title-text">Waiting List</div>
						</div>
						<TreeViewComponent ref={treeObj} cssClass='treeview-external-drag' nodeTemplate={treeTemplate} fields={fields} nodeDragStop={onTreeDragStop} nodeDragging={onItemDrag} allowDragAndDrop={allowDragAndDrops} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
