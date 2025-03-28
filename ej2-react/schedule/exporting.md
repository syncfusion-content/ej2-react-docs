---
layout: post
title: Exporting in React Schedule component | Syncfusion
description: Learn here all about Exporting in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting in React Schedule component

The Scheduler supports exporting all its appointments both to an Excel or ICS extension file at client-side. It offers different client-side methods to export its appointments in an Excel or ICal format file. Let's look onto the ways on how to implement the exporting functionality in Scheduler.

## Excel Exporting

The Scheduler allows you to export all its events into an Excel format file by using the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) client-side method. By default, it exports all the default fields of Scheduler mapped through [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings/)  property.

> Before you start with excel exporting functionality, you need to import and inject the `ExcelExport` module from the `@syncfusion/ej2-schedule` package using the `Inject` method of Scheduler.

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

By default, Scheduler exports all the default event fields that are mapped to it through the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings/) property. To limit the number of fields on the exported excel file, it provides an option to export only the custom fields of the event data. To export such custom fields alone, define the required `fields` through the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings/) interface and pass it as argument to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method as shown in the following example. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

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

By default, the Scheduler exports recurring events as a single data by exporting only its parent record into the excel file. If you want to export each individual occurrences of a recurring series appointment as separate records in an Excel file, define the [`includeOccurrences`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/#includeoccurrences) option as `true` through the [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/) interface and pass it as argument to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method. By default, the [`includeOccurrences`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/#includeoccurrences) option is set to `false`.

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

By default, the whole event collection bound to the Scheduler gets exported as an excel file. To export only specific events of Scheduler or some custom event collection, you need to pass those custom data collection as a parameter to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method as shown in this following example, through the [`customData`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/#customdata) option of [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/) interface.

> By default, the event data are taken from Scheduler dataSource.

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

Using fields property, we can only export the defined fields into excel without customizing the header. Now we can provide the alternate support to customize the header of custom fields exporting using the [`fieldsInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/#fieldsinfo) option through the [`ExportFieldInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportFieldInfo/) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method as shown in the following example.

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

By default, the Scheduler allows you to download the exported Excel file with a name `Schedule.xlsx`. It also provides an option to export the excel file with a custom file name, by defining the desired `fileName` through the [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/) interface and passing it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/react/documentation/api/schedule#exporttoexcel) method.

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

By default, the Scheduler exports event data to an excel file in the `.xlsx` format. You can also export the Scheduler data in either of the file type such as `.xlsx` or `csv` formats, by defining the `exportType` option as either `csv` or `xlsx` through the [`ExportOptions`](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/) interface. By default, the `exportType` is set to `xlsx`.

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

The Scheduler exports the event data to CSV format with `,` as separator. You can change separator by setting [separator](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/#separator) property in [ExportOptions](https://ej2.syncfusion.com/react/documentation/api/schedule/exportOptions/#exporttype).

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

You can export the Scheduler events to a calendar (.ics) file format, and open it on any of the other default calendars such as Google or Outlook. To export the events of Scheduler to an ICS file, you need to first import the `ICalendarExport` module from `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarExport)` method.

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

The events from external calendars (ICS files) can be imported into Scheduler by using the [`importICalendar`](https://ej2.syncfusion.com/react/documentation/api/schedule#importicalendar) method. This method accepts the `blob object` of an .ics file to be imported, as a mandatory argument.

> To import an ICS file containing events into Scheduler, you need to first import the `ICalendarImport` module from `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarImport)` method.

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

The Scheduler allows you to print the Scheduler element by using the `print` client-side method. The print method works in two ways. You can find it below.

* Using print method without options.
* Using a print method with options.

> To print the Schedule, you need to import the `Print` module from the `@syncfusion/ej2-react-schedule` package and then inject it using `<Inject services={[Print]} />`.

### Using print method without options

You can print the Schedule element with the current view by using the[`print`](https://ej2.syncfusion.com/react/documentation/api/schedule#print) method without passing the options. The following example shows how to print the Scheduler using the `print` method without passing options.

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

You can print the Schedule element based on your needs using the `print` method by passing the print options used in this example with its values. The following example shows how to print the Scheduler using the `print` method by passing the options.

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

The [`beforePrint`](https://ej2.syncfusion.com/react/documentation/api/schedule#beforePrint) event enables users to customize the print layout of the Scheduler control without altering the actual schedule layout or data. This event returns the HTML element used for printing, which can be tailored based on specific requirements before the print operation is triggered. Additionally, users can prevent the print action by setting the `cancel` property to `true`, giving them full control over when and how the print operation takes place.

Key customization options include:

- **Customizing the header and footer:** Add custom header and footer content of the print layout to include additional information.
- **Controlling print output:** Fine-tune the layout to ensure that only the necessary details are printed, ensuring a clean and structured printout.

Here’s an example of how you can add a custom header and footer to the print layout using the [`beforePrint`](https://ej2.syncfusion.com/react/documentation/api/schedule#beforePrint) event.

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

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/material/schedule/overview) to knows how to present and manipulate data.
