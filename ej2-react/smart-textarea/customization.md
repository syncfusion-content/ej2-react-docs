---
layout: post
title: Suggestion Customization with ##Platform_Name## Smart Textarea component | Syncfusion
description:  Checkout and learn here all about Suggestion Customization with ##Platform_Name## Smart Textarea component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Appearance of Suggestions

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/react/documentation/api/smart-textarea#aisuggestionhandler) property in Syncfusion React Smart TextArea allows you to control how text suggestions are displayed to the users.

* If `ShowSuggestionOnPopup` is `Enable`, suggestions displayed in the pop-up window

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

* If `ShowSuggestionOnPopup` is `false`, suggestions displayed inline.

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

By default `showSuggestionOnPopup` is `None`.

## See also

* [Getting Started with Syncfusion React Smart TextArea](./getting-started)