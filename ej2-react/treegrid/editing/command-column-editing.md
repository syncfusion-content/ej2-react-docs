---
layout: post
title: Command column editing in React TreeGrid component | Syncfusion
description: Learn here all about Command column editing in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Command column editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Command column editing in React TreeGrid 

The command column adds CRUD action buttons within a column. Configure command buttons using the [column.commands](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#commands) property.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edits the current row. |
| Delete | Deletes the current row. |
| Save | Saves updates to the edited row. |
| Cancel | Cancels the edit state. |

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

Custom command buttons can be added using the [column.commands](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#commands) property. Define the action for custom buttons in the [buttonOption.click](https://ej2.syncfusion.com/react/documentation/api/grid/commandButtonOptions/#click) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs4" %}