---
layout: post
title: Clone Group/Rule in React Query builder component | Syncfusion
description: Learn here all about Clone Group/Rule in Syncfusion React Query builder component of Syncfusion Essential JS 2 and more.
control: Clone Group/Rule 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in React Query builder component

The Query Builder functionality extends to cloning both individual rules and entire groups. Utilizing the Clone options will generate an exact duplicate of a rule or group adjacent to the original one. This feature enables users to replicate complex query structures effortlessly. The [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#showbuttons) function offers users the ability to toggle the visibility of these cloning buttons, providing convenient control over the cloning process within the Query Builder interface.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#clonegroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/react/documentation/api/query-builder/#clonerule) method to clone rule.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/clone-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/clone-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}