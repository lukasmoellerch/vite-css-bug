import "./abc";

export const renderApp = () => `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

if (import.meta.hot) {
  import.meta.hot.accept();
}
