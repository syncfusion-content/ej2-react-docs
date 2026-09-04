---
layout: post
title: How to open a dialog on Context Menu click in React | Syncfusion
description: Open a Dialog from a React Context Menu item by handling the `select` event and conditionally showing the dialog based on the clicked item.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to open a Dialog on Context Menu click in React

This section explains how to open a Dialog when a React Context Menu item is clicked. This integration is commonly used for modal forms and confirmations. The functionality is achieved by handling the Dialog opening logic in the [`select`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#select) event of the React Context Menu component.

When a React Context Menu item is selected, the `select` event provides access to the clicked item's details, enabling conditional Dialog opening based on the selected menu option.

In the following sample, a Dialog opens when the user clicks the **Save As...** menu item. The Dialog displays the content "This file can be saved as PDF" and a Submit button that closes it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/dialog-open-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/dialog-open-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/dialog-open-cs1" %}

