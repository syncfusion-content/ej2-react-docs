---
layout: post
title: Exporting in React Scheduler | Syncfusion
description: Learn how to export and import events in the Syncfusion React Scheduler to Excel and ICS files, and print appointments with custom options.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting in React Scheduler

The Scheduler supports exporting all its appointments both to an Excel or ICS extension file at client-side. It offers different client-side methods to export its appointments in an Excel or iCal format file. Let's look onto the ways on how to implement the exporting functionality in Scheduler.

## Excel Exporting

The Scheduler enables exporting events to an Excel file using the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method. By default, it includes all fields mapped in the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings) property.

> **Important:** Before using Excel exporting functionality, you must import and inject the `ExcelExport` module from the `@syncfusion/ej2-schedule` package using the `Inject` method of the Scheduler component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs1" %}

### Exporting with custom fields

By default, the Scheduler exports all default event fields mapped through the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings) property. To limit exported fields, you can export only specific custom fields.

**To export custom fields:**
1. Define the required `fields` through the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings) interface
2. Pass the fields array as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method

**Example fields array:** `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs2" %}

### Exporting individual occurrences of a recurring series

By default, the Scheduler exports recurring events as a single parent record. To export each individual occurrence of a recurring series as separate records:

1. Set [`includeOccurrences`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions#includeoccurrences) to `true` in the [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions) interface
2. Pass the options as an argument to [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel)

> **Note:** The default value of [`includeOccurrences`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions#includeoccurrences) is `false`. Set it to `true` to expand recurring events into individual rows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs3" %}

### Exporting custom event data

By default, all events from the Scheduler's dataSource are exported. To export only specific events or a custom event collection:

1. Define the custom collection
2. Pass it through the [`customData`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions#customdata) option of the [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions) interface
3. Pass the options to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method

> **Note:** Without specifying `customData`, the Scheduler exports all events from its dataSource property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs4" %}

### Customizing column header with custom fields exporting

When exporting custom fields, you can customize the column headers using the [`fieldsInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions#fieldsinfo) option.

> **Tip:** The `fields` property alone exports defined fields without header customization. Use `fieldsInfo` with the [`ExportFieldInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportFieldInfo) interface to define custom header display names for each field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs5" %}

### Export with custom file name

The default exported file name is `Schedule.xlsx`. Customize it by setting `fileName` in [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions) and passing the options to [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs6" %}

### Excel file formats

The Scheduler supports exporting to both `.xlsx` (Excel) and `.csv` (Comma-Separated Values) formats.

**Supported formats:**
- `.xlsx` - Excel format (default)
- `.csv` - Comma-separated values format

To change the export format, set the `exportType` option in the [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions) interface to either `'xlsx'` or `'csv'`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs7" %}

### Custom separator in CSV

When exporting to CSV, the default separator is `,`. Change it by setting the [`separator`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions#separator) property in [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs8" %}

### How to customize the excel sheet on before exporting

Customizing an Excel sheet before export is made easy with the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/schedule#excelExport) event. This event provides users with robust flexibility to tailor the exported data, format it according to specific needs, and include additional elements for enhanced presentation.

With the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/schedule#excelExport) event, you can:

- **Adjust the formatting:** Apply specific styles such as font type, size, color, and cell formatting to make the output visually appealing and consistent with your requirements.

- **Customize headers and footers:** Personalize the Excel sheet by modifying the header and footer content, offering more control over the exported document.

- **Cancel the export:** The event supports cancellation of the export process by setting the `cancel` property to `true`. This feature ensures you can prevent export based on specific conditions, offering you full control over the Excel export workflow.

Here’s an example of how you can add a custom header and footer to an Excel sheet before exporting using the [`excelExport`](https://ej2.syncfusion.com/react/documentation/api/schedule#excelExport) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/excel-export-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/excel-export-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/excel-export-cs9/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/excel-export-cs9/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs9" %}

## Exporting calendar events as ICS file

Export Scheduler events to a calendar (.ics) file format compatible with Google Calendar, Outlook, and other standard calendar applications.

> **Important:** To export to ICS format, you must first import the `ICalendarExport` module from the `@syncfusion/ej2-schedule` package and inject it using the `Schedule.Inject(ICalendarExport)` method.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the  [`exportToICalendar`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoicalendar) public method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/calendar-export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/calendar-export-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/calendar-export-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/calendar-export-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-export-cs1" %}

### Exporting calendar with custom file name

By default, the calendar is exported with a file name `Calendar.ics`. To change this file name on export, pass the custom string value as `fileName` to the method argument so as to get the file downloaded with this provided name.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/calendar-export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/calendar-export-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/calendar-export-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/calendar-export-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-export-cs2" %}

## Import events from other calendars

Import events from external calendar files (.ics format) into the Scheduler using the [`importICalendar`](https://ej2.syncfusion.com/react/documentation/api/schedule#importicalendar) method.

> **Important:** To import ICS files, you must first import the `ICalendarImport` module from the `@syncfusion/ej2-schedule` package and inject it using the `Schedule.Inject(ICalendarImport)` method. The method accepts a `blob object` of the .ics file as a mandatory argument.

The following example shows how to import an ICS file into Scheduler, using the [`importICalendar`](https://ej2.syncfusion.com/react/documentation/api/schedule#importicalendar) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/calendar-import-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/calendar-import-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/calendar-import-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/calendar-import-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-import-cs1" %}

## How to print the Scheduler element

Print the Scheduler using the `print` client-side method. The method supports two approaches:

1. **Print without options** - Print the current view with default settings
2. **Print with options** - Print with customized layout and preferences

> **Important:** To enable printing, you must import the `Print` module from the `@syncfusion/ej2-react-schedule` package and inject it using `<Inject services={[Print]} />`.

### Using print method without options

Print the Scheduler with the current view using the [`print`](https://ej2.syncfusion.com/react/documentation/api/schedule#print) method without passing any options. This approach uses default print settings and prints all visible data in the current view.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/print-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/print-cs1" %}

### Using a print method with options

Customize the print output by passing options to the [`print`](https://ej2.syncfusion.com/react/documentation/api/schedule/index-default#print) method. This allows you to control which data is printed, customize the layout, and tailor the output to your specific needs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/print-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/print-cs2" %}

### How to customize the print layout

Use the [`beforePrint`](https://ej2.syncfusion.com/react/documentation/api/schedule#beforePrint) event to customize the print layout without affecting the actual Scheduler layout or data. This event provides the HTML element used for printing, allowing you to tailor it before the print operation.

**Key customization options:**
- **Header and footer** - Add custom content (company name, date, page numbers, etc.)
- **Layout control** - Fine-tune content to ensure clean, structured output
- **Print cancellation** - Set `cancel` to `true` to prevent printing based on conditions

> **Tip:** The `beforePrint` event gives you full control over the print operation. You can modify the HTML, add branding, or cancel the print action entirely.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/print-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/print-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/print-cs3" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Excel Export Documentation](https://ej2.syncfusion.com/react/documentation/schedule/exporting)
* [ICalendar Export/Import](https://ej2.syncfusion.com/react/documentation/api/schedule/index-default#exporttoicalendar)
* [Print Functionality Guide](https://ej2.syncfusion.com/react/documentation/schedule/exporting#how-to-print-the-scheduler-element)
* [Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
