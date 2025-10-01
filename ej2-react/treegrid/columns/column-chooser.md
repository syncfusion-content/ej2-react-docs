---
layout: post
title: Column Chooser in React TreeGrid | Syncfusion
description: Learn about configuring and customizing the Column Chooser in the Syncfusion React TreeGrid, including header, content, and footer templates.
control: Column Chooser 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Chooser in React Treegrid component

## Column Chooser Template in Syncfusion React TreeGrid

The Column Chooser Template feature enables full customization of the column chooser header, content, and footer to manage column visibility. To enable the column chooser, set [showColumnChooser](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showcolumnchooser) to true and include ColumnChooser in the [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbar) property.

To implement a custom column chooser template in the TreeGrid, use the following properties:

* **columnChooserSettings.headerTemplate**: Defines the header template.
* **columnChooserSettings.template**: Defines the content template.
* **columnChooserSettings.footerTemplate**: Defines the footer template.

In this example, the Syncfusion TreeView component is rendered inside the column chooser. To use the TreeView component, install the Syncfusion TreeView package as described in the [TreeView getting started](https://ej2.syncfusion.com/react/documentation/treeview/getting-started) documentation. The `columnChooserSettings.template` property renders the TreeView with checkboxes. Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/react/documentation/api/treeview/#nodeclicked) and [keyPress](https://ej2.syncfusion.com/react/documentation/api/treeview/#keypress) events, organizing columns into  **Order Details**, **Shipping Details**, and **Delivery Status**.

The column chooser footer is customized using `columnChooserSettings.footerTemplate`, replacing default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on the selected nodes, and the **Close** button dismisses the dialog via the `onClick` event. The header is customized using `columnChooserSettings.headerTemplate` to include a title and an icon.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs23/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs23" %}