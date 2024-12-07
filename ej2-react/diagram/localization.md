---
layout: post
title: Localization in React Diagram component | Syncfusion®
description: Learn here all about Layers in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in EJ2 React Diagram control

The EJ2 Diagram component supports `localization`. In the Diagram component, the symbol palette search box and context menu items can be localized based on the selected culture. By using the locale property of the diagram, you can change the culture.

## Localize Diagram context menu

To localize the diagram context menu, we need to define the [`locale`](https://ej2.syncfusion.com/react/documentation/api/diagram/#locale) property of the diagram with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

```javascript
<DiagramComponent id="container" width={'100%'} height={'600px'} 
    //Set locale
    locale='de-DE'
     //Enables the context menu
     contextMenuSettings={{
        show: true
    }}
    nodes={node}/>
```

Next, we need to call the `setCulture('de')` function, which sets the default culture for all EJ2 components. This method takes one parameter, cultureName, which specifies the culture name to be set as the default.

We also need to define the text we want to render in the context menu instead of the default English, as shown below.

```javascript

// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});

```

The following code example summarizes the locale settings for the context menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/localization/es5localeContextMenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/localization/es5localeContextMenu-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/localization/es5localeContextMenu-cs1" %}

## Localize Symbol palette

You can enable the search option in the symbol palette to search for symbols by using the [`enableSearch`](../api/diagram/symbolPaletteModel/#enablesearch) option. This search box can also be localized.

To localize the symbol palette search box, we need to define the [`locale`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel/#enablesearch) property of the symbol palette with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

The following code shows how to localize symbol palette.

```javascript
// Set the default culture to German
setCulture('de')

// Load locale text for the SearchShapes
L10n.load({
        'de-DE': {
            SymbolPalette: {
                'SearchShapes':'Formen suchen',
            }
        }
    });

 // Initializes symbol palette.
    <SymbolPaletteComponent id="container" 
    //Set locale
    locale='de-DE'
    enableSearch={true}
    expandMode={"Multiple"} 
    palettes={[
            {
                id: "basic",
                expanded: true,
                symbols: getBasicShapes(),
                title: "Basic Shapes",
                iconCss: "e-ddb-icons e-basic",
            },
        ]} symbolHeight={80} symbolWidth={80}
        />

```

The following code example summarizes the locale settings for the symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/localization/es5localeSymbolpalette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/localization/es5localeSymbolpalette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/localization/es5localeSymbolpalette-cs1" %}

Refer [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) for more information.


