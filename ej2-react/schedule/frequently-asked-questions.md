---
layout: post
title: Frequently asked questions in React Schedule component | Syncfusion
description: Learn here all about Frequently asked questions in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Frequently asked questions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Frequently asked questions in React Schedule component

In this article, you can find some frequently asked questions and corresponding solutions while getting hands-on experience with scheduler control.

## Maximum call stack size exceeded

**Error Image:**

![Maximum call stack size exceeded](./images/max-call-stack-size.png)

**Solution:**

The above error occurs when using scheduler views that were not imported into the project. You can resolve this issue by importing the required view modules.

In the below code, `Day` option is used without injecting, So, it throws the above error. You can resolve this problem by simply injecting the day module in below code.

{% raw %}

```ts

import { render } from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Agenda, TimelineViews, TimelineMonth, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';

export class TimelineView extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.scheduleData.concat(dataSource.timelineData), null, true);
  }
  render() {
    return (<ScheduleComponent height="650px" selectedDate={new Date(2021, 0, 10)} eventSettings={{ dataSource: this.data }}>
              <ViewsDirective>
                <ViewDirective option="Day" />
                <ViewDirective option="TimelineWeek" />
                <ViewDirective option="TimelineWorkWeek" />
                <ViewDirective option="TimelineDay" />
                <ViewDirective option="Agenda" />
              </ViewsDirective>
              <Inject
                services={[ TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop]}
              />
            </ScheduleComponent>
    );
  }
}

render(<TimelineView />, document.getElementById('sample'));

```
{% endraw %}

## Grouping with empty resources

Grouping without providing any resource data will throw the following problems.

* Normal(vertical) views are rendered, but you are not able to perform CRUD operations
* Timeline views not at all render and shows empty scheduler table

So, we suggest to avoid grouping with empty resources in the scheduler.

## Not providing e-field in editor template

**Error:** While using editor template, value of  `e-field` is missing in editor window.

**Solution:** `e-field` value is mandatory, we need to add it. Please refer [here](https://ej2.syncfusion.com/react/documentation/schedule/editor-template/#customizing-event-editor-using-template) for more info.

## Missing CSS reference

**Error Image:**

  ![Missing CSS reference](./images/missing-css-reference.png)

**Solution:**

The above problem occurs when missing CSS references for the scheduler in a project. You can resolve this issue by providing proper CSS for the scheduler.

```
<html>
<head>
    <title>Syncfusion React Sample</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="Syncfusion React UI Components" />
    <meta name="author" content="Syncfusion" />

      <! –– scheduler CSS is referred from this link ––>
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet">

</head>

<body class="material">
    <div id='sample'>
</body>
</html>
```

## QuickInfoTemplate at bottom

When using the `quickInfoTemplate` in scheduler, sometimes quickinfo popup not shown fully at the bottom area of scheduler. You can resolve this by using `cellClick` and `eventClick` events and below code snippet.

```ts
   constructor() {
    super(...arguments);
    this.eventAdded = false;
   }
   .
   .
  onClick(args) {
    if (!this.eventAdded) {
      let popupInstance = document.querySelector('.e-quick-popup-wrapper').ej2_instances[0];
      popupInstance.open = () => {
        popupInstance.refreshPosition();
      };
      this.eventAdded = true;
    }
  }
  .
  .
  .
<ScheduleComponent id="schedule" cellClick={this.onClick.bind(this)} eventClick={this.onClick.bind(this)>
```

## Not importing culture files while using localization

**Error Image:**

![Locale import issue](./images/locale-import-issue.png)

 While using [`locale`](https://ej2.syncfusion.com/react/documentation/schedule/localization/) in scheduler, not importing the required culture files properly throws the problem.

**Solution:** Properly add and import the culture files(numberingSystems, timeZoneNames, loadCldr, L10n etc.,) in your project will resolve the problem.

```ts
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import * as numberingSystems from './culture-files/numberingSystems.json';
import * as gregorian from './culture-files/ca-gregorian.json';
import * as numbers from './culture-files/numbers.json';
import * as timeZoneNames from './culture-files/timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
  'en-GB': {
    schedule: {
      day: 'Day',
      week: 'Week',
      workWeek: 'Work Week',
      month: 'Month'
      }
    }
  });

```