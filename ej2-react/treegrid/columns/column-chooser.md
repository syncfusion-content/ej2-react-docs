---
layout: post
title: Column Chooser in React Treegrid component | Syncfusion
description: Learn here all about Column Chooser in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Column Chooser 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column Chooser in React Treegrid component

## Column Chooser Template in Syncfusion React TreeGrid

The Column Chooser Template feature allows full customization of the column chooser’s header, content, and footer, making it easier to manage column visibility. To enable the column chooser, set [showColumnChooser](https://ej2.syncfusion.com/react/documentation/api/treegrid/#showcolumnchooser) to **true** and add **ColumnChooser** to the [toolbar](https://ej2.syncfusion.com/react/documentation/api/treegrid#toolbar) property.

To implement a custom column chooser template in the TreeGrid, use the following properties:

* **columnChooserSettings.headerTemplate** - Defines the header template of the column chooser.

* **columnChooserSettings.template**- Defines the content template.

* **columnChooserSettings.footerTemplate** - Defines the footer template.

In this example, a Syncfusion TreeView component is rendered inside the column chooser. To use the TreeView component, install the Syncfusion TreeView package as described in the [documentation](https://ej2.syncfusion.com/react/documentation/treeview/getting-started). The `columnChooserSettings.template` property is used to render the TreeView component with checkboxes.Checkbox selection is handled using the [nodeClicked](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeclicked) and [keyPress](https://ej2.syncfusion.com/react/documentation/api/treeview#keypress) events, which organize columns into **Order Details**, **Shipping Details**, and **Delivery Status**.

The column chooser footer is customized using `columnChooserSettings.footerTemplate`, replacing the default buttons with customized **Apply** and **Close** buttons. The **Apply** button updates column visibility based on selection, while the **Close** button closes the column chooser via the `onClick` event. Additionally, the header is customized using `columnChooserSettings.headerTemplate` to include a title and an icon.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs23/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "http://127.0.0.1:4000/ej2-react/code-snippet/treegrid/column-cs23" %}