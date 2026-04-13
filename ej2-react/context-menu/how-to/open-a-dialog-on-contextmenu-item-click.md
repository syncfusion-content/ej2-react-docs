---
layout: post
title: Open Dialog on Context Menu Item Click in React | Syncfusion
description: Learn here all about Open a dialog on contextmenu item click in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open Dialog on Context Menu Click in react

This section explains how to open a dialog when a ContextMenu item is clicked. This integration is commonly used for modal workflows, form interactions, and confirmation dialogs. The functionality is achieved by handling the dialog opening logic in the [`select`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#select) event of the ContextMenu component.

When a ContextMenu item is selected, the `select` event provides access to the clicked item's details, allowing you to conditionally open dialogs based on the selected menu option. This pattern is particularly useful for actions that require additional user input or confirmation before execution.

In the following sample, a Dialog will open when clicking the `Save As...` menu item:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/dialog-open-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/dialog-open-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/dialog-open-cs1" %}
