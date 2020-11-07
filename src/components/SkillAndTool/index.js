import React from 'react';

import './style.scss';

/** 建議你在寫這個元件時
 * 也備註一下這個 props 會使用哪些屬性會比較好
 * 像這樣:
 * bgc: string
 * text: string
 * lv: string
*/

export function SkillAndTool(props) {
  return (
    <div className="SkillAndTool">
      <div className="skill">{props.text}</div>
      <div className="bar">
        <div className="gray-line" />
        <div
          className="hotdog"
          style={{
            borderColor: `${props.border}`,
            width: `${props.lv * 10}%`,
            backgroundColor: props.bgc,
          }}
        >
          <div className='lv'>
            LV{props.lv}
          </div>
        </div>
      </div>
      <div className="lv">LV{props.lv}</div>
    </div>
  )
}

