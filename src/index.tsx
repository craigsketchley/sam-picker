import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App, { PickerQuestion } from './App'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const DEMO_RESULT = {
  description: LOREM,
  logoSrc: 'https://photobooth.co/wp-content/themes/photobooth/img/logo-white.png',
  href: 'https://photobooth.co/themes',
  targetBlank: true
}

const config: PickerQuestion = (window as any).__PICKER_CONFIG__ || {
  question: 'I am:',
  options: [
    {
      text: 'a company',
      result: {
        question: 'and want:',
        options: [
          {
            text: 'a simple branded experience',
            result: DEMO_RESULT
          },
          {
            text: 'ideas for a party',
            result: DEMO_RESULT
          },
          {
            text: 'a virtual experience',
            result: DEMO_RESULT
          },
          {
            text: 'a long term install',
            result: DEMO_RESULT
          },
          {
            text: 'trade show solutions',
            result: DEMO_RESULT
          }
        ]
      }
    },
    {
      text: 'an agency',
      result: {
        question: 'and want:',
        options: [
          {
            text: 'activation ideas',
            result: DEMO_RESULT
          },
          {
            text: 'a simple branded experience',
            result: DEMO_RESULT
          },
          {
            text: 'something totally custom',
            result: DEMO_RESULT
          },
          {
            text: 'to discuss options with you',
            result: DEMO_RESULT
          }
        ]
      }
    },
    {
      text: 'planning a wedding',
      result: {
        question: 'and want:',
        options: [
          {
            text: 'a photo booth that prints',
            result: DEMO_RESULT
          },
          {
            text: 'a DIY photo booth',
            result: DEMO_RESULT
          },
          {
            text: 'my guests to take their own photos',
            result: DEMO_RESULT
          }
        ]
      }
    },
    {
      text: 'having a party',
      result: {
        question: 'and want:',
        options: [
          {
            text: 'a photo booth that prints',
            result: DEMO_RESULT
          },
          {
            text: 'a DIY photo booth',
            result: DEMO_RESULT
          },
          {
            text: 'my guests to take their own photos',
            result: DEMO_RESULT
          }
        ]
      }
    },
    {
      text: 'totally lost',
      result: {
        question: 'and want:',
        options: [
          {
            text: 'someone to call me',
            result: DEMO_RESULT
          },
          {
            text: 'lots of alcohol',
            result: DEMO_RESULT
          }
        ]
      }
    }
  ]
}

// @ts-ignore
window.__openPickerApp = (root: HTMLElement, onClose: () => void) => {
  const close = () => {
    ReactDOM.unmountComponentAtNode(root)
    onClose()
  }

  ReactDOM.render(
    <React.StrictMode>
      <App config={config} close={close} />
    </React.StrictMode>,
    root
  )
}
