---
layout: post
title: How to in React Data component | Syncfusion
description: Learn here all about How to in Syncfusion React Data component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to in React Data component

## Work in offline mode

On remote data binding, every time invoking **executeQuery** will send request to the server and the query will be processed on server-side. To avoid post back to server on calling **executeQuery** to load all the data on initialization time and make the query processing in client-side. To enable this behavior, you can use **offline** property of [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs11/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs11/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs11/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs11/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs11" %}

> The loaded data will be cached in the **json** property of [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/).

## Sending additional parameters to server

You can use the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of [Query](https://ej2.syncfusion.com/documentation/api/data/query/) class, to add custom parameter to the data request.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs12/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs12/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs12/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs12/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs12" %}

## Adding custom headers

You can add custom headers to the request made by [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) using the **headers** property.

```ts

import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

    const SERVICE_URI: string =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

    new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor, headers:[{ 'syncfusion': 'true' }] })
        .executeQuery(new Query())
        .then((e: ReturnOption) => {
            // get result from e.result
        });

```

> Adding custom headers while making cross domain request will initiate preflight request.