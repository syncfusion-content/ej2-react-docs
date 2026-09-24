import { AIAssistViewComponent, PromptRequestEventArgs, TelemetryData, TelemetryMetric, TelemetrySettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    const suggestions: string[] = [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?"
    ];
    // Limits the report to the specified metrics and fixes their display order in the tooltip.
    const telemetrySettings: TelemetrySettingsModel = {
        enable: true,
        metrics: ['status', 'duration', 'model', 'inputTokens', 'outputTokens', 'totalTokens'] as TelemetryMetric[]
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        // Your required action here
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            // Mock telemetry data with hard-coded usage values.
            let telemetryData: TelemetryData = {
                model: 'gpt-4o',
                inputTokens: 128,
                outputTokens: 512
            };
            assistInstance.current.addPromptResponse(defaultResponse, true, telemetryData);
        }, 1000);
    };

    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent
            id="metrics"
            ref={assistInstance}
            promptRequest={onPromptRequest}
            promptSuggestions={suggestions}
            telemetrySettings={telemetrySettings}
        ></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));