---
layout: post
title: Virtual scroll in React TreeGrid | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Virtual scroll
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in React TreeGrid

TreeGrid loads large data sets without performance degradation. To enable virtualization, inject `VirtualScrollService` in the TreeGrid.

## Row virtualization

Row virtualization loads and renders only the rows within the content viewport. It serves as an alternative to paging; rows are appended during vertical scrolling. To set up row virtualization, set [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablevirtualization) to true and define the content height using the [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) property.  

The number of records displayed is determined by the content area height, and a buffer of records is maintained in the TreeGrid content in addition to the visible rows.  

Expand and collapse state of any child record is persisted.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/virtualscroll-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/virtualscroll-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/virtualscroll-cs1" %}

### Limitations

* Row virtual scrolling is not compatible with the following features:
  1. Batch editing
  2. Checkbox selection
  3. Detail template
  4. Row template
  5. Rowspan
  6. Autofill

* A static height must be set for the component or its parent container when using row virtualization. A 100% height works only if the component height is set to 100% and its parent container has a static height.
* When row virtual scrolling is active, copy-paste and drag-and-drop operations apply only to the data items visible in the current viewport.
* Cell-based selection is not supported with row virtual scrolling.
* Variable row heights caused by template columns are not supported when template heights differ per row.
* Due to browser element height limits, the maximum number of records loaded is constrained by browser capabilities.
* TreeGrid content height is calculated using row height and total record count; therefore, features that change row height (such as text wrapping) are not supported.
* To increase row height to accommodate content while keeping a consistent height across rows, specify a row height as shown below:
```css
.e-treegrid .e-row {
  height: 2em;
}
```

## Column virtualization

Column virtualization renders only the columns within the current viewport, and other columns are rendered on demand during horizontal scrolling.
 
To set up column virtualization, set both [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablevirtualization) and [enableColumnVirtualization](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablecolumnvirtualization) to **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/virtualscroll-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/virtualscroll-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/virtualscroll-cs2" %}

> Column's [width](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#width) is required for column virtualization. If a column width is not defined, TreeGrid considers `200px`.

### Limitations

* With column virtual scrolling, column width must be in pixels; percentage values are not supported.
* Selected column details are retained only within the viewport. When the next set of columns loads, selection for previously visible columns is cleared.
* Cell selection is not supported with column virtual scrolling.
* The keyboard shortcuts **Ctrl + Home** and **Ctrl + End** are not supported with column virtual scrolling.
* The following features are compatible with column virtualization and operate only within the viewport:
  1. Column resizing
  2. Column reordering
  3. Auto-fit
  4. Print
  5. Clipboard
  6. Column menu — Column chooser, AutofitAll

* Column virtual scrolling is not compatible with the following features:
  1. Colspan
  2. Batch editing
  3. Checkbox selection
  4. Column with infinite scrolling
  5. Stacked header
  6. Row template
  7. Detail template
  8. Autofill
  9. Column chooser

> Refer to the [React Tree Grid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.