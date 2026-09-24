---
layout: post
title: Selection in React ListBox | Syncfusion
description: Configure single or multiple selection in the React ListBox via selectionSettings.mode, with SHIFT, CTRL, and arrow-key support and a change event.
control: Selection
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React ListBox

The React ListBox supports selecting items using mouse or keyboard actions. Two selection modes are available:

* Single - Select a single item in the React ListBox.
* Multiple - Select multiple items in the React ListBox.

The [`change`](https://ej2.syncfusion.com/react/documentation/api/list-box/#change) event is triggered when a React ListBox item is selected.

## Single selection

Enable single selection by setting the [`mode`](https://ej2.syncfusion.com/react/documentation/api/list-box/selectionSettingsModel/#mode) property to `single` in the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/list-box/#selectionsettings) configuration:

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

Enable multiple selection by setting the `mode` property to `Multiple` in the `selectionSettings` configuration.

Use SHIFT, CTRL, and arrow keys to select multiple items.

> By default, the selection mode is set to `Multiple`.

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

The React ListBox supports checkboxes in default and grouped React ListBoxes for multiple item selection. Enable checkbox selection by injecting the `CheckBoxSelection` module and setting the [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/list-box/selectionSettingsModel/#showcheckbox) property to `true`.

### Select All

Enable the Select All option by setting the [`showSelectAll`](https://ej2.syncfusion.com/react/documentation/api/list-box/selectionSettingsModel/#showselectall) property to `true`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/basic-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/basic-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/basic-cs17" %}

> To select all the items in the React ListBox, [`selectAll`](https://ej2.syncfusion.com/react/documentation/api/list-box/#selectall) method can also be used.