---
layout: post
title: Tool bar in React Gantt component | Syncfusion
description: Learn here all about Tool bar in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Tool bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in React Gantt component

The Gantt component provides the toolbar support to handle Gantt actions. The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbar) property accepts the collection of built-in toolbar items and `ItemModel` objects for custom toolbar items.

## Built-in toolbar items

Built-in toolbar items execute standard actions of the Gantt component, and these items can be added to toolbar by defining the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbar) as a collection of built-in items. It renders the button with icon and text.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new record. |
| Cancel | Cancels the edit state. |
| CollapseAll | Collapses all the rows. |
| Delete | Deletes the selected record. |
| Edit | Edits the selected record. |
| Indent | Indent the selected record to one level.|
| Outdent | Outdent the elected record to one level.|
| ExpandAll | Expands all the rows. |
| NextTimeSpan | Navigate the Gantt timeline to next time span. |
| PrevTimeSpan | Navigate the Gantt timeline to previous time span. |
| Search | Searches the records by the given key. |
| Update | Updates the edited record. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/toolbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/toolbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/toolbar-cs1" %}

> * The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added to the toolbar by defining the [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbar) property as a collection of `ItemModels`.
Actions for this customized toolbar items are defined in the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbarclick) event.

You can check this video to learn about how to use custom toolbar in Gantt.

{% youtube "https://www.youtube.com/watch?v=llhPqZOsLdY&t=123s" %}

By default, the custom toolbar items are at left position. You can change the position by using the `align` property. In the following sample, the `Quick Filter` toolbar item is positioned at right.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customtoolbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customtoolbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customtoolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customtoolbar-cs1" %}

> * The [`toolbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Built-in and custom items in toolbar

The Gantt component has an option to use both built-in and custom toolbar items at the same time.

In the following example, the `ExpandAll` and `CollapseAll` are built-in toolbar items and `Test` is the custom toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/defaultandCustomtoolbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/defaultandCustomtoolbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/defaultandCustomtoolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/defaultandCustomtoolbar-cs1" %}

## Enable/disable toolbar items

You can enable or disable the toolbar items by using the `enableItems` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/enabledisableToolbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/enabledisableToolbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/enabledisableToolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/enabledisableToolbar-cs1" %}

## Add input elements in Toolbar

In Gantt toolbar, it is possible to add EJ2 editor elements like numeric text box, dropdown list and date picker components. The following code snippets explains how to add EJ2 editors in Gantt toolbar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/customToolbarItems-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/customToolbarItems-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customToolbarItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customToolbarItems-cs1" %}
