import * as React from 'react';
import * as ReactDOM from "react-dom";
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import { marked } from 'marked';

let azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key'; // Your_Azure_OpenAI_API_Key
let azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint'; // Your_Azure_OpenAI_Endpoint
let azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version'; // Your_Azure_OpenAI_API_Version
let azureDeploymentName = 'Your_Deployment_Name'; // Your_Deployment_Name
let stopStreaming = false;

function App() {
  let assistInstance = React.useRef(null);
  let speechToTextObj = React.useRef(null);
  let assistviewFooter = React.useRef(null);
  let assistviewSendButton = React.useRef(null);

  const assistViewToolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: (args) => toolbarItemClicked(args)
  };

  const promptToolbarSettings = {
    itemClicked: (args) => {
      if (args.item.iconCss === "e-icons e-assist-edit") {
        assistviewFooter.current.innerHTML = assistInstance.current.prompts[args.dataIndex].prompt;
        toggleButtons();
      }
    }
  };

  const bannerTemplate = () => {
    return (
      <div className="banner-content">
        <div className="e-icons e-listen-icon"></div>
        <i>Click the below mic-button to convert your voice to text.</i>
      </div>
    );
  };

  const footerTemplate = () => {
    return (
      <div className="e-footer-wrapper">
        <div id="assistview-footer" ref={assistviewFooter} className="content-editor" contentEditable="true" placeholder="Click to speak or start typing..." onInput={toggleButtons} onKeyDown={handleKeyDown}></div>
        <div className="option-container">
          <SpeechToTextComponent id="speechToText" ref={speechToTextObj} cssClass="e-flat" transcriptChanged={onTranscriptChange} onStop={onListeningStop} created={onCreated} />
          <ButtonComponent id="assistview-sendButton" ref={assistviewSendButton} className="e-assist-send e-icons" onClick={sendIconClicked} />
        </div>
      </div>
    );
  };

  const streamResponse = async (response) => {
    let lastResponse = "";
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        assistInstance.current?.addPromptResponse(htmlResponse, i === responseLength);
        assistInstance.current?.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
    toggleButtons();
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
        max_tokens: 500
      }),
    })
      .then(response => response.json())
      .then(reply => {
        const responseText = reply.choices[0].message.content.trim() || 'No response received.';
        stopStreaming = false;
        streamResponse(responseText);
      })
      .catch((error) => {
        assistInstance.current.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
        stopStreaming = true;
        toggleButtons();
      });
  };

  const toolbarItemClicked = (args) => {
    if (args.item.iconCss === 'e-icons e-refresh') {
      assistInstance.current.prompts = [];
    }
  };

  const sendIconClicked = () => {
    assistInstance.current.executePrompt(assistviewFooter.current.innerText);
    assistviewFooter.current.innerText = '';
  };

  const onTranscriptChange = (args) => {
    if (assistviewFooter.current) {
      assistviewFooter.current.innerText = args.transcript;
    }
  };

  const onListeningStop = () => {
    toggleButtons();
  };

  const onCreated = () => {
    toggleButtons();
  };

  const toggleButtons = () => {
    const assistviewFooterEle = assistviewFooter.current;
    const sendButtonEle = assistviewSendButton.current?.element;
    const speechButtonEle = speechToTextObj.current?.element;
    if (!assistviewFooterEle || !sendButtonEle || !speechButtonEle) {
      return;
    }
    const hasText = assistviewFooterEle.innerText.trim() !== '';
    sendButtonEle.classList.toggle('visible', hasText);
    speechButtonEle.classList.toggle('visible', !hasText);
    if (!hasText && (assistviewFooterEle.innerHTML.trim() === '' || assistviewFooterEle.innerHTML === '<br>')) {
      assistviewFooterEle.innerHTML = '';
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      sendIconClicked();
      event.preventDefault();
    }
  };

  const handleStopResponse = () => {
    stopStreaming = true;
    toggleButtons();
  };

  React.useEffect(() => {
    // Defer toggleButtons until after mount to ensure refs are ready
    toggleButtons();
  }, []);

  return (
    <div className="integration-speechtotext-section">
      <AIAssistViewComponent
        id="aiAssistView"
        ref={assistInstance}
        promptRequest={onPromptRequest}
        bannerTemplate={bannerTemplate}
        footerTemplate={footerTemplate}
        toolbarSettings={assistViewToolbarSettings}
        promptToolbarSettings={promptToolbarSettings}
        stopRespondingClick={handleStopResponse}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));