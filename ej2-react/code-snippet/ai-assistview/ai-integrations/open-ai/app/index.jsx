import * as React from 'react';
import * as ReactDOM from "react-dom";
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { marked } from 'marked';

const azureOpenAIApiKey = ''; // replace your key
const azureOpenAIEndpoint = ''; // replace your endpoint
const azureOpenAIApiVersion = ''; // replace to match your resource
const azureDeploymentName = ''; // your Azure OpenAI deployment name
let stopStreaming = false;

function App() {
  const assistInstance = React.useRef(null);

  const suggestions = [
    'How do I prioritize my tasks?',
    'How can I improve my time management skills?',
  ];

  const bannerTemplate =
    '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>';

  const toolbarItemClicked = (args) => {
    if (args.item.iconCss === 'e-icons e-refresh' && assistInstance.current) {
      assistInstance.current.prompts = [];
      assistInstance.current.promptSuggestions = suggestions;
      stopStreaming=true;
    }
  };

  const assistViewToolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: toolbarItemClicked,
  };

  const streamResponse = async (response) => {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;

    while (i < responseLength && !stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        assistInstance.current.addPromptResponse(htmlResponse, i === responseLength);
        assistInstance.current.scrollToBottom();
      }
      await new Promise((resolve) => setTimeout(resolve, 15)); 
    }
    assistInstance.current.promptSuggestions = suggestions;
  };

  const handleStopResponse = () => {
    stopStreaming = true;
  };

  const onPromptRequest = (args) => {
        const url =
        azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': azureOpenAIApiKey,
        },
        body: JSON.stringify({
            messages: [{ role: 'user', content: args.prompt }],
            temperature: 0.7,
            max_tokens: 150
        }),
        })
       .then(response => response.json())
        .then(reply => {
            const responseText = reply.choices[0].message.content.trim() || 'No response received.';
            stopStreaming = false;
            streamResponse(responseText);
        })
        .catch((error) => {
            assistInstance.current.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.',true);
            stopStreaming = true;
        });
  };


  return (
    <AIAssistViewComponent
      id="aiAssistView"
      ref={assistInstance}
      promptRequest={onPromptRequest}
      stopRespondingClick={handleStopResponse}
      promptSuggestions={suggestions}
      bannerTemplate={bannerTemplate}
      toolbarSettings={assistViewToolbarSettings}
      showHeader={true}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('container'));