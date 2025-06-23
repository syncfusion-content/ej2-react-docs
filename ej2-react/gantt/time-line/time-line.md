---
layout: post
title: Time line in React Gantt component | Syncfusion
description: Learn here all about Time line in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Time line 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Time line in React Gantt component

In the Gantt component, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour
* Day
* Week
* Month
* Year

Timescale mode in Gantt can be defined by using [`timelineViewMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineViewMode/) property and also we can define timescale mode of top tier and bottom tier by using [`topTier.unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettingsModel/#unit) and [`bottomTier.unit`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineTierSettingsModel/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/weektimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/weektimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/weektimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/weektimeline-cs1" %}

### Month timeline mode

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/monthtimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/monthtimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/monthtimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/monthtimeline-cs1" %}

### Year timeline mode

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/yeartimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/yeartimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/yeartimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/yeartimeline-cs1" %}

### Day timeline mode

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/daytimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/daytimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/daytimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/daytimeline-cs1" %}

### Hour timeline mode

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/hourtimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/hourtimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/hourtimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/hourtimeline-cs1" %}

## Change timeline view mode programmatically

In the Gantt component, the timeline view mode can be modified programmatically. As described below, the Dropdown menu is also used to change the timeline view. The `Dropdownlist` component can be used to create a dropdown menu. Once the dropdown menu is enabled, the [`timelineViewMode`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineViewMode/) property from the [`timelineSettings`](https://helpej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/) can be utilized to switch the timeline view between Hour, Day, Week, Month, and Year. Refer to the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/changetimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/changetimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/changetimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/changetimeline-cs1" %}

## Week start day customization

In the Gantt component, you can customize the week start day using the [`weekStartDay`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#weekstartday) is set to 0, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/weekstartdaytimeline-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/weekstartdaytimeline-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/weekstartdaytimeline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/weekstartdaytimeline-cs1" %}

## Customize automatic timescale update action

In the Gantt component, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#updatetimescaleview) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/updatetimescale-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/updatetimescale-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/updatetimescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/updatetimescale-cs1" %}

## Timeline cells tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#showtooltip) property. The default value of this property is `true`. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs2" %}

## Show and hide weekends

The [timelineSettings.showWeekend](https://ej2.syncfusion.com/react/documentation/api/gantt/timelineSettings/#showweekend) property is used to customize the timeline in the Gantt component by controlling the visibility of weekends. To exclude weekends from the timeline, set the `showWeekend` property to `false` in the `timelineSettings` configuration. This feature is particularly useful for focusing the timeline on working days, enhancing project management efficiency by hiding weekends from the view.

>Note: To customize non-working or weekend days in the Gantt chart, refer to the [workWeek](https://ej2.syncfusion.com/react/documentation/gantt/task-scheduling#weekendnon-working-days) documentation for detailed information.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/showweekend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/showweekend-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/showweekend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/showweekend-cs1" %}

> Limitations
>* The `showWeekend` feature does not support baselines.
>* The `showWeekend` is not compatible with the manual task mode.
>* Non-working hours cannot be excluded when `showWeekend` is set to false.
>* Holidays are not excluded from the timeline if `showWeekend` is set to false.

## Timeline template

In the Gantt component, you can customize timeline cells using the [timelineTemplate](https://ej2.syncfusion.com/react/documentation/api/gantt/#timelineTemplate) property, allowing for the customization of HTML content within timeline cells. This feature enhances the visual appeal and enables personalized functionality.

When designing the timeline cells, you can utilize the following context properties within the template:

* `date`: Defines the date of the timeline cells.
* `value`: Defines the formatted date value that will be displayed in the timeline cells.
* `tier`: Defines whether the cell is part of the top or bottom tier.

The following code example how to customize the top tier to display the week's weather details and the bottom tier to highlight working and non-working days, with formatted text for holidays.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective, HolidaysDirective, HolidayDirective } from '@syncfusion/ej2-react-gantt'
import {timelineTemplateData} from './datasource'
function App() {
  let ganttInstance ;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const bgColor = (value, date) => {
    if (value === "S") {
      return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return "#97E7E1";
      }
    }
    return "#E0FBE2"
  };
  const imagedate = () => {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return  getImage + ".svg";

  }
  const holidayValue = (value, date) => {
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  const timelineTemplate = (props) => {
    if (props.tier == 'topTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: '#FBF9F1',
          fontWeight: 'bold',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title={props.date}
      >
        <div>{props.value}</div>
        <div
          style={{
            width: '30px',
            height: '30px',
            lineHeight: 'normal',
            paddingLeft: '10px',
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={imagedate()} alt="Image" />
        </div>
      </div>)
    }
    if (props.tier == 'bottomTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: bgColor(props.value, props.date),
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          justifyContent: 'center',
        }}
        title={props.date}
      >
        {holidayValue(props.value, props.date)}
      </div>)
    }
  }
  const splitterSettings = {
    columnIndex: 1
  };
  const timelineSettings = {
    topTier: {
      unit: 'Week',
      format: 'dd/MM/yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
    timelineUnitSize: 100
  };
  const labelSettings = {
    leftLabel: 'TaskName',
  };
  const projectStartDate = new Date('03/31/2019');
  const projectEndDate = new Date('04/23/2019');
  return <GanttComponent id='Timeline' ref={g => ganttInstance = g} dataSource={timelineTemplateData} timelineTemplate={timelineTemplate}
    splitterSettings={splitterSettings}
    taskFields={taskFields} height='550px'
    projectStartDate={projectStartDate} projectEndDate={projectEndDate} timelineSettings={timelineSettings}
     labelSettings={labelSettings} treeColumnIndex={1}>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
      <ColumnDirective field='TaskName' width={300} ></ColumnDirective>
      <ColumnDirective field='StartDate'></ColumnDirective>
      <ColumnDirective field='EndDate' ></ColumnDirective>
      <ColumnDirective field='Duration' ></ColumnDirective>
      <ColumnDirective field='Progress' ></ColumnDirective>
    </ColumnsDirective>
    <HolidaysDirective>
      <HolidayDirective from='04/04/2019' to='04/05/2019' label='Public Holiday'></HolidayDirective>
      <HolidayDirective from='04/12/2019' to='04/12/2019' label='Good Friday'></HolidayDirective>
    </HolidaysDirective>
    <Inject services={[Selection, DayMarkers]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}
import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective, HolidaysDirective, HolidayDirective } from '@syncfusion/ej2-react-gantt';
import {timelineTemplateData} from './datasource'
function App() {
  let ganttInstance :any ;
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  const bgColor = (value: string, date: string): string => {
    if (value === "S") {
      return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return "#97E7E1";
      }
    }
    return "#E0FBE2"
  };
  const imagedate = () => {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return getImage + ".svg";

  }
  const holidayValue = (value: string, date: string): string => {
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.holidays.length; i++) {
      const holiday = ganttInstance.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options: any = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  const timelineTemplate = (props): any => {
    if (props.tier == 'topTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: '#FBF9F1',
          fontWeight: 'bold',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title={props.date}
      >
        <div>{props.value}</div>
        <div
          style={{
            width: '30px',
            height: '30px',
            lineHeight: 'normal',
            paddingLeft: '10px',
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={imagedate()} alt="Image" />
        </div>
      </div>)
    }
    if (props.tier == 'bottomTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: bgColor(props.value, props.date),
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          justifyContent: 'center',
        }}
        title={props.date}
      >
        {holidayValue(props.value, props.date)}
      </div>)
    }
  }
  const splitterSettings: any = {
    columnIndex: 1
  };
  const timelineSettings: any = {
    topTier: {
      unit: 'Week',
      format: 'dd/MM/yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
    timelineUnitSize: 100
  };
  const labelSettings: any = {
    leftLabel: 'TaskName',
  };
  const projectStartDate = new Date('03/31/2019');
  const projectEndDate = new Date('04/23/2019');
  return <GanttComponent id='Timeline' ref={g => ganttInstance = g} dataSource={timelineTemplateData} timelineTemplate={timelineTemplate}
    splitterSettings={splitterSettings}
    taskFields={taskFields} height='550px'
    projectStartDate={projectStartDate} projectEndDate={projectEndDate} timelineSettings={timelineSettings}
     labelSettings={labelSettings} treeColumnIndex={1}>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
      <ColumnDirective field='TaskName' width={300} ></ColumnDirective>
      <ColumnDirective field='StartDate'></ColumnDirective>
      <ColumnDirective field='EndDate' ></ColumnDirective>
      <ColumnDirective field='Duration' ></ColumnDirective>
      <ColumnDirective field='Progress' ></ColumnDirective>
    </ColumnsDirective>
    <HolidaysDirective>
      <HolidayDirective from='04/04/2019' to='04/05/2019' label='Public Holiday'></HolidayDirective>
      <HolidayDirective from='04/12/2019' to='04/12/2019' label='Good Friday'></HolidayDirective>
    </HolidaysDirective>
    <Inject services={[Selection, DayMarkers]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs8" %}

