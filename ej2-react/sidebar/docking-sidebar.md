---
layout: post
title: Dock in React Sidebar | Syncfusion
description: Dock the Syncfusion React Sidebar so a fixed width remains visible in the collapsed state, showing icons only, via `enableDock` and `dockSize`.
control: Docking Sidebar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dock in React Sidebar

Dock state of the React Sidebar reserves some space on the page that always remains in a visible state when the React Sidebar is collapsed. It is used to show the short term of a content like icons alone instead of lengthy text. To achieve this , set [`enableDock`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#enabledock) as true along with required [`dockSize`](https://ej2.syncfusion.com/react/documentation/api/sidebar/#docksize).

In the following example, each list item includes an icon along with accompanying text. The visibility of the text is dynamically controlled through CSS rules based on the Sidebar's state. When the **enableDock** property is enabled, the **e-dock** class is applied, adjusting the text visibility accordingly. 

To show the icons alone in a docked (closed) state, the following CSS is applied:

```css
.e-dock.e-close span.e-text {
  display: none;
}
```

To show the text along with icons when the React Sidebar is open, this CSS is used:

```css
.e-dock.e-open span.e-text {
  display: inline-block;
}
```

In the docked state, only icons in the list are visible, hinting at the hidden text content.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/dock-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/dock-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/dock-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/dock-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/sidebar/dock-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/dock-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/dock-cs1" %}

## See Also

* [How to add React Sidebar navigation](./how-to/sidebar-with-treeview)