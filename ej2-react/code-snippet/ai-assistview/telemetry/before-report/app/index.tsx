import { AIAssistViewComponent, PromptRequestEventArgs, TelemetryReport, TelemetrySettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    const suggestions: string[] = [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?"
    ];
    // Invoked before every report is delivered. Return the report (modified or not)
    // to deliver it, or null to suppress the report entirely.
    const beforeReport = (report: TelemetryReport): TelemetryReport | null => {
        report.customAttributes = { region: 'us-east-1', tenant: 'acme', beta: true };
        return report;
    };

    const telemetrySettings: TelemetrySettingsModel = {
        enable: true,
        beforeReport: beforeReport
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        // Your required action here
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
        }, 1000);
    };

    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent
            id="beforereport"
            ref={assistInstance}
            promptRequest={onPromptRequest}
            promptSuggestions={suggestions}
            telemetrySettings={telemetrySettings}
        ></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));