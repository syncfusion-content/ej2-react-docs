---
layout: post
title: Performance tips for React Pivot Table component | Syncfusion
description: Checkout and learn here all about best practices to improve the performance of the Syncfusion React Pivot Table component and much more.
platform: ej2-react
control: Performance best practices
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Best practices to improve the performance of the Pivot Table

Performance optimization is crucial when working with large datasets in the [Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table). This documentation provides some best practices to empower your data analysis and enhance the user experience.

## How do I improve the loading performance of the Pivot Table?

When working with large datasets, you can use the following options to improve the loading performance of the Pivot Table and provide a smoother user experience.

### Virtual scrolling

Virtual scrolling improves the performance of the Pivot Table when working with large datasets by only displaying the rows and columns that are currently visible in the viewport. This approach reduces initial load time and memory usage, as the control processes only the data currently in view. As you scroll vertically or horizontally, additional data loads automatically in the background. For detailed guidance on implementing virtual scrolling in the Pivot Table, see the [virtual scrolling documentation](https://ej2.syncfusion.com/react/documentation/pivotview/virtual-scrolling).

### Paging

Paging helps you display large datasets efficiently by breaking them into smaller, manageable pages instead of loading all data at once. When your browser's maximum pixel height prevents you from using the Pivot Table with virtual scrolling, the paging option provides an excellent alternative. This approach significantly improves loading performance and ensures smooth navigation through your data.

To enable paging in your Pivot Table, set the [`allowPaging`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowpaging) property to **true** and configure the [`pageSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pagesettings) to control the number of records displayed per page. For implementation details, refer to the [paging documentation](https://ej2.syncfusion.com/react/documentation/pivotview/paging).

### Server-side engine

Connecting your application to an external service for fetching a large dataset (referred to as input data), such as one million records for the Pivot Table, may take considerable time due to network bandwidth limitations when transmitting data from server-side to client-side.

Therefore, we highly recommend using our server-side engine for rendering the Pivot Table with a large amount of data instead of the built-in engine.

Typically, in this approach, the Pivot Table component and its report are defined and often modified on the client-side (browser), while the pivot engine is implied and hosted in a dedicated web service (Web API) known as the server-side engine. Here, the server-side engine can directly connect to your data source, swiftly collect the input data (referred to as input raw data), and, based on the provided report by the Pivot Table through UI interactions periodically, the server-side engine performs all pivot-oriented calculations internally. It then transmits only aggregated data for Pivot Table display to the client-side (browser). This approach minimizes network bandwidth usage and enhances Pivot Table rendering.

In case a large amount of aggregated data is sent to the client-side from the web service (Web API), the server-side engine offers the option to enable virtual scrolling or paging. This feature generates aggregated data exclusively for the current viewport of the Pivot Table, further optimizing network bandwidth and rendering performance.

Additionally, the cache concept is implemented in the server-side engine to hold the pivot engine's instance based on the end-user GUID. This allows for quick retrieval, calculation, and re-sending of modified pivot data to the Pivot Table viewport, based on the UI action performed.

For more information on implementing the server-side engine in the Pivot Table, please refer to the documentation [here](https://ej2.syncfusion.com/react/documentation/pivotview/server-side-pivot-engine).

## How can I enhance the performance of the Pivot Table through data operations?

### Data compression

If your input data (referred to as input raw data) contains a large number of repeated records, the data compression option becomes particularly useful.

In this approach, based on the pivot report defined in the data source settings and with the data compression option enabled, all the input data is initially iterated. Repetitive records are then summarized, reducing the overall input data for all further pivot calculations. For example, if there are 1000 records with 400 records being repeated, data compression will clean up and result in 600 unique records for every future pivot calculations. Now, consider the impact with one million records and how useful it will be.

The limitation here is that during the initial rendering of the Pivot Table alone, data compression will work by taking slightly extra time to summarize and reduce overall input data. However, for subsequent uses, it will be very quick, with reduced input data. Nevertheless, it is more advantageous since it's a one-time process.

Additionally, it works with the virtual scrolling or paging option enabled as well.

N> If your input data has very few repeated records, we would not suggest this option.

For more information on implementing the data compression in the Pivot Table, you can refer to the documentation [here](https://ej2.syncfusion.com/react/documentation/pivotview/data-compression).

### Defer layout update

The Defer Layout Update feature in the Pivot Table allows end-users to perform various operations, such as adding, removing, and rearranging fields, filtering, sorting, changing aggregation types, and more, without immediately updating the Pivot Table. The efficiency of this process lies in allowing end-users to complete their modifications. The final application of these changes occurs when end-users click the **Apply** button in the Field List UI. This action triggers the Pivot Table to update based on the last modified report. By deferring the layout update until precisely requested, the React Pivot Table remains unchanged initially, ensuring minimal resource utilization and avoiding frequent re-rendering until the end-user explicitly applies the modifications.

For more information on defer layout updates, you can refer to the documentation [here](https://ej2.syncfusion.com/react/documentation/pivotview/defer-update).

### Sorting

During the initial rendering phase, applying sorting to fields other than the string data type, particularly those with a large number of members, may lead to increased processing time for the pivot engine due to internal calculations. To enhance performance without compromising the final outcome, it is advisable to refrain from using sorting options at this stage. Alternatively, load the input raw data into the data source settings in the desired order for display in the Pivot Table.

Once the input raw data is arranged as needed and the Pivot Table is rendered, it is recommended to restrict the use of sorting operations for runtime performance optimization. This approach ensures efficient processing and responsive performance while still achieving the desired presentation in the Pivot Table.

### Member filtering

When working with large datasets, it's beneficial to set a display limit for members in the filter dialog UI. This allows the filter dialog to quickly show members up to the specified limit without facing performance issues. If there are more members beyond this limit, a message displaying the count of remaining members will appear at the bottom of the filter dialog UI. End users can then access the remaining members using the search option provided in the filter dialog during runtime. For detailed instructions on implementing the node limit in the filter dialog UI, refer to the documentation linked [here](https://ej2.syncfusion.com/react/documentation/pivotview/filtering#performance-tips).

### Grouping

Using the Pivot Table's built-in grouping feature to group date, number, and string data type fields is not often recommended.

Here is an example below of how the [groupSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/groupSettings/#groupsettings) tag has been used to configure grouping for the available fields using code-behind. The date and number grouping have been set to the fields "Date" and "Id", respectively.

It obviously impacts the overall performance during Pivot Table rendering because it always consumes the input raw data, splits, redefines, and provides modified input raw data based on the fields in the report that will be used for further pivot calculations.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/pivot-table/performance-best-practices-cs1" %}

To avoid this performance constraint, we recommend passing the input raw data along with pre-processed group field sets based on your grouping needs. For example, if your input raw data has a date field "Date" with the value "15/AUG/2019 03:41 PM" and you want to display it as the year and month alone, split out the date field as "Date_Year" = "15/AUG/2019" for the year and "Date_Month" = "15/AUG/2019" for the month. Further use the [formatSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#formatsettings) property to show these date fields with the chosen date format. Similarly, to group a number field, just alter its value based on your requirements (e.g., 1–5, 6–10).

Here's an example below of configuring grouping in your input raw data and assigning it to the Pivot Table's data source. In the code below, the fields "Date_Year," "Date_Month," and "Id" are created and updated in the provided input raw data and have been specified for the date and number grouping. Additionally, the date formatting has been applied to these specified date group fields using the [formatSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#formatsettings).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/performance-best-practices-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/pivot-table/performance-best-practices-cs2" %}

### Value filtering

The [value filtering](https://ej2.syncfusion.com/react/documentation/pivotview/filtering#value-filtering) primarily operates on grand totals, meaning the filtering process considers entire rows and columns to match applied value conditions. For similar results with more flexibility and better performance, consider exploring our label filtering or member filtering options. These alternatives can yield comparable outcomes, particularly when dealing with large datasets. You can find more information on utilizing the [label filtering](https://ej2.syncfusion.com/react/documentation/pivotview/filtering#label-filtering) or [member filtering](https://ej2.syncfusion.com/react/documentation/pivotview/filtering#member-filtering) options in the documentation section dedicated to these features.

## How do I improve the scrolling performance of the Pivot Table?

### Virtual scrolling with single page mode

By default, the Pivot Table with virtual scrolling renders not only the current view page but also the previous and next pages. However, by using single-page mode along with virtual scrolling, only the rows and columns relevant to the current view page are rendered. This optimization significantly enhances the scrolling performance of the Pivot Table. For more information on implementing this feature, you can refer to the documentation [here](https://ej2.syncfusion.com/react/documentation/pivotview/virtual-scrolling#virtual-scrolling-with-single-page-mode).

### Limiting the component size

Displaying too many rows and columns in a Pivot Table at once can slow performance and increase memory usage. To keep the Pivot Table responsive, set a specific [height](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotViewModel/#width) for the Pivot Table, such as 600px by 1000px. This limits the number of rows and columns loaded in the current view. When setting these values, render only the Pivot Table, excluding the grouping bar, toolbar, and other additional UI elements.
       
N> Normally, pixel units are preferred, ensuring more accurate page calculations compared to using percentage units, which involve additional computations for determining page as well as row and column sizes.

