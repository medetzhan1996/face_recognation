import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { LivenessQuickStartReact } from './LivenessQuickStartReact';
import '@aws-amplify/ui-react/styles.css';
import awsexports from './aws-exports';

Amplify.configure(awsexports);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LivenessQuickStartReact />
      </BrowserRouter>
    </ThemeProvider>
  );
}
