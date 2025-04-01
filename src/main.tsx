
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById("root");

if (rootElement) {
  // Use development mode conditionally to avoid double renders in production
  const StrictModeWrapper = process.env.NODE_ENV === 'development' 
    ? ({ children }: { children: React.ReactNode }) => <React.StrictMode>{children}</React.StrictMode>
    : ({ children }: { children: React.ReactNode }) => <>{children}</>;

  createRoot(rootElement).render(
    <StrictModeWrapper>
      <App />
    </StrictModeWrapper>
  );
} else {
  console.error("Root element not found");
}
