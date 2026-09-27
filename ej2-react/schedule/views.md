---
layout: post
title: Views in React Scheduler | Syncfusion
description: Learn about the available views in the Syncfusion React Scheduler, including day, week, month, agenda, and timeline view modes and customizations.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Views in React Scheduler

The Scheduler includes multiple view modes, each with unique configuration options. By default, the `Week` view is active. The built-in views are listed below:

* Day
* Week
* Work Week
* Month
* Year
* Agenda
* Month-Agenda
* Timeline Day
* Timeline Week
* Timeline Work Week
* Timeline Month
* Timeline Year

To navigate between views and dates, use the navigation options in the Scheduler header bar. The active view is highlighted, and its date range is shown on the left. Clicking the date range opens a calendar popup so you can select a different date.

Learn how to customize each Scheduler view with different settings by watching this video:

{% youtube "https://www.youtube.com/watch?v=EhoLFF7kwX0" %}

> **Note:** By default, the Scheduler is configured with Day, Week, Work Week, Month, and Agenda views. Timeline views must be enabled by injecting their specific modules.

> **Tip:** Use the `views` property when you need different settings for different view modes.

## Setting a specific view on the Scheduler

The Scheduler displays the `Week` view by default. To change the active view, set the [`currentView`](https://ej2.syncfusion.com/react/documentation/api/schedule#currentview) property to the desired view name. The applicable view names that the Scheduler accepts are as follows:

* Day
* Week
* WorkWeek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

To use these view modes, you must import and inject the corresponding modules. You can also define a specific set of views and configure them individually using the [`views`](https://ej2.syncfusion.com/react/documentation/api/schedule/views) property.

The following example demonstrates how to configure the Scheduler to display four specific views: Week, Month, Timeline Week, and Timeline Month. The appropriate view modules are imported and injected to display these views.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs7" %}

> `ViewDirective` and `ViewsDirective` must be imported from the package to define views.

The next example shows how to configure two views with different settings. Here, the Week view displays dates in `dd-MM-yyyy` format, while the Month view hides weekend days and is set to read-only mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs8" %}

## View-specific configuration

Each view can be configured with its own set of properties. To apply view-specific settings, define the required properties within the corresponding `ViewDirective` tag inside the `views` collection. The available fields for each view option are:

| Property | Type | Description | Applicable Views |
|----------|------|-------------|------------------|
| [`option`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#option) | View | Accepts the Scheduler view name, such as `Day` or `Week`, and is used to define the related properties. | All views |
| [`isSelected`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#isselected) | Boolean | Acts like `currentView` and defines the active view of the Scheduler. | All views |
| [`dateFormat`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#dateformat) | Date | Uses the default culture date format unless a specific view overrides it. | All views |
| [`readonly`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#readonly) | Boolean | Prevents CRUD actions in the view where it is defined. | All views |
| [`resourceHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#resourceheadertemplate) | String | Customizes resource header cells in the views where it is defined. | All views |
| [`dateHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#dayheadertemplate) | String | Customizes date header cells in the views where it is defined. | All views |
| [`eventTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#eventtemplate) | String | Customizes the event appearance in the selected view. | All views |
| [`showWeekend`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweekend) | Boolean | Hides weekend days from the views where it is defined when set to `false`. | All views |
| [`group`](https://ej2.syncfusion.com/react/documentation/api/schedule/group) | GroupModel | Configures resource grouping for Scheduler views. | All views |
| [`cellTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#celltemplate) | String | Customizes work cells in the views where it is defined. | All views except Agenda |
| [`workDays`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#workdays) | Number[] | Sets the working days for the Scheduler view. | All views except Agenda |
| [`displayName`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#displayname) | String | Sets a custom label for a view that uses different intervals. | All views except Agenda and Month Agenda |
| [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#interval) | Number | Customizes the number of days, weeks, work weeks, or months shown in the view. | All views except Agenda and Month Agenda |
| [`startHour`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#starthour) | String | Sets the start time from which the Scheduler is displayed. | Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week |
| [`endHour`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#endhour) | String | Sets the end time at which the Scheduler ends. | Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week |
| [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#timescale) | TimeScaleModel | Configures the time scale for applicable views. | Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week |
| [`showWeekNumber`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) | Boolean | Shows the week number when set to `true`. | Day, Week, Work Week, and Month |
| [`allowVirtualScrolling`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) | Boolean | Enables or disables virtual scrolling. | Agenda and Timeline views |
| [`headerRows`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#headerrows) | HeaderRowsModel | Defines custom header rows for timeline views. | Timeline views only |

### Day view

The Day view displays a single day by default. You can configure it to show multiple days by setting the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#interval) property within the corresponding `ViewDirective`. Any of the properties defined above can be applied to the Day view as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs9" %}

> **Note:** All the properties defined in the table are applicable to the Day view except [`allowVirtualScrolling`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#headerrows).

### Week view

The Week view displays 7 days by default, from Sunday to Saturday, with all related appointments. You can change the first day of the week using the [`firstDayOfWeek`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#firstdayofweek) property, which accepts an integer value such as Sunday = 0, Monday = 1, Tuesday = 2, and so on. You can navigate to a specific date in the Day view from the Week view by clicking the appropriate date in the date header bar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs10" %}

### Work Week view

The Work Week view displays only the working days of a week and their associated appointments. You can customize the working days using the [`workDays`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#workdays) property, which accepts an array of integer values such as Sunday = 0, Monday = 1, Tuesday = 2, and so on. By default, the view displays Monday through Friday. You can also navigate to a specific date in the Day view from the Work Week view by clicking the appropriate date in the header bar.

The following code example demonstrates how to customize the resource header cells for only the `Work Week` view.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs11" %}

> **Note:** The Day, Week, and Work Week views can display all-day appointments in a separate row with an expand/collapse option.

### Month view

The Month view displays all the days of a particular month with their corresponding appointments. You can navigate to the Day view for a specific date by clicking the date number in the month cell.

By default, appointments created in Month view are treated as all-day appointments. You can change this behavior by clearing the `All-day` option in the editor window so that the appointment uses the default time range of 9:00 AM to 9:30 AM.

You can also display the `+ more` text indicator in each day cell of the Month view. Clicking it shows the hidden appointments for that day.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs12" %}

### Year view

A Year view displays all the days of a particular year grouped by month along with related appointments. You can navigate to a specific date in the Day view by clicking the appropriate date text in the year cells.

The Year view supports both `Horizontal` and `Vertical` orientations, which can be configured using the `orientation` property within the [`views`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#orientation) definition.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs13" %}

> **Note:** The Year view has built-in module support and highlights dates that contain appointments.

### Agenda view

The Agenda view lists appointments in a grid-like format and shows the next 7 days by default. You can change this duration with the [`agendaDaysCount`](https://ej2.syncfusion.com/react/documentation/api/schedule#agendadayscount) property. It supports virtual scrolling when the [`allowVirtualScrolling`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) property is enabled. In addition, the [`hideEmptyAgendaDays`](https://ej2.syncfusion.com/react/documentation/api/schedule#hideemptyagendadays) property hides days that do not have appointments.

The following code example shows how to customize the display of events specifically for the Agenda view.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs14" %}

> **Important:** The Agenda view requires a specific height value in pixels for the Scheduler component.

### Month Agenda view

The Month Agenda view combines a month calendar with an agenda list. Clicking a date in the calendar displays that day's appointments in the list below. Dates that contain appointments are marked with a dot indicator.

The following code example shows how to hide weekend days and modify the working days list only for the `MonthAgenda` view.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs15" %}

### Timeline views – Day, Week, Work Week

Timeline Day, Timeline Week, and Timeline Work Week display time slots horizontally. By default, cell height adjusts based on the Scheduler height. When the number of appointments exceeds the visible area, the `+ more` indicator appears at the bottom to show that additional appointments exist in that time range.

To use Timeline Day, Timeline Week, and Timeline Work Week views, import and inject the `TimelineViews` module from the `ej2-react-schedule` package.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs16" %}

Similar to the standard Week view, the Timeline Week view shows 7 days with associated appointments and horizontal time slots.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs17" %}

The following code example shows how to display the Timeline Work Week view.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs18" %}

> **Note:** Clicking dates in the header of Timeline Day, Timeline Week, and Timeline Work Week views navigates to the Agenda view for that day.

### Timeline Month view

A Timeline Month view displays the current month days along with their appointments. To use the Timeline Month view, import and inject the `TimelineMonth` module from the `ej2-react-schedule` package.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs19" %}

> **Note:** Clicking a date in the header of the Timeline Month view navigates to the Timeline Day view.

### Timeline Year view

In Timeline Year view, each row represents a single resource. In the vertical view, resources are grouped as columns. Timeline Year view follows a tree-like hierarchical grouping structure and can contain multiple levels of child resources.

To use the Timeline Year view, import and inject the `TimelineYear` module from the `ej2-react-schedule` package.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs20" %}

#### Resource grouping

The following example shows how to group resources in the Timeline Year view. Events are displayed in rows corresponding to their assigned resource.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/resource-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/resource-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/resource-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/resource-cs17" %}

#### Auto row height

Timeline Year view supports auto row height. When the [`rowAutoHeight`](https://ej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) feature is enabled, row height adjusts automatically based on the number of overlapping events in the same time range. If you disable auto row height, the `+ more` indicator appears in each day cell, and clicking it shows the hidden appointments for that day.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs47/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs47/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs47/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs47" %}

## Extending view intervals

You can customize the default number of days shown in different Scheduler view modes. For example, you can extend a Day view to display 3 days by setting the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#interval) option to 3 for the `Day` option within the `ViewDirective`. In the same way, you can display 2 weeks by setting the interval to 2 for the `Week` option.

You can provide an alternate display name for customized views in the Scheduler header bar by setting the [`displayName`](https://ej2.syncfusion.com/react/documentation/api/schedule/views#displayname) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/views-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/views-cs21/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/views-cs21" %}

> **Note:** View intervals can be extended in all Scheduler view modes except Agenda and Month-Agenda.

## See also

* [How to restrict view navigation while clicking on dates](./how-to/prevent-date-navigation)

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for a quick overview of its capabilities. You can also explore the [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to learn how to present and manipulate data.