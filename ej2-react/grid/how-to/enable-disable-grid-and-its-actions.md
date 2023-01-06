---
layout: post
title: Enable disable grid and its actions in React Grid component | Syncfusion
description: Learn here all about Enable disable grid and its actions in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Enable disable grid and its actions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable disable grid and its actions in React Grid component

You can enable/disable the Grid and its actions by applying/removing corresponding CSS styles.

To enable/disable the grid and its actions, follow the given steps:

**Step 1**:

Create CSS class with custom style to override the default style of Grid.

```css
    .disablegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }

```

**Step 2**:

Add/Remove the CSS class to the Grid in the click event handler of Button.

```typescript

  const btnClick = (): void => {
    if (grid && grid.element.classList.contains('disablegrid')) {
      grid.element.classList.remove('disablegrid');
      (document.getElementById("GridParent") as HTMLElement).classList.remove('wrapper');
    }
    else if (grid) {
      grid.element.classList.add('disablegrid');
      (document.getElementById("GridParent") as HTMLElement).classList.add('wrapper');
    }
  }

```

In the below demo, the button click will enable/disable the Grid and its actions.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/enable-disable-actions-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/enable-disable-actions-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/enable-disable-actions-cs1" % }