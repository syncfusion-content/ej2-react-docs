import * as React from 'react';
import * as ReactDOM from "react-dom";
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';

function App() {
  let assistInstance = React.useRef(null);

  const assistViewToolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: (args) => toolbarItemClicked(args)
  };

  const responseToolbarSettings = {
    items: [
      { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
      { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
      { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' }
    ],
    itemClicked: (args) => onResponseToolbarItemClicked(args)
  };

  // Configure the built-in Text-to-Speech behaviour
  const textToSpeechSettings = {
    language: 'en-US',
    speechPitch: 1,
    speechRate: 1,
    volume: 1
  };

  // Sample prompt data
  const promptsData = [
    {
      prompt: "What is AI?",
      response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making."
    }
  ];

  // Renders the banner template indicating speech settings configured
  const bannerTemplate = () => {
    return (
      <div className="banner-content">
        <div className="e-icons e-assist-audio"></div>
        <i>Speech settings configured</i>
      </div>
    );
  };

  // Handles prompt requests with a default response
  const onPromptRequest = (args) => {
    if (!args.prompt.trim() || !assistInstance.current) return;

    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
    assistInstance.current.addPromptResponse(defaultResponse, true);
  };

  // Handles toolbar item clicks, such as clearing the conversation on refresh
  const toolbarItemClicked = (args) => {
    if (args.item.iconCss === 'e-icons e-refresh') {
      if (assistInstance.current) {
        assistInstance.current.prompts = [];
      }
    }
  };

  // Handles response toolbar item clicks
  const onResponseToolbarItemClicked = (args) => {
    // Placeholder for response toolbar actions
  };

  return (
    <div className="integration-texttospeech-settings">
      <AIAssistViewComponent
        id="aiAssistView"
        ref={assistInstance}
        prompts={promptsData}
        promptRequest={onPromptRequest}
        bannerTemplate={bannerTemplate}
        toolbarSettings={assistViewToolbarSettings}
        responseToolbarSettings={responseToolbarSettings}
        textToSpeechSettings={textToSpeechSettings}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));
