import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";
function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks"
  };

  function TaskbarTemplate(props) {
    return (
      <div
        className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar"
        style={{ height: "100%" }}
      >
        <div
          className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar"
          style={{
            width: props.ganttProperties.progressWidth + "px",
            height: "100%"
          }}
        >
        </div>
        <span
            className="e-task-label"
            style={{
              position: "absolute",
              fontSize: "12px",
              color: "white",
              top: "5px",
              left: "10px",
              fontFamily: "Segoe UI",
              cursor: "move"
            }}
          >
            {props.TaskName}
          </span>
      </div>
    );
  }
  function ParentTaskbarTemplate(props) {
    return (
      <div
        className="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar"
        style={{ height: "100%" }}
      >
        <div
          className="e-gantt-parent-progressbar-inner-div e-row-expand e-gantt-parent-progressbar"
          style={{ width: props.ganttProperties.progressWidth+"px", height: "100%" }}
        >
         </div>
         <span
            className="e-task-label"
            style={{
              position: "absolute",
              fontSize: "12px",
              color: "white",
              top: "5px",
              left: "10px",
              fontFamily: "Segoe UI",
              cursor: "move"
            }}
          >
            {props.TaskName}
          </span>
      </div>
    );
  }
  function MilestoneTemplate(props) {
    return (
      <div className="e-gantt-milestone" style={{ position: "absolute" }}>
        <div
          className="e-milestone-top"
          style={{
            borderRightWidth: "15px",
            borderLeftWidth: "15px",
            borderBottomWidth: "15px"
          }}
        />
        <div
          className="e-milestone-bottom"
          style={{
            top: "15px",
            borderRightWidth: "15px",
            borderLeftWidth: "15px",
            borderTopWidth: "15px"
          }}
        />
      </div>
    );
  }
    return (
      <GanttComponent
        dataSource={data}
        rowHeight={60}
        taskFields={taskFields}
        taskbarTemplate={TaskbarTemplate}
        parentTaskbarTemplate={ParentTaskbarTemplate}
        milestoneTemplate={MilestoneTemplate}
        height="450px"
      />
    );
}
ReactDOM.render(<App />, document.getElementById("root"));