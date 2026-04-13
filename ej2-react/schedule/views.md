---
layout: post
title: Views in React Schedule component | Syncfusion
description: Learn here all about Views in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Views in React Schedule Component

The Scheduler includes a wide variety of view modes, each with unique configuration options. By default, `Week` view is the active view. The available built-in view modes are listed below:

* Day
* Week
* Work week
* Month
* Year
* Agenda
* Month-Agenda
* Timeline Day
* Timeline Week
* Timeline Work Week
* Timeline Month
* Timeline Year

To navigate between views and dates, use the navigation options on the Scheduler header bar. The active view is highlighted by default, and its date range is displayed on the left. Clicking the date range opens a calendar popup to easily select a different date.

Learn how to customize each individual view of the React Scheduler with different settings by watching this video:

{% youtube "https://www.youtube.com/watch?v=EhoLFF7kwX0" %}

> By default, the Scheduler is configured with Day, Week, Work Week, Month, and Agenda views. Other views, such as Timeline views, can be enabled by injecting their specific modules.

## Setting a specific view on the Scheduler

The Scheduler displays the `Week` view by default. To change the active view, set the [`currentView`](https://helpej2.syncfusion.com/react/documentation/api/schedule#currentview) property to the desired view name. The applicable view names that the Scheduler accepts are as follows:

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

Each view can be configured with its own set of properties. To apply view-specific settings, define the desired properties within the corresponding `ViewDirective` tag inside the `views` collection. The available fields for each view option are:

| Property | Type | Description | Applicable Views |
|----------|------|-------------|------------------|
| [`option`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#option) | View | It accepts the Scheduler view name, based on which we can define its related properties. The view names can be `Day`, `Week` and so on. | All views.|
| [`isSelected`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#isselected) | Boolean | It acts similar to the `currentView` property and defines the active view of the Scheduler.| All views. |
| [`dateFormat`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#dateformat) | Date | By default, Scheduler follows the date format as per the default culture assigned to it. When it is defined under specific view, only those assigned views follows this date format. | All views. |
| [`readonly`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#readonly) | Boolean | When set to `true`, prevents the CRUD actions on the respective view under where it is defined. | All views. |
| [`resourceHeaderTemplate`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#resourceheadertemplate) | String | The template option which is used to customize the resource header cells on the Scheduler. It gets applied only on the views, wherever it is defined.| All views. |
| [`dateHeaderTemplate`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#dayheadertemplate) | String | The template option which is used to customize the date header cells and is applied only on the views, wherever it is defined. | All views. |
| [`eventTemplate`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#eventtemplate) | String | The template option to customize the events background. It will get applied to the events of the view to which it is currently being defined. | All views. |
| [`showWeekend`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#showweekend) | Boolean | When set to `false`, it hides the weekend days of a week from the views on which it is defined.| All views. |
| [`group`](https://helpej2.syncfusion.com/react/documentation/api/schedule/group) | GroupModel | Allows to set different resource grouping options on all available Scheduler view modes. | All views. |
| [`cellTemplate`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#celltemplate) | String | The template option to customize the work cells of the Scheduler and is applied only on the views, on which it is defined. | Applicable on all views except Agenda view. |
| [`workDays`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#workdays) | Number[] | It is used to set the working days on the Scheduler views. | Applicable on all views except Agenda view. |
| [`displayName`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#displayname) | String | When a particular view is customized to display with different intervals, this property allows the user to set different display name for each of the views. | Applicable on all views except Agenda and Month Agenda. |
| [`interval`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#interval) | Number | It allows to customize the default Scheduler views with different set of days, weeks, work weeks or months on the applicable view type. | Applicable on all views except Agenda and Month Agenda. |
| [`startHour`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#starthour) | String | It is used to specify the start hour, from which the Scheduler should be displayed. It accepts the time string in a short skeleton format and also, hides the time beyond the specified start time. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week and Timeline Work Week views. |
| [`endHour`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#endhour) | String | It is used to specify the end hour, at which the Scheduler ends. It accepts the time string in a short skeleton format. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| [`timeScale`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#timescale) | TimeScaleModel | Allows to set different timescale configuration on each applicable view modes. | Applicable on Day, Week, Work Week, Timeline Day, Timeline Week, and Timeline Work Week views. |
| `showWeekNumber`[`showWeekNumber`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#showweeknumber) | Boolean | When set to `true`, shows the week number on the respective weeks.| Applicable on Day, Week, Work Week, and Month views. |
|  [`allowVirtualScrolling`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) | Boolean | It is used to enable or disable the virtual scrolling functionality. | Applicable on Agenda and Timeline views. |
| [`headerRows`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#headerrows) | HeaderRowsModel | Allows defining the custom header rows on timeline views of the Scheduler to display the year, month, week, date and hour label as an individual row. | Applicable only on all timeline views. |

### Day view

The Day view displays a single day by default. You can configure it to show multiple days by setting the [`interval`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#interval) property within the corresponding `ViewDirective`. Any of the properties defined above can be applied to the Day view as shown in the following example.

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

> All the properties defined in the table are applicable to the Day view except [`allowVirtualScrolling`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) and [`headerRows`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#headerrows).

### Week view

The Week view displays a count of 7 days (from Sunday to Saturday) with all its related appointments. The first day of the week can be changed using the [`firstDayOfWeek`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#firstdayofweek) which accepts the integer (Sunday=0, Monday=1, Tuesday=2 and so on) value. You can navigate to a particular date in day view from the week view by clicking on the appropriate dates on the date header bar.

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

The Work week view displays only the working days of a week (count of 5 days) and its associated appointments. It is possible to customize the working days on the work week view by using the [`workDays`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#workdays) property which accepts an array of integer values (such as Sunday=0, Monday=1, Tuesday=2 and so on). By default, it displays from Monday to Friday (5 days). You can also navigate to a particular date in the day view from the work week view by clicking on the appropriate dates in the date header bar.

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

> The Day, Week, and Work Week views can display all-day appointments in a separate row with an expand/collapse option.

### Month view

The Month view displays all the days of a particular month with their corresponding appointments. You can navigate to the Day view of a particular date by clicking on its date number in the month cell.

By default, when you try to create an appointment through Month view, it is considered as created for an entire day. You can explicitly change this behavior by unchecking the `All-day` option from editor window, so that it defaults to the start time duration as 9.00 AM and end time as 9.30 AM.

You can also have the `+ more` text indicator on each day cell of a Month view, clicking on which will allows you to view the hidden appointments of a day.

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

A Year view displays all the days of a particular year with months and all its related appointments. You can navigate to a particular date in the day view by clicking on the appropriate date text on the year cells.

The Year view supports both `Horizontal` and `Vertical` orientations, which can be configured using the `orientation` property within the [`views`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#orientation) definition.

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

> The Year view has built-in module support, presenting all months of a year in a calendar format where dates with appointments are highlighted.

### Agenda view

The Agenda view lists appointments in a grid-like format, showing the next 7 days by default. This duration can be customized with the [`agendaDaysCount`](https://helpej2.syncfusion.com/react/documentation/api/schedule#agendadayscount) property. It supports virtual scrolling when the [`allowVirtualScrolling`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#allowvirtualscrolling) property is enabled. Additionally, the [`hideEmptyAgendaDays`](https://helpej2.syncfusion.com/vue/documentation/api/schedule#hideemptyagendadays) property can be used to hide days that have no appointments.

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

> For the Agenda view, it is mandatory to set a specific height (in pixels) for the Scheduler component.

### Month Agenda view

The Month Agenda view combines a month calendar with an agenda list. Clicking a date in the calendar displays that day's appointments in the list below. Dates containing appointments are marked with a dot indicator.

The following code example shows how to hide weekend days and modify the working days list exclusively for the `MonthAgenda` view.

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

Similar to the day view, it shows a single day with all its appointments where the time slots are displayed horizontally. By default, the cell height adjusts as per the height set to Scheduler. When the number of appointments exceeds the visible area of the cells, the `+ more` text indicator will be displayed at the bottom to denote the presence of few more appointments in that time range.

To use Timeline Day, Timeline Week, and Timeline Work Week views, you must import and inject the `TimelineViews` module from the `ej2-react-schedule` package.

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

> Clicking on dates in the header of Timeline Day, Week, and Work Week views navigates to the Agenda view for that day.

### Timeline Month view

A Timeline Month view displays the current month days along with its appointments. To make use of the timeline Month view on Scheduler, import and inject `TimelineMonth` module from the `ej2-react-schedule` package.

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

> Clicking a date in the header of the Timeline Month view navigates to the Timeline Day view.

### Timeline Year view

In Timeline Year view, each row depicts a single resource. Whereas in the vertical view, each resource is grouped parallelly as columns. Here, the resource grouping follows the tree-view like hierarchical grouping structure and can contain any level of child resources.

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

Timeline Year view supports Auto row height. When the feature [`rowAutoHeight`](https://helpej2.syncfusion.com/react/documentation/api/schedule#rowautoheight) is enabled, the row height gets auto-adjusted based on the number of overlapping events occupied in the same time range. If you disable the Auto row height, you have the `+ more` text indicator on each day cell of a Timeline Year view, clicking on which will allow you to view the hidden appointments of a day.

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

It is possible to customize the display of default number of days on different Scheduler view modes. For example, a day view can be extended to display 3 days by setting the [`interval`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#interval) option as 3 for the `Day` option within the `ViewDirective` as depicted in the following code example. In the same way, you can also display 2 weeks by setting interval 2 for the `Week` option.

You can provide the alternative display name for such customized views on the Scheduler header bar, by setting the appropriate [`displayName`](https://helpej2.syncfusion.com/react/documentation/api/schedule/views#displayname) property.

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

> View intervals can be extended on all Scheduler view modes except Agenda and Month-Agenda.

## See Also

* [How to restrict view navigation while clicking on dates](./how-to/prevent-date-navigation)

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to learn how to present and manipulate data.