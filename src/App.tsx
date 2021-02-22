import React from 'react'
import './App.css'

export interface PickerOption {
  readonly text: string
  readonly result: PickerQuestion | SummaryPage
}

export interface SummaryPage {
  readonly logoSrc: string
  readonly description: string
  readonly href: string
  readonly targetBlank?: boolean
}

export interface PickerQuestion {
  readonly question: string
  readonly options: PickerOption[]
}

const isPickerQuestion = (tbd: SummaryPage | PickerQuestion): tbd is PickerQuestion => {
  return typeof (tbd as PickerQuestion).question !== 'undefined'
}

interface Props {
  readonly close: () => void
  readonly config: PickerQuestion
}

const App: React.FC<Props> = (props) => {
  const [optionIndices, setOptionIndices] = React.useState<number[]>([])

  console.log('optionIndices', optionIndices)
  console.log('props.config', props.config)
  
  const result = optionIndices.reduce<SummaryPage | PickerQuestion>((acc, cur) => {
    console.log('cur', cur)
    console.log('acc', acc)
    if (isPickerQuestion(acc)) {
      console.log('picker question', acc.options[cur]);
      
      return acc.options[cur].result
    }
    return acc
  }, props.config)

  console.log('result', result);
  

  let content: JSX.Element | null = null
  if (isPickerQuestion(result)) {
    content = <>
      <div className='__picker-app-left-side'>
        {result.question}
      </div>
      <div className='__picker-app-right-side'>
        {result.options.map((option, index) => (
          <button
            key={option.text}
            className='__picker-app-right-side-option'
            onClick={() => setOptionIndices([...optionIndices, index])}
          >
            {option.text}
          </button>
        ))}
      </div>
    </>
  } else {
    content = <>
      <div className='__picker-app-left-side'>
        Check this out:
      </div>
      <div className='__picker-app-right-side __picker-app-right-side-flex'>
        <img className='__picker-app-right-side-logo' alt='logo' src={result.logoSrc} />
        <p className='__picker-app-right-side-paragraph'>
          {result.description}
        </p>

        <a
          className='__picker-app-right-side-result-button'
          href={result.href}
          target={result.targetBlank ? '_blank' : ''}
          rel='noreferrer'
        >
          Take me there
        </a>
      </div>
    </>
  }

  return (
    <div className='__picker-app'>
      {content}
      {
        optionIndices.length > 0
          ? (
            <button
              className='__picker-app-back-button'
              onClick={() => setOptionIndices(optionIndices.slice(0, optionIndices.length - 1))}
            >
              {'< back'}
            </button>

          ) : null
      }
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
