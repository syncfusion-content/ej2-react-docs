import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent, Inject, Selection } from "@syncfusion/ej2-react-gantt";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { data } from "./datasource";

function App() {

    let ganttInstance = null;

    const taskSettings = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID"
    };

    const selectionSettings = {
        mode: "Cell",
        type: "Multiple"
    };

    function selectCells(indexes) {
        if (!ganttInstance) return;

        const rowIndex = indexes[0];
        const cellIndex = indexes[1];

        ganttInstance.clearSelection();

        const cell = {
            rowIndex: rowIndex,
            cellIndexes: [cellIndex]
        };

        ganttInstance.selectCells([cell]);
    }

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px 0 20px 0" }}>
                <ButtonComponent onClick={() => selectCells([0, 0])}>Select [0, 0]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([1, 1])}>Select [1, 1]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([2, 2])}>Select [2, 2]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([3, 3])}>Select [3, 3]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([4, 4])}>Select [4, 4]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([5, 0])}>Select [5, 0]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([6, 1])}>Select [6, 1]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([7, 2])}>Select [7, 2]</ButtonComponent>
                <ButtonComponent onClick={() => selectCells([3, 4])}>Select [3, 4]</ButtonComponent>
            </div>

            <GanttComponent
                ref={(g) => (ganttInstance = g)}
                height="370px"
                dataSource={data}
                taskFields={taskSettings}
                selectionSettings={selectionSettings}
                enableHover={true}
            >
                <Inject services={[Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));