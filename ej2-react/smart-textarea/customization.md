---
layout: post
title: Customization in React Smart TextArea | Syncfusion
description: Control how AI suggestions appear in the React Smart TextArea by toggling the ShowSuggestionOnPopup property to display them in a popup or inline.
platform: ej2-react
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Smart TextArea

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/react/documentation/api/smart-textarea#aisuggestionhandler) property in the Syncfusion<sup style="font-size:70%">®</sup> React Smart TextArea allows you to control how AI-generated text suggestions are presented to users. Depending on your application requirements, suggestions can be displayed in a popup window or directly within the text area as inline suggestions.

This customization enables you to provide the most suitable writing experience for your users. Popup suggestions can help users review generated content separately, while inline suggestions provide a more seamless and contextual editing experience.

The following values are supported:

| Value | Description |
|---------|-------------|
| `Enable` | Displays AI suggestions in a popup window. |
| `Disable` | Displays AI suggestions inline within the text area. |
| `None` | Uses the default suggestion behavior. |

## Display suggestions in a popup

Set the `ShowSuggestionOnPopup` property to `Enable` to display AI suggestions in a popup window. This mode allows users to review and accept suggestions without interrupting the content currently being edited.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

function SmartTextarea() {
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className="content-wrapper smart-text">
                    <div className='smart-component'>
                        <SmartTextAreaComponent
                            id='smart-textarea'
                            placeholder={'Enter your queries here'}
                            floatLabelType={'Auto'}
                            rows={5}
                            userRole={'Employee communicating with internal team'}
                            UserPhrases={phrasesData}
                            aiSuggestionHandler={serverAIRequest}
                            ShowSuggestionOnPopup={'Enable'}
                        ></SmartTextAreaComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartTextarea;

{% endhighlight %}
{% endtabs %}

![SUggestion on popup](./images/smart-textarea-popup.gif)

In popup mode, generated suggestions are displayed in a separate popup interface, allowing users to review the AI-generated content before applying it to the text area.

## Display suggestions inline

Set the `ShowSuggestionOnPopup` property to `Disable` to display AI-generated suggestions directly within the text area. This mode provides a seamless and contextual writing experience by presenting suggestions alongside the current content.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

function SmartTextarea() {
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className="content-wrapper smart-text">
                    <div className='smart-component'>
                        <SmartTextAreaComponent
                            id='smart-textarea'
                            placeholder={'Enter your queries here'}
                            floatLabelType={'Auto'}
                            rows={5}
                            userRole={'Employee communicating with internal team'}
                            UserPhrases={phrasesData}
                            aiSuggestionHandler={serverAIRequest}
                            ShowSuggestionOnPopup={'Disable'}
                        ></SmartTextAreaComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartTextarea;

{% endhighlight %}
{% endtabs %}

![SUggestion inline](./images/smart-textarea-inline.gif)

In inline mode, suggestions appear directly within the text area, enabling users to review and continue writing without interacting with a separate popup window.

By default, the `ShowSuggestionOnPopup` property is set to `None`, which applies the default suggestion display behavior.

## See also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React Smart TextArea](./getting-started)