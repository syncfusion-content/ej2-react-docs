---
layout: post
title: Model Binding in React Query Builder UI | Syncfusion
description: Pass field, operator, and value component props to the React Query Builder UI through fieldModel, operatorModel, and valueModel bindings.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding in React Query Builder UI

Model binding allows you to configure properties for the components used in the field, operator, and value editors. Implement model binding by assigning the [`fieldModel`](https://ej2.syncfusion.com/react/documentation/api/query-builder#fieldmodel), [`operatorModel`](https://ej2.syncfusion.com/react/documentation/api/query-builder#operatormodel), and [`valueModel`](https://ej2.syncfusion.com/react/documentation/api/query-builder#valuemodel) properties on the Query Builder. These models are merged with each editor's default options, so they augment rather than replace the underlying UI.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/model-binding-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/model-binding-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/model-binding-cs1" %}