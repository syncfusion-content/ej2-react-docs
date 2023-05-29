---
layout: post
title: Load html content via ajax in React Listview component | Syncfusion
description: Learn here all about Load html content via ajax in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Load html content via ajax 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load html content via ajax in React Listview component

We can set external `HTML` page content as [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) for our `ListView` component by making use of `AJAX` call.

```ts

      ajax = new Ajax('./template.html', 'GET', false);
      ajax.onSuccess = (e: string) => {
          template = e;
      };
      ajax.send();

```

In the below sample, we have rendered smartphone settings template from external `HTML` file.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/ajax-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/ajax-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/ajax-cs1" %}
