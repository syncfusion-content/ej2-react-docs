---
layout: post
title: Filtering data in React Mention component | Syncfusion
description: Learn here all about Filtering data in Syncfusion React Mention component of Syncfusion Essential JS 2 and more.
control: Filtering data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering data in React Mention component

The Mention component has built-in support to filter data items. The filter operation starts as soon as you start typing characters in the mention element.

## Limit the minimum filter character

You can control the minimum length of user input to initiate the search action using [minLength](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DropDowns.Mention.html#Syncfusion_EJ2_DropDowns_Mention_MinLength) property. This can be useful if you have a very large list of data. The default value is 0, where suggestion the list opened as soon as the user inputs the mention character.

The remote request does not fetch the search data until the search key contains three characters as shown in the following example.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs2" %}

## Change the filter type

While filtering, you can change the filter type to `Contains`, `StartsWith`, or `EndsWith` in the [filterType](https://ej2.syncfusion.com/react/documentation/api/mention/#filtertype) property. The default filter operator is `Contains`.

* StartsWith - Filter the items that begin with the specified text value.
* Contains - Filter the items that contain the specified text value.
* EndsWith - Filter the items that end with the specified text value.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs4" %}

## Allow spacing between search

While filtering the data in the data source, you can allow the space in the middle of the mention by using the [allowSpaces](https://ej2.syncfusion.com/react/documentation/api/mention/#allowspaces) property. If the data source does not match with the mentioned element data, the popup will be hidden on the space key press. The default value of `allowSpaces` is `false`.

> By default, the `allowSpaces` property is disabled, and the space ends the mention component search.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs6" %}

## Customize the suggestion item count

While filtering, you can customize the number of list items to be displayed in the suggestion list by using the [suggestionCount](https://ej2.syncfusion.com/react/documentation/api/mention/#suggestioncount) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/mention/filtering-data-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/mention/filtering-data-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs8" %}

## See Also

* [Templates](./template)
