---
layout: post
title: Working with data in React Chart | Syncfusion
description: Learn how to bind local, remote, and observable data sources to Syncfusion React Chart and map fields to series and axes.
control: Working with data
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Working with data in React Chart

The [React Charts](https://www.syncfusion.com/react-components/react-charts) component supports multiple data binding approaches to suit different application scenarios. Data can be bound from local JSON arrays, dynamically loaded on demand with lazy loading, fetched from remote services using various adaptor patterns, or handled when the dataset is missing or contains empty points. This guide covers all available data binding methods and additional scenarios, helping you choose the right approach for your use case based on data size, performance requirements, and backend architecture.

## Choosing a data binding approach

| Method | Best for | Advantages | Considerations |
|--------|----------|------------|-----------------|
| **Local data** | Small to medium datasets | Simple setup, no network latency, instant rendering | All data must be in memory |
| **Common datasource** | Multiple series sharing data | Reduces redundancy, single update point | Limited to data common across series |
| **Lazy loading** | Large datasets with scrolling | Loads only visible data, better performance | Requires server-side pagination |
| **Remote data (OData / Web API)** | Backend-driven data | Scalable, centralized data management, real-time updates | Network latency, requires service setup |
| **Custom adaptor** | Non-standard backends | Full control over request/response handling | More code to maintain |
| **Offline mode** | Data caching with client-side actions | Eliminates repeated requests, faster interactions | Initial load time, memory constraints |
| **Empty points** | Datasets with missing values | Gracefully renders gaps instead of errors | Requires configuration of `emptyPointSettings` |
| **No data template** | Empty or loading states | Displays a custom message or layout | Replaced automatically when data arrives |

## Local data

Bind simple JSON data to the chart using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#datasource) property in the series configuration. The `dataSource` accepts an array of objects, an array of arrays, or the result of a JSON parse. Map fields on each data object to the [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#yname) properties to specify which data fields represent the x and y axis values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs8" %}

## Lazy loading

Lazy loading enables on-demand data retrieval, loading only the data required for the currently visible range of the chart. The chart fires the `scrollEnd` event at the end of every scroll interaction and the `scrollStart` event at the beginning. To enable lazy loading, wire up both events and, in the `scrollEnd` handler, read the `currentRange` minimum and maximum values, request the corresponding data from the server, and append the result to the existing data source. This approach is ideal for large datasets that would be expensive to load entirely into memory.

**How lazy loading works:**
1. Scroll the chart to view a different data range.
2. The `scrollEnd` event fires with the current axis range information.
3. Fetch the corresponding data from the server using the minimum and maximum values from the axis range.
4. Update the React state with the combined dataset (existing data + newly fetched data).
5. The chart re-renders automatically with the updated data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs9" %}

### Common datasource

Bind the same JSON data to all series by setting the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart#datasource) property at the chart level instead of the series level. This approach is useful when multiple series share the same dataset and you want to update data from a single source. Each series independently maps its own [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#yname) properties to the common data fields.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs10" %}

## Remote data

Bind remote data from a web service by using the `DataManager` class. The `DataManager` simplifies communication with REST APIs, OData services, and custom web endpoints. It requires minimal configuration—typically just the service URL and an appropriate adaptor—and then handles all request and response processing. Import the class from `@syncfusion/ej2-data`, assign a `DataManager` instance to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#datasource) property in the series, and map the response fields to [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesmodel#yname). Use the optional [`query`](https://ej2.syncfusion.com/react/documentation/api/query) property of the `DataManager` to filter, sort, or paginate data on the server.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs11" %}

## Binding data using ODataAdaptor

[OData](https://www.odata.org/documentation) is a standardized protocol for creating and consuming data via REST APIs. Use the `ODataAdaptor` with `DataManager` to retrieve data from OData v3 services. The adaptor automatically constructs the correct query syntax and handles all standard OData conventions. Construct it as `new DataManager({ url: 'https://service/odata/', adaptor: new ODataAdaptor() })`.

**Example use case:** Querying a product sales service that implements OData v3 filtering, sorting, and pagination.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs14" %}

## Binding data using ODataV4Adaptor

ODataV4 is an improved and more standardised version of the OData protocol. It provides enhanced query capabilities and improved JSON support over OData v3. Use the `ODataV4Adaptor` to consume ODataV4 services. For more information on ODataV4 specifications, refer to the [OData v4 documentation](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html).

**When to use ODataV4Adaptor:** If your backend service implements OData v4, prefer this adaptor over the older `ODataAdaptor` for better compliance and features.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs15" %}

## Web API adaptor

Use the `WebApiAdaptor` to consume custom REST APIs that follow a standard response format. This adaptor is ideal for backends that do not implement OData, but provide REST endpoints returning JSON data.

**Expected response format**

The Web API must return a JSON object with two properties:
- `Items` - Array of data objects for the chart.
- `Count` - Total number of records (useful for pagination).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs16" %}

**Example response:**

The Web API should structure its response as shown below. The `Items` array contains the actual data records, and `Count` indicates the total available records (supporting server-side pagination).

```
{
    "Items": [{..}, {..}, {..}, ...],
    "Count": 830
}
```

## Custom adaptor

Create a custom adaptor by extending one of the built-in adaptors (typically `ODataAdaptor`) to add custom logic for request and response handling. Override the `processResponse(data, ds, query, xhr)` method to transform or enrich the response data. The method receives the raw server response and must return the processed data array. Common use cases include adding a `serialNumber` field, reformatting dates, or adding computed fields before the chart renders the data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="serialnoadaptor.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs17/app/serialNoAdaptor.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="serialnoadaptor.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs17/app/serialNoAdaptor.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs17" %}

## Offline mode

When using remote data binding, all filtering, sorting, and pagination normally happen on the server. To improve responsiveness and reduce server load, enable offline mode: the chart loads all data once during initialization, then handles all interactions client-side. Set the `offline` property of `DataManager` to `true` to activate this behavior.

**Use offline mode when:**
- Your dataset is relatively small (fits comfortably in browser memory).
- You want instant filtering and sorting without server round-trips.
- Network latency is a significant usability concern.
- You prefer to minimize server requests during user interactions.

**Caution:** Offline mode loads the entire dataset at once, which may impact initial load time and memory usage for large datasets.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs18" %}

## Empty points

Data points with `null` or `undefined` values are interpreted as empty points. Empty data points are skipped and not rendered in the chart. Customize empty points with the [`emptyPointSettings`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel) property in the series configuration. By default, empty points create a gap in the series line or bar.

**Default behavior:** Empty points use the `Gap` mode, which leaves a blank space in the chart visualization.

**Available modes**

The `mode` property of `emptyPointSettings` accepts the following values:

* `Gap` - Leaves a blank space in the chart.
* `Zero` - Treats the empty point as zero.
* `Average` - Replaces the empty point with the average of neighboring points.
* `Drop` - Drops the data point from the chart entirely.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs12" %}

**Empty point color**

Assign a specific color to empty points by setting the [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/emptypointsettingsmodel#fill) property in the `emptyPointSettings` object. This allows you to visually distinguish empty data points from regular data in your chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs13" %}

## Handling no data

When the chart has no data available to render, use the [`noDataTemplate`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#nodatatemplate) property to display a custom layout within the chart area. This template can include messages, images, icons, or interactive elements (such as a load button) to guide the user. The template maintains design consistency and improves user experience when data is unavailable. When data becomes available, the chart automatically replaces the template with the visualization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/series/column-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/series/column-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/column-cs20" %}

## Troubleshooting

**CORS errors when binding remote data**

The browser blocks the request if the remote service does not return appropriate CORS headers. Enable CORS on the server or proxy the request through your application.

**`DataManager is not defined`**

`DataManager` and the adaptors are exported from `@syncfusion/ej2-data`. Install the package and import the symbols you use, for example `import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';`.

**Empty chart with no errors**

Verify that the response field names match the values set on `xName` and `yName`. Field matching is case-sensitive.

**Lazy loading never appends new data**

Make sure the `scrollEnd` event is wired up and that you are updating the React state with the combined dataset, not mutating the array in place. The chart re-renders only when the data source reference changes.
