import React, { useEffect } from 'react';
import './index.css';

export default function Bot() {
  useEffect(() => {
    // Dynamically load the Dialogflow script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      <df-messenger
        project-id="playground-ai-voice-assistant"
        agent-id="27dc6c99-7a35-45be-b088-e0d86bfb6a85"
        language-code="it"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Ben" chat-title-icon="Ben.svg"></df-messenger-chat-bubble>
      </df-messenger>
    </>
  );
}
