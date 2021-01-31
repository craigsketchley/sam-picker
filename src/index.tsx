import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App, { PickerConfig } from './App'

// @ts-ignore
const config: PickerConfig = window.__PICKER_CONFIG__ || {
  question: 'I am:',
  options: [
    {
      text: 'a company',
      result: {
        question: 'and want:',
        options: [
          {
            text: 'a simple branded experience',
            href: 'https://photobooth.co/themes',
            targetBlank: true
          },
          {
            text: 'ideas for a party',
            href: 'https://photobooth.co/pro-booth',
            targetBlank: true
          },
          {
            text: 'a virtual experience',
            href: 'https://brandmatic.co',
            targetBlank: true
          },
          {
            text: 'a long term install',
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'trade show solutions',
            href: 'https://simpleasmilk.com',
            targetBlank: true
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
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'a simple branded experience',
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'something totally custom',
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'to discuss options with you',
            href: 'https://simpleasmilk.com',
            targetBlank: true
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
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'a DIY photo booth',
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'my guests to take their own photos',
            href: 'https://simpleasmilk.com',
            targetBlank: true
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
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'a DIY photo booth',
            href: 'https://simpleasmilk.com',
            targetBlank: true
          },
          {
            text: 'my guests to take their own photos',
            href: 'https://simpleasmilk.com',
            targetBlank: true
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
            href: 'https://photobooth.co/contact',
            targetBlank: true
          },
          {
            text: 'lots of alcohol',
            href: 'https://simpleasmilk.com',
            targetBlank: true
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
