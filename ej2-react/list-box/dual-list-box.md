---
layout: post
title: Dual Listbox in React ListBox | Syncfusion
description: Build a React dual list box with toolbar buttons to move, reorder, and bulk-transfer selected items between two synchronized lists.
control: Dual list box
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dual Listbox in React ListBox

The dual React ListBox enables users to move items between two list boxes using toolbar buttons. Create a dual ListBox by configuring items in the [`toolbarSettings`](https://ej2.syncfusion.com/react/documentation/api/list-box/#toolbarsettings) property along with the `scope` property.

The following operations are available in dual ListBox:

| Options | Description |
|------|-------------|
| moveUp | Move the selected item in the upward direction within the React ListBox. |
| moveDown | Move the selected item in the downward direction within the React ListBox. |
| moveTo |  Move the selected item to the another React ListBox. |
| moveFrom | Move the selected item from one React ListBox to the another React ListBox. |
| moveAllTo | Move all the items to the another React ListBox. |
| moveAllFrom |  Move all the items from one React ListBox to the another React ListBox. |

The following example illustrates how to move items from `Group A` to `Group B` React ListBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/dual-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/dual-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/dual-listbox-cs1" %}