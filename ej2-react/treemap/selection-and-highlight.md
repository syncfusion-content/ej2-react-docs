---
layout: post
title: Selection and highlight in React Treemap component | Syncfusion
description: Learn here all about Selection and highlight in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Selection and highlight 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection and highlight in React Treemap component

## Selection

Selection is used to select a particular group or item to differentiate from other items. Each item or each group can be selected and deselected while interacting with the items. The corresponding Treemap items are also selected while tapping a specific legend item, and vice versa.

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/treemap/selectionSettings/#fill) property is used to change the selected item color. The [`color`](https://ej2.syncfusion.com/react/documentation/api/treemap/borderModel/#color) and the [`width`](https://ej2.syncfusion.com/react/documentation/api/treemap/borderModel/#width) properties are used to customize the selected item border, and the selection is enabled by using the [`enable`](https://ej2.syncfusion.com/angular/documentation/api/treemap/selectionSettings/#enable) property  to **true** in the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/selectionSettings/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/selectionAndHighlight-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/selectionAndHighlight-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/selectionAndHighlight-cs1" %}

## Highlight

Highlight is used to highlight an item or group from other items or groups. Each item or each group can be highlighted by hovering the mouse over the items. The corresponding Treemap items are also be highlighted while hovering over a specific legend item, and vice versa.

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/treemap/highlightSettings/#fill) property is used to change the highlighted item color. The [`color`](https://ej2.syncfusion.com/react/documentation/api/treemap/borderModel/#color) and the [`width`](https://ej2.syncfusion.com/react/documentation/api/treemap/borderModel/#width) properties are used to customize the highlighted item border, and the highlight is enabled by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/treemap/highlightSettings/#enable) property to **true** in the [`highlightSettings`](https://ej2.syncfusion.com/react/documentation/api/treemap/highlightSettings/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/selectionAndHighlight-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/selectionAndHighlight-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/selectionAndHighlight-cs2" %}