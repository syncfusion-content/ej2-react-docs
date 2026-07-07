import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, DayMarkers, Selection, TaskFieldsModel, SplitterSettingsModel, TooltipSettingsModel, LabelSettingsModel } from '@syncfusion/ej2-react-gantt';
import { baselineTemplateData } from './datasource';

function App() {
  let ganttInstance: GanttComponent | null;

  const taskFields: TaskFieldsModel = {
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

  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };

  const tooltipSettings: TooltipSettingsModel = {
    showTooltip: false
  };

  const labelSettings: LabelSettingsModel = {
    taskLabel: 'TaskName'
  };

  function baselineTemplate(props: any) {
    if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
      return null;
    }
    const taskRecord = props.taskData;
    const ganttProperties = taskRecord.ganttProperties;
    const chartRowsModule = (ganttInstance as any).chartRowsModule;
    const baselineTop = chartRowsModule.baselineTop;
    const baselineHeight = chartRowsModule.baselineHeight;
    const taskBarHeight = chartRowsModule.taskBarHeight;
    const milestoneHeight = chartRowsModule.milestoneHeight;
    const milestoneMarginTop = chartRowsModule.milestoneMarginTop;
    const rowHeight = (ganttInstance as any).rowHeight;
    const renderBaseline = (ganttInstance as any).renderBaseline;
    const enableRtl = (ganttInstance as any).enableRtl;
    const taskSpacing = 9;
    const baselineSpacing = 4;

    function getLeft(date: any) {
      return (ganttInstance as any).dataOperation.getTaskLeft(
        new Date(date),
        false,
        ganttProperties.calendarContext
      );
    }

    function getWidth(start: any, duration: any) {
      if (!start || duration == null || duration === 0) return 0;
      const end = new Date(start);
      end.setDate(end.getDate() + duration);
      const leftStart = (ganttInstance as any).dataOperation.getTaskLeft(
        new Date(start),
        false,
        ganttProperties.calendarContext
      );
      const leftEnd = (ganttInstance as any).dataOperation.getTaskLeft(
        end,
        false,
        ganttProperties.calendarContext
      );
      return leftEnd - leftStart;
    }

    function render(start: any, duration: any, index: number) {
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

        const milestoneStyle: React.CSSProperties = {
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

      const barStyle: React.CSSProperties = {
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
      ref={(gantt: any) => (ganttInstance = gantt)}
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