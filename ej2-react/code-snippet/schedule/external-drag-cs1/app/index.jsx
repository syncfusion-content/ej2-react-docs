{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { eventData, waitingList } from './datasource';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    let scheduleObj;
    let treeObj;
    let isTreeItemDropped = false;
    let draggedItemId = '';
    let allowDragAndDrops = true;
    const fields = { dataSource: waitingList, id: 'Id', text: 'Name' };
    const data = extend([], eventData, null, true);
    function treeTemplate(props) {
        return (<div id="waiting"><div id="waitdetails"><div id="waitlist">{props.Name}</div>
      <div id="waitcategory">{props.DepartmentName}</div></div></div>);
    }
    function onItemDrag(event) {
        if (scheduleObj.isAdaptive) {
            let classElement = scheduleObj.element.querySelector('.e-device-hover');
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
            let dragElementIcon = document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
            for (let i = 0; i < dragElementIcon.length; i++) {
                dragElementIcon[i].style.display = 'none';
            }
        }
    }
    function onActionBegin(event) {
        if (event.requestType === 'eventCreate' && isTreeItemDropped) {
            let treeViewdata = treeObj.fields.dataSource;
            const filteredPeople = treeViewdata.filter((item) => item.Id !== parseInt(draggedItemId, 10));
            treeObj.fields.dataSource = filteredPeople;
            let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
            for (let i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    }
    function onTreeDragStop(event) {
        let treeElement = closest(event.target, '.e-treeview');
        let classElement = scheduleObj.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeElement) {
            event.cancel = true;
            let scheduleElement = closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                let treeviewData = treeObj.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    let cellData = scheduleObj.getCellDetails(event.target);
                    let eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description
                    };
                    scheduleObj.addEvent(eventData);
                    isTreeItemDropped = true;
                    draggedItemId = event.draggedNodeData.id;
                }
            }
        }
    }
    return (<div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='content-wrapper'>
          <div className="schedule-container">
            <div className="title-container">
              <div className="title-text">Scheduler</div>
            </div>
            <ScheduleComponent ref={schedule => scheduleObj = schedule} cssClass='schedule-drag-drop' width='100%' height='650px' selectedDate={new Date(2018, 7, 1)} currentView='TimelineDay' eventSettings={{
            dataSource: data,
            fields: {
                subject: { title: 'Patient Name', name: 'Name' },
                startTime: { title: "From", name: "StartTime" },
                endTime: { title: "To", name: "EndTime" },
                description: { title: 'Reason', name: 'Description' }
            }
        }} actionBegin={onActionBegin} drag={onItemDrag}>
              <ViewsDirective>
                <ViewDirective option='TimelineDay'/>
              </ViewsDirective>
              <Inject services={[TimelineViews, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
          <div className="treeview-container">
            <div className="title-container">
              <div className="title-text">Waiting List</div>
            </div>
            <TreeViewComponent ref={tree => treeObj = tree} cssClass='treeview-external-drag' nodeTemplate={treeTemplate} fields={fields} nodeDragStop={onTreeDragStop} nodeDragging={onItemDrag} allowDragAndDrop={allowDragAndDrops}/>
          </div>
        </div>
      </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}