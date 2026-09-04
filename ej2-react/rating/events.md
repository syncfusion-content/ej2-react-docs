---
layout: post
title: Events in React Rating | Syncfusion
description: Handle React Rating lifecycle events such as beforeItemRender, created, and valueChange to react to item rendering and selection.
control: Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Rating

This section describes the React Rating events that will be triggered when appropriate actions are performed. The following events are available in the React Rating component.

## beforeItemRender

The React Rating component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/rating/#beforeitemrender) event before rendering each React Rating item. The [`RatingItemEventArgs`](https://ej2.syncfusion.com/react/documentation/api/rating/ratingItemEventArgs/) passed as an event argument provides the details of the item to be rendered.

```ts
{/* Import the React Rating. */}
import { RatingComponent, RatingItemEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React Rating.*/}
function App() {

    function beforeItemRender(args: RatingItemEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' beforeItemRender={ beforeItemRender } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

## created

The React Rating component triggers the [`created`](https://ej2.syncfusion.com/react/documentation/api/rating/#created) event when the rendering of the React Rating component is completed.

```ts
{/* Import the Rating. */}
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React Rating.*/}
function App() {

    function created(){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' created={ created } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

## onItemHover

The rating component triggers the [`onItemHover`](https://ej2.syncfusion.com/react/documentation/api/rating/#onitemhover) event when the rating item is hovered. The [`RatingHoverEventArgs`](https://ej2.syncfusion.com/react/documentation/api/rating/ratingHoverEventArgs/) passed as an event argument provides the details of the hovered item.

```ts
{/* Import the React Rating. */}
import { RatingComponent, RatingHoverEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React Rating.*/}
function App() {

    function onItemHover(args: RatingHoverEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' onItemHover={ onItemHover } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

## valueChanged

The React Rating component triggers the [`valueChanged`](https://ej2.syncfusion.com/react/documentation/api/rating/#valuechanged) event when the React Rating value changes. The [`RatingChangedEventArgs`](https://ej2.syncfusion.com/react/documentation/api/rating/ratingChangedEventArgs/) passed as an event argument provides the change details.

```ts
{/* Import the React Rating. */}
import { RatingComponent, RatingChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render React Rating.*/}
function App() {

    function valueChanged(args: RatingChangedEventArgs){
        //Your required action here
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' valueChanged={ valueChanged } ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
```

The following example demonstrates the valueChanged event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/events-cs1" %}
