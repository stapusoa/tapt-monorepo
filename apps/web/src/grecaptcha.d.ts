declare var grecaptcha: {
  enterprise: {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
    ready: (callback: () => void) => void;
  };
};