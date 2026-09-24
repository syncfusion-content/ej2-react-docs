---
layout: post
title: Drag and Drop in React ListBox | Syncfusion
description: Enable drag and drop in the React ListBox to reorder items within one list or move selected items between multiple lists, with dragStart, drag, and drop events.
control: Drag and drop
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in React ListBox

The React ListBox supports dragging individual items or groups of selected items within the same React ListBox or between multiple React ListBoxes.

Customize drag and drop behavior using the following events:

| Events | Description |
|------|------|
| [`dragStart`](https://ej2.syncfusion.com/react/documentation/api/list-box/#dragstart) | Triggers when the selected element is being dragged. |
| [`drag`](https://ej2.syncfusion.com/react/documentation/api/list-box/#drag) | Triggers when the selected element is being dragged. |
| [`drop`](https://ej2.syncfusion.com/react/documentation/api/list-box/#drop) | Triggers when the selected element is being dropped. |

## Single listbox

Enable drag and drop within a single React ListBox by setting the [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/list-box/#allowdraganddrop) property to `true`.

The following example demonstrates dragging and dropping items within the same React ListBox:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs6" %}

## Multiple listbox

Enable drag and drop between React ListBoxes by setting the `allowDragAndDrop` property to `true` and configuring the same [`scope`](https://ej2.syncfusion.com/react/documentation/api/list-box/#scope) value for both React ListBoxes.

In the following example, `allowDragAndDrop` is set to `true` and `scope` is set to `combined-list` to enable drag and drop between both React ListBoxes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/multiple-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/multiple-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/multiple-listbox-cs1" %}

## Dual ListBox with drag and drop

Enable toolbar and drag and drop actions between two React ListBoxes by assigning a unique ID to each React ListBox and setting the same [`scope`](https://ej2.syncfusion.com/react/documentation/api/list-box/#scope) property value:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/dual-drag-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/dual-drag-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/dual-drag-listbox-cs1" %}