import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, DayMarkers, Selection, TaskFieldsModel, SplitterSettingsModel, TooltipSettingsModel, LabelSettingsModel } from '@syncfusion/ej2-react-gantt';
import { baselineTemplateData } from './datasource';

function App() {
  let ganttInstance;

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    columnIndex: 3
  };

  const tooltipSettings = {
    showTooltip: false
  };

  const labelSettings = {
    taskLabel: 'TaskName'
  };

  function baselineTemplate(props) {
    if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
      return null;
    }
    const taskRecord = props.taskData;
    const ganttProperties = taskRecord.ganttProperties;
    const chartRowsModule = ganttInstance.chartRowsModule;
    const baselineTop = chartRowsModule.baselineTop;
    const baselineHeight = chartRowsModule.baselineHeight;
    const taskBarHeight = chartRowsModule.taskBarHeight;
    const milestoneHeight = chartRowsModule.milestoneHeight;
    const milestoneMarginTop = chartRowsModule.milestoneMarginTop;
    const rowHeight = ganttInstance.rowHeight;
    const renderBaseline = ganttInstance.renderBaseline;
    const enableRtl = ganttInstance.enableRtl;
    const taskSpacing = 9;
    const baselineSpacing = 4;

    function getLeft(date) {
      return ganttInstance.dataOperation.getTaskLeft(
        new Date(date),
        false,
        ganttProperties.calendarContext
      );
    }

    function getWidth(start, duration) {
      if (!start || duration == null || duration === 0) return 0;
      const end = new Date(start);
      end.setDate(end.getDate() + duration);
      const leftStart = ganttInstance.dataOperation.getTaskLeft(
        new Date(start),
        false,
        ganttProperties.calendarContext
      );
      const leftEnd = ganttInstance.dataOperation.getTaskLeft(
        end,
        false,
        ganttProperties.calendarContext
      );
      return leftEnd - leftStart;
    }

    function render(start, duration, index) {
      if (!start) return null;
      const leftPosition = getLeft(start);
      const width = getWidth(start, duration);

      if (duration === 0) {
        const milestoneSize = renderBaseline ? taskBarHeight : taskBarHeight - 10;
        const baselineMilestoneHeight = renderBaseline ? 5 : 2;
        const leftPosition_ms = enableRtl
          ? leftPosition - milestoneHeight / 2 + 3
          : leftPosition - milestoneHeight / 2 + 1;
        const marginTop =
          -Math.floor(rowHeight - milestoneMarginTop) +
          baselineMilestoneHeight +
          2 +
          index * baselineSpacing;

        const milestoneStyle = {
          position: 'absolute',
          width: milestoneSize + 'px',
          height: milestoneSize + 'px',
          transform: 'rotate(45deg)',
          marginTop: marginTop + 'px'
        };
        if (enableRtl) {
          milestoneStyle.right = leftPosition_ms + 'px';
        } else {
          milestoneStyle.left = leftPosition_ms + 'px';
        }

        return (
          <div
            key={index}
            className="e-baseline-gantt-milestone-container"
            style={milestoneStyle}
          ></div>
        );
      }

      const barStyle = {
        position: 'absolute',
        marginTop: baselineTop + index * taskSpacing + 'px',
        width: width + 'px',
        height: baselineHeight + 'px'
      };
      if (enableRtl) {
        barStyle.right = leftPosition + 'px';
      } else {
        barStyle.left = leftPosition + 'px';
      }

      return (
        <div key={index} className="e-baseline-bar" role="term" style={barStyle}></div>
      );
    }

    return (
      <div className="custom-multi-baseline">
        {render(taskRecord.taskData.BaselineStartDate, taskRecord.taskData.BaselineDuration, 0)}
        {render(taskRecord.taskData.BaselineStartDate1, taskRecord.taskData.BaselineDuration1, 1)}
        {render(taskRecord.taskData.BaselineStartDate2, taskRecord.taskData.BaselineDuration2, 2)}
      </div>
    );
  }

  return (
    <GanttComponent
      dataSource={baselineTemplateData}
      taskFields={taskFields}
      splitterSettings={splitterSettings}
      tooltipSettings={tooltipSettings}
      allowSelection={true}
      renderBaseline={true}
      rowHeight={60}
      taskbarHeight={20}
      gridLines="Both"
      highlightWeekends={true}
      labelSettings={labelSettings}
      baselineColor="red"
      height="450px"
      ref={(gantt) => (ganttInstance = gantt)}
      baselineTemplate={baselineTemplate}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="ID" textAlign="Left" />
        <ColumnDirective field="TaskName" width="270" headerText="Name" />
        <ColumnDirective field="BaselineStartDate" headerText="Baseline Start Date" width="180" />
        <ColumnDirective field="BaselineDuration" headerText="Baseline Duration" width="180" />
        <ColumnDirective field="BaselineStartDate1" format={{ skeleton: 'yMd', type: 'date' }} headerText="Baseline1 Start Date" width="180" />
        <ColumnDirective field="BaselineDuration1" headerText="Baseline1 Duration" width="180" />
        <ColumnDirective field="BaselineStartDate2" format={{ skeleton: 'yMd', type: 'date' }} headerText="Baseline2 Start Date" width="180" />
        <ColumnDirective field="BaselineDuration2" headerText="Baseline2 Duration" width="180" />
      </ColumnsDirective>
      <Inject services={[DayMarkers, Selection]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));