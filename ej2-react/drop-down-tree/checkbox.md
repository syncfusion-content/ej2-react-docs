---
layout: post
title: Checkbox in React Dropdown Tree | Syncfusion
description: Enable multi-selection in React Dropdown Tree with checkboxes, including autoCheck for hierarchical parent-child sync and showSelectAll.
control: Dropdown Tree
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in React Dropdown Tree

The React Dropdown Tree component allows you to check more than one item from the tree without affecting the UI's appearance by enabling the [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#showcheckbox) property. When this property is enabled, a checkbox appears before each item's text in the popup, enabling multi-selection functionality where users can select multiple tree nodes simultaneously.

In the following example, the `showCheckBox` property is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/checkboxes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/checkboxes-cs1" %}

## Auto Check

By default, the checkbox state of the parent and child items in the React Dropdown Tree will not be dependent on each other. The [`treeSettings.autoCheck`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/treesettingsmodel#autocheck) property is the switch that makes parent and child checkbox states dependent. If you need dependent checked state, enable the [`autoCheck`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/treesettingsmodel#autocheck) property, which is a member of [`treeSettings`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#treesettings). This feature creates a hierarchical checkbox behavior where parent and child selections are automatically synchronized.

The auto check functionality follows these rules:

* If some child items are unchecked, the parent shows an intermediate (partially filled) checkbox.

* If all child items are checked, the parent item also shows a checked state.

* If a parent item is checked, all child items are automatically changed to the checked state.

In the following example, the `autoCheck` property is enabled to demonstrate hierarchical checkbox behavior.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/auto-check-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/auto-check-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/auto-check-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/auto-check-cs1" %}

## Select All

The React Dropdown Tree component has built-in support to select all the tree items using Select All options in the header. This feature provides a convenient way to quickly select or deselect all available tree items without having to check each item individually.

When the [`showSelectAll`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#showselectall) property is set to true, a checkbox will be displayed in the popup header that allows you to select or deselect all the tree items in the popup. Note that the [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#showcheckbox) property must be enabled for the Select All feature to work.

By default, `Select All` and `Unselect All` text values will be displayed along with the checkbox in the popup header to indicate the action to be performed on checking or unchecking the checkbox. You can customize these text labels by using [`selectAllText`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#selectalltext) and [`unSelectAllText`](https://ej2.syncfusion.com/react/documentation/api/drop-down-tree/index-default#unselectalltext) properties respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/select-all-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/select-all-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/select-all-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/select-all-cs1" %}