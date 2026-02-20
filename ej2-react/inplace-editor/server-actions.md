---
layout: post
title: Server actions in React Inplace editor component | Syncfusion
description: Learn here all about Server actions in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Server actions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Server actions in React Inplace editor component

When submitting In-place Editor values to the server, the [primaryKey](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#primarykey) property is required for remote data operations; otherwise, the action will not be performed.

If the [URL](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#url) property is empty, data submission is handled locally and the [actionSuccess](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionsuccess) event triggers with `null` as the argument value.

> The following arguments are passed to the server when submit actions are performed.

| Arguments  | Description                                              |
|------------|-----------------------------------------------------------|
| value      | The edited value to be processed, such as database updates.      |
| primaryKey | The identifier for mapping the value on the server, such as the record ID.            |
| name       | The field name for server-side mapping, such as database column names. |

Find the following sample server codes for defining models and controller functions to configure processing data.

```csharp
  public class SubmitModel {
      public string Name { get; set; }
      public string PrimaryKey { get; set; }
      public string Value { get; set; }
  }
```

```csharp

public IEnumerable<SubmitModel> UpdateData([FromBody]SubmitModel value) {
  // User can process data
  return value;
}

```

* When server submission is successful, the [actionSuccess](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionsuccess) event is triggered with the returned server data.

* If the server does not respond or an error occurs, the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionfailure) event is triggered and the value is not updated in the Editor.

In the following sample, both `actionSuccess` and `actionFailure` events are configured. The `actionSuccess` event triggers when the value is successfully submitted to the server, and the returned value is converted to chips.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/server-actions-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/server-actions-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/server-actions-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/server-actions-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/server-actions-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/server-actions-cs2" %}

## See Also

* [Indicate the server actions in the editor](./how-to/custom-indication/)