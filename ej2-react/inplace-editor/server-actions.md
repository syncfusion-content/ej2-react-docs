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

By passing In-place Editor component value to the server, the [primaryKey](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#primarykey) property value must required otherwise action not performed for remote data.

If the [URL](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#url) property value is empty, data passing will handled at local and also the [actionSuccess](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionsuccess) event will trigger with `null` as argument value.

> The following arguments are passed to the server when submit actions perform.

| Arguments  | Explanations                                              |
|------------|-----------------------------------------------------------|
| value      | For processing edited value, like DB value updating.      |
| primaryKey | For value mapping to the server, like selecting DB.            |
| name       | For field mapping to the server, like DB column field mapping. |

Find the following sample server codes for defining models and controller functions to configure processing data.

```C#
  public class SubmitModel {
      public string Name { get; set; }
      public string PrimaryKey { get; set; }
      public string Value { get; set; }
  }
```

```C#

public IEnumerable<SubmitModel> UpdateData([FromBody]SubmitModel value) {
  // User can process data
  return value;
}

```

* When Server actions successfully done, the [actionSuccess](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionsuccess) event will be fired with returned server data.

* If the server is not responding, the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionfailure) event will be fired with data, but value not updated in the Editor.

In the following sample, the `actionSuccess` event will trigger once the value submitted successfully into the server. In this sample, both `actionSuccess` and `actionFailure` were configured and resulted value will be converted to chips.

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