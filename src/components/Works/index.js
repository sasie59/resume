import React from 'react';
import './style.scss';
/** 這個元件應該會吃一些屬性吧，仔細想一下 */
/**
 * imgSrc
 * title
 * description
 */
export function Works(props) {
  return (
    <div className='Works'>
      <div
        className='img'
        style={{
          backgroundImage: `url(${props.imgSrc})`,
        }}
      />
      <div className='text'>
        <div className="title">{props.title}-</div>
        <div className="description">
          {props.description}
        </div>
      </div>
    </div>
  )
}
