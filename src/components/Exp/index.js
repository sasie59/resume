import React from 'react'
import './style.scss';

export function Exp(props) {
  return (
    <div className="Exp">
      <div className='cpyAndEdu'>{props.exp ? `${props.text}` : `${props.text}` }
      </div>
      <div className='exp'>
        <span className='gradAndTitle'>{props.exp ? `${props.title}` : `${props.title}`}
        </span>
        <span className='year'>{props.year}/{props.mm}~{props.YEAR}/{props.MM}{props.data}
        </span>
        <div className='description'>
              {props.article}<br/>
          <p>{props.article1}</p>
          <p>{props.article2}</p>
          <span>{props.learn}</span>
          <p>{props.article3}</p>
          <span>{props.learn1}</span>
          <p>{props.article4}</p>
          <span>{props.learn2}</span>
          <p>{props.article5}</p>
          <span>{props.learn3}</span>  
          <p>{props.article6}</p>
          <span>{props.learn4}</span>
          <p>{props.license}</p>
          <p>{props.end}</p>
        </div>
      </div>
    </div>
  )
}


