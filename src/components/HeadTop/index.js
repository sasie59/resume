import React from 'react'
import './style.scss';
const name = '謝士偉'
export function HeadTop() {
  return (
    <div className='center'>
      <div className='title'>
        嗨 我是{name}
        <div className='website'>
          這是我的個人網站
        </div>
      </div>
      <div className='second'>
        沒有背景 半路出家的網路工程師<br/>
        目前專注學習JavaScript<br/>
        希望有朝一日成為前端工程師
      </div>
        <div className='email'>
          sasie59@gmail.com
        </div>
    </div>
  )
}
