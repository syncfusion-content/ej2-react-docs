---
layout: post
title: Data compression in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table compresses repeated members in rows and columns to reduce render time on large relational data sources.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Data compression in React Pivot Table

> This property is applicable only for the relational data source.

When binding large volumes of raw data, the pivot table processes all raw data to generate aggregated data during initial rendering and report manipulation. However, with data compression enabled, the input raw data is compressed based on its unique values, and the pivot table uses the final compressed raw data. The compressed raw data is then used for all subsequent operations, reducing the looping complexity and improving the performance of the pivot table. For example, if the pivot table connects to one million raw data records that compress to 1,000 unique raw data records, it will render significantly faster—potentially within 3 seconds rather than 10 seconds, depending on the data complexity and system performance. Enable this option by setting [allowDataCompression](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#allowdatacompression) to **true** on the Pivot Table component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs309/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs309/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs309" %}

**Limitations during data compression:**

- The following aggregation types are not supported:
  - Average
  - PopulationStDev
  - SampleStDev
  - PopulationVar
  - SampleVar
- If any of the above aggregation types are used, they will be automatically converted to **"Sum"** aggregation.
- **"DistinctCount"** will function as **"Count"** aggregation type.
- In a calculated field, existing fields can be inserted without changing their default aggregation type. Even if the aggregation type is changed, it will revert to the default aggregation type for calculation purposes.

## See Also

* [Performance Optimization in React Pivot Table with Data Compression](https://www.syncfusion.com/blogs/post/performance-optimization-in-react-pivot-table)