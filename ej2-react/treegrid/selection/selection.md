---
layout: post
title: Selection in React TreeGrid component | Syncfusion
description: Learn here all about Selection in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React TreeGrid

Selection highlights a row or a cell. Selection can be performed using mouse click/drag or arrow keys. To disable selection in the TreeGrid, set [allowSelection](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowselection) to **false**.

For a quick overview of selection, refer to the following video:

{% youtube "https://www.youtube.com/watch?v=2pAN-4v7E4E" %}

Two selection types are available and can be configured using [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#type):

* **Single** (default): Allows selection of a single row or cell.
* **Multiple**: Allows selection of multiple rows or cells.

For multi-selection, hold Ctrl key and click the desired rows or cells. To select a contiguous range, hold Shift key and click the start and end targets.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs8" %}

## Selection mode

TreeGrid supports three selection modes configured via [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#mode):

* **Row** (default): Selects rows only.
* **Cell**: Selects cells only.
* **Both**: Allows selecting rows and cells at the same time.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs9" %}

## Touch interaction

On touch devices, tapping a row selects it. A floating menu ![Multi Row selection](../images/selection.jpg) enables multi-row selection. To select multiple rows or cells, tap the menu ![Multi Row or Cells](../images/mselection.jpg), then tap the desired targets.

> Multi-selection requires [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#type) set to **Multiple**.

The following screenshot illustrates touch selection on a device.

<!-- markdownlint-disable MD033 -->
<img src="../images/touch-selection.png" alt="Touch interaction" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

> For feature highlights, see the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour. Examples are available in the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) demos showcasing data presentation and manipulation.