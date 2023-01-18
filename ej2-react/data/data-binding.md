---
layout: post
title: Data binding in React Data component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Data component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Data component

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) supports both RESTful JSON data services binding and local JavaScript object array binding.

## Local data binding

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be bound to local data source by assigning the array of JavaScript objects to the `json` property or simply passing them to the constructor while instantiating. Now the JavaScript object array can be queried and manipulated.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs4/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs4/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs4/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs4/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs4" %}

## Remote data binding

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be bound to remote data source by assigning service end point URL to the `url` property. With the provided **url**, the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) handles all communication with the data server with help of queries.

When querying data, the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) will convert the query object, [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/) into server request after calling **executeQuery** and waits for the server response(`JSON` format).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs5/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs5/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs5/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs5/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs5" %}
> The queried data will not be cached locally unless offline mode is enabled.

## See Also

* [Binding with OData service](./adaptors/#odata-adaptor)
* [Binding with ODataV4 service](./adaptors/#odatav4-adaptor)
* [Binding with Web API](./adaptors/#web-api-adaptor)
* [How to write custom adaptor](./adaptors/#writing-custom-adaptor)
* [How to work in offline mode](./how-to/#work-in-offline-mode)
* [How to send additional parameters](./how-to/#sending-additional-parameters-to-server)
* [How to add custom request headers](./how-to/#adding-custom-headers)