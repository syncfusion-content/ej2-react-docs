---
layout: post
title: React Data - JSON Adaptors | Syncfusion
description: Use JsonAdaptor in Syncfusion React DataManager for fast client-side operations on JavaScript arrays no server required.
control: Adaptors 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# JSON Adaptors in React DataManager

The `JsonAdaptor` is a highly efficient and versatile adaptor designed for performing data operations directly on in‑memory JavaScript objects and arrays. The `JsonAdaptor` eliminates the need for remote servers or complex data services, making the adaptor ideal for applications that rely heavily on local datasets. Whether data is sourced from static JSON files, dynamically generated collections, or client‑side state management systems, the `JsonAdaptor` offers a seamless and optimized way to manage and manipulate data.

With built‑in support for essential data operations such as filtering, sorting, grouping, searching, paging, and CRUD the `JsonAdaptor` provides a powerful abstraction layer that simplifies complex data transformations. Instead of manually writing data-handling logic, the `JsonAdaptor` leverages the `DataManager` engine to execute operations efficiently and consistently.

By combining performance with simplicity, the `JsonAdaptor` helps developers reduce boilerplate code and maintain a clean, predictable workflow. The adaptor proves particularly valuable for applications like dashboards, offline-first systems, data-heavy UI components, or any scenario where smooth local processing is critical.

## Key advantages of the JsonAdaptor

- **Seamless local data processing:** Operates entirely on JavaScript arrays without additional server calls, ensuring lightning‑fast data manipulation.

- **Built‑in support for advanced operations:** Automatically handles filtering, sorting, grouping, paging, aggregates, and other data transformations with minimal setup.

- **Ideal for client-side data handling:** Perfect for offline scenarios, demo/sample apps, static data files, or applications relying on local state stores.

- **Reduces development effort:** Removes the burden of writing repetitive data-processing logic, allowing developers to focus on UI and application behavior.

- **Consistent results across components:** Works seamlessly with Syncfusion components (`Grid`, `ListView`, `Charts`, `Dropdowns`, etc.), ensuring uniform behavior across the application.

## When to use JsonAdaptor?

Use `JsonAdaptor` when the application:

- Works primarily with client-side data.
- Requires fast, local operations without network latency.
- Uses data from JSON files, static assets, or generated datasets.
- Needs rapid prototyping or offline/low-network environments.
- Must apply complex filters, queries, or transformations on large arrays.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs1/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs1/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs1/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs1/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs1" %}

## See also

- [Customize data handling](./custom-adaptor) 
- [Connect to custom REST APIs](./url-adaptor)
- [Connect to GraphQL services](./graphql-adaptor)
- [Connect to OData v4 services](./odatav4-adaptor)
- [Hybrid data binding](./remote-save-adaptor)
- [Connect to Web Method services](./web-method-adaptor)
- [Connect to ASP.NET Web API](./webapi-adaptor)
- [Adding custom headers](../how-to/adding-custom-headers)