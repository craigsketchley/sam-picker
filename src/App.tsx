import React from 'react'
import './App.css'

export interface PickerOption {
  readonly text: string
  readonly href?: string
  readonly targetBlank?: boolean
  readonly result?: PickerConfig
}

export interface PickerConfig {
  readonly question: string
  readonly options: PickerOption[]
}

interface Props {
  readonly close: () => void
  readonly config: PickerConfig
}

const App: React.FC<Props> = (props) => {
  const [optionIndex, setOptionIndex] = React.useState(-1)

  const config = props.config.options[optionIndex]?.result || props.config

  return (
    <div className='__picker-app'>
      <div className='__picker-app-left-side'>
        {config.question}
      </div>
      <div className='__picker-app-right-side'>
        {config.options.map((option, index) => {
          if (option.href) {
            return (
              <a
                key={option.text}
                className='__picker-app-right-side-option'
                onClick={props.close}
                href={option.href}
                rel='noreferrer'
                target={option.targetBlank ? '_blank' : ''}
              >
                {option.text}
              </a>
            )
          } else if (option.result) {
            return (
              <button
                key={option.text}
                className='__picker-app-right-side-option'
                onClick={() => setOptionIndex(index)}
              >
                {option.text}
              </button>
            )
          }
          return null
        })}
      </div>
      <button
        className='__picker-app-close-button'
        onClick={props.close}
      >
        X
      </button>
    </div>
  )
}

export default App
