---
layout: post
title: Command column editing in React Treegrid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Command column editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in React Treegrid component

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`column.commands`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#commands) property.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs3" %}

## Custom command

 The custom command buttons can be added in a column by using the [`column.commands`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#commands) property and the action for the custom buttons can be defined in the [`buttonOption.click`](https://ej2.syncfusion.com/react/documentation/api/grid/commandButtonOptions/#click) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs4" %}