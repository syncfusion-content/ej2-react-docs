import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  const chatInstance = React.useRef(null);
  const speechToTextObj = React.useRef(null);
  const chatuiFooter = React.useRef(null);
  const chatuiSendButton = React.useRef(null);

  const currentUserModel = {
    id: 'user1',
    user: 'Albert',
  };

  const michaleUserModel = {
    id: 'user2',
    user: 'Michale Suyama',
  };

  // Renders the footer template including editable input, speech-to-text component, and send button
  const footerTemplate = () => {
    return (
      <div className="e-footer-wrapper">
        <div id="chatui-footer" ref={chatuiFooter} className="content-editor" contentEditable="true" placeholder="Click to speak or start typing..." onInput={toggleButtons} onKeyDown={handleKeyDown}></div>
        <div className="option-container">
          <SpeechToTextComponent id="speechToText" ref={speechToTextObj} cssClass="e-flat" transcriptChanged={onTranscriptChange} onStop={onListeningStop} created={onCreated}/>
          <ButtonComponent id="chatui-sendButton" ref={chatuiSendButton} className="e-assist-send e-icons" onClick={sendIconClicked}/>
        </div>
      </div>
    );
  };

  // Executes the current prompt from the footer input and clears it
  const sendIconClicked = () => {
    const editor = chatuiFooter.current; // Use .current for React refs
    const messageContent = editor?.innerText || '';
    if (messageContent.trim()) {
      chatInstance.current?.addMessage({
        author: currentUserModel,
        text: messageContent,
      });
      editor.innerText = '';
      toggleButtons(); // Update button visibility
    }
  };

  // Updates the footer input with the latest speech transcript
  const onTranscriptChange = (args) => {
    if (chatuiFooter.current) {
      chatuiFooter.current.innerText = args.transcript;
    }
  };

  // Toggles button visibility when speech-to-text listening stops
  const onListeningStop = () => {
    toggleButtons();
  };

  // Initializes button visibility when the speech-to-text component is created
  const onCreated = () => {
    toggleButtons();
  };

  // Toggles visibility of send and speech buttons based on whether the input has text
  const toggleButtons = () => {
    const chatuiFooterEle = chatuiFooter.current;
    const sendButtonEle = chatuiSendButton.current?.element;
    const speechButtonEle = speechToTextObj.current?.element;
    if (!chatuiFooterEle || !sendButtonEle || !speechButtonEle) {
      return;
    }
    const hasText = chatuiFooterEle.innerText.trim() !== '';
    sendButtonEle.classList.toggle('visible', hasText);
    speechButtonEle.classList.toggle('visible', !hasText);
    if (
      !hasText &&
      (chatuiFooterEle.innerHTML.trim() === '' ||
        chatuiFooterEle.innerHTML === '<br>')
    ) {
      chatuiFooterEle.innerHTML = '';
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      sendIconClicked();
      event.preventDefault();
    }
  };

  React.useEffect(() => {
    // Defer toggleButtons until after mount to ensure refs are ready
    toggleButtons();
  }, []);

  return (
    <div class="integration-speechtotext">
      <ChatUIComponent id="chatui" ref={chatInstance} user={currentUserModel} footerTemplate={footerTemplate}>
        <MessagesDirective>
          <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel}/>
          <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel}/>
          <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel}/>
        </MessagesDirective>
      </ChatUIComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));