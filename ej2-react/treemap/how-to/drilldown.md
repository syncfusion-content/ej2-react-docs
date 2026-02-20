---
layout: post
title: Drilldown customization in React Treemap component | Syncfusion
description: Learn here all about Drilldown customization in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Drilldown 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown customization in React Treemap component

## Customize the header for treemap drilldown

Yon can add a header element as <div> and customize it to show the population of a particular country or continent on treemap drill-down.

To customize the header for treemap drill-down, follow the given steps:

**Step 1**:

<!-- markdownlint-disable MD031 -->
Initialize the treemap and enable the drill-down option.

{% raw %}

```ts
import { TreeMapComponent, LevelDirective, LevelsDirective, ILoadedEventArgs, IDrillEndEventArgs } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { DrillDown } from './datasource';
export function App() {
    return (
      <TreeMapComponent  palette={ ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'] } enableDrillDown={true} format={"n"} useGroupingSeparator={true} dataSource={DrillDown} weightValuePath='Population' leafItemSettings={ {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px' },
            border: { color: 'black', width: 0.5 }
          } }>
            <LevelsDirective>
              <LevelDirective groupPath='Continent' fill='#336699' border={ { color: 'black', width: 0.5 } } />
              <LevelDirective groupPath='States' fill='#336699' border={ { color: 'black', width: 0.5 } } />
              <LevelDirective groupPath='Region' showHeader={false} fill='#336699' border={ { color: 'black', width: 0.5 } } />
            </LevelsDirective>
          </TreeMapComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
```
{% endraw %}

**Step 2**:

Show the population of a particular continent in the treemap `loaded` event. In this event, you can get the header element.



```js
   function loaded(args: ILoadedEventArgs): void {
    let header: Element = document.getElementById('header') as Element;
    let population: number = 0;
    for (let i: number = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
      population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
    }
    header.innerHTML = 'Continent - Population : ' + population
  }
```

**Step 3**:

Customize the population for drilled countries or states in the header element when drill-down the treemap. The `drillEnd` event will be triggered when treemap is drilled.

{% tabs %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treemap/how-to/header-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treemap/how-to/header-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/how-to/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/how-to/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/how-to/header-template-cs1" %}