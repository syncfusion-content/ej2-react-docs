---
layout: post
title: Enable disable treegrid and its actions in React Treegrid component | Syncfusion
description: Learn here all about Enable disable treegrid and its actions in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Enable disable treegrid and its actions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable treegrid and its actions in React Treegrid component

You can enable/disable the TreeGrid and its actions by applying/removing corresponding CSS styles.

To enable/disable the treegrid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of TreeGrid.

```css
    .disabletreegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }
```

**Step 2**:

Add/Remove the CSS class to the TreeGrid in the click event handler of Button.

```ts

const btnClick = (): void => {
    if (treegrid && treegrid.element.classList.contains('disabletreegrid')) {
      treegrid.element.classList.remove('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.remove('wrapper');
    }
    else if (treegrid) {
      treegrid.element.classList.add('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.add('wrapper');
    }
  }

```

In the below demo, the button click will enable/disable the TreeGrid and its actions.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/enable-disable-actions-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
