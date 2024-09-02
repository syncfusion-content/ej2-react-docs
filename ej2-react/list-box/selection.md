---
layout: post
title: Selection in React List box component | Syncfusion
description: Learn here all about Selection in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React List box component

The ListBox provides support to select an item or a group of item by mouse or keyboard action. There are two selection modes available in list box,

* Single -  To select single item in the list box.
* Multiple -  To select multiple items in the list box.

On selection of each list box item, [`change`](https://ej2.syncfusion.com/react/documentation/api/list-box/#change) event is triggered.

## Single selection

To enable single selection in the list box, [`mode`](https://ej2.syncfusion.com/react/documentation/api/list-box/selectionSettingsModel/#mode) should be set as `single` in [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/list-box/#selectionsettings) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs13" %}

## Multiple selection

To enable multiple selection in the list box, `mode` should be set as `Multiple` in `selectionSettings` property.

To select multiple items, use the SHIFT, CTRL, and arrow keys to make selections.

> By default, the selection mode is set as `Multiple`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs14" %}

## Checkbox selection

The ListBox supports checkbox in default and grouped list box which is used to select multiple items. CheckBox selection can be enabled by injecting `CheckBoxSelection` module and also [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/list-box/selectionSettingsModel/#showcheckbox) property should be set as `true`.

### Select All

To select all the items in the list box, [`showSelectAll`](https://ej2.syncfusion.com/react/documentation/api/list-box/selectionSettingsModel/#showselectall) should be set as `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs17" %}

> To select all the items in the list box, [`selectAll`](https://ej2.syncfusion.com/react/documentation/api/list-box/#selectall) method can also be used.