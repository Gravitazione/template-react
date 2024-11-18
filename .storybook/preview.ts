/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Preview } from '@storybook/react';
// @ts-ignore
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
};

export default preview;
