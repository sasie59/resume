import React from 'react';

import {
  Exp,
  Works,
  HeadTop,
  SkillAndTool,
} from './components';

import img from './components/Works/drum.png';
import img1 from './components/Works/sister.jpeg';
import img2 from './components/Works/bigBear.jpeg';

import './App.scss';
// 架構重新調整後 可一眼看出階層性 版面看的比較舒服
function App() {
  return (
    <div className="App">
      <div className="HeadTopBlock">
        <div className="block">
          <HeadTop />
        </div>
        <div className='area'></div>
      </div>
      <div className="SkillAndToolBlock">
        <div className="block">
          <div className="SkillBlock">
            <div className='skill'>我的技能</div>
            <SkillAndTool bgc='#f36518' border='#e64c17' text='HTML' lv='5' />
            <SkillAndTool bgc='#25a9df' border='#0071ba' text='CSS' lv='4' />
            <SkillAndTool bgc='#f2c100' border='#e5a310' text='JavaScript' lv='3' />
            <SkillAndTool bgc='#cf87ac' border='#d1629b' text='SCSS' lv='3' />
            <SkillAndTool bgc='#40d4ff' border='#00bbf0' text='React' lv='2' />
            <SkillAndTool bgc='#9e81c8' border='#7745bf' text='Redux' lv='2' />
          </div>
          <div className="ToolBlock">
            <div className='tool'>我的工具</div>
            <SkillAndTool bgc='#48b0f6' border='#3183ba' text='VSCode' lv='3' />
            <SkillAndTool bgc='#00e900' border='#017517' text='iTerm2' lv='2' />
            <SkillAndTool bgc='#f08e78' border='#f34f29' text='Git' lv='2' />
            <SkillAndTool bgc='#95737c' border='#99445f' text='Jest' lv='1' />
            <SkillAndTool bgc='#cccccc' border='#999999' text='CI/CD' lv='1' />
          </div>
        </div>
      </div>
      <div className="WorksBlock">
        <div className='profile'>
          我的作品集
        </div>
        <div className="block">
          <Works imgSrc={img} title="太鼓達人" description="lorem ..." />
          <Works imgSrc={img1} title="我的作品2" description="lorem ..." />
          <Works imgSrc={img2} title="我的作品3" description="lorem ..." />
        </div>
      </div>
      <div className="ExpBlock gray-bg">
        <div className='myExp'>
          我的經歷
        </div>
        <div className="block">
          <div className="work-exp">
            <Exp className='cpy' exp={0} text='國立陽明大學附設醫院' title='行政助理 ' year='2007' mm='05' data='迄今'
            article={'病歷組 : 病歷(門診、急診、住院)管理 住出院申報業務 '}
            article1={'門診組 : 門診、轉診、急診行政業務 辦理住出院相關業務 全院控床 摧款業務 偏遠鄉鎮醫療業務'} 
            article2={'洗腎室業務 : 盤點、申請衛材 進貨管理 洗腎申報 完成醫師、護理長交待等其他相關業務'} 
            />
          </div>
          <div className="space" />
          <div className="edu-exp">
            <Exp className='edu' exp={1} text='私立美和科技大學' title='醫務管理系 ' year='2000' mm='09' YEAR='2005' MM='06'
            article={'學 歷 : 學士'}
            article1={'在學期間為了想多多體驗不一樣的生活，於是開啟了打工人生'}
            article2={'加油站 : 引導車輛至正確的加油位置、協助兌換贈品、洗車、清潔遊覽車內外部、協助客人結帳、工作場所環境清潔與維護'}
            learn={'頭一次的打工讓我學習到團隊的重要，認識各種品牌的車種，與人溝通的眉眉角角，思考如何用最少的時間完成一項主管交待的工作'}
            article3={'統一超商 : 商品陳列、盤點進存貨、協助客人影印、宅配、預購商品、每日撿查商品到期日及過期品報銷'}
            learn1={'絕佳的記憶力/反應力/一心多用/時間分配/先進先出庫存管理/食品安全/十項全能什麼都要會'}
            article4={'飼料包裝工廠 : '}
            learn2={'有效率的工作，因為機器不會等人，一包飼料30公斤，完全就是靠體力'}
            article5={'推拿養生館 : 腳底按摩、身體經絡推拿'}
            learn3={'基本生理學,人體穴位,筋絡分布,足底反射器官區域'}
            article6={'畢業前夕與同學合作賣炸藍帶豬排 :'}
            learn4={'嚐試第一次什麼都自已來，很新奇，反向思考的要站在消費者的立場想這東西cp值高不高，各項成本計算考量、挑選好品質的肉品、加工，提供安全又衛生的產品給顧客'}
            end={'總結 : 以上的工作都可以透過一邊學習一邊工作來熟悉，都是用體力換取酬勞，但無獨特性，容易被人取代，而相對的報酬也不會很高。經過上面的種種才更加確定寫code是我未來想轉換跑道的動力來源'}
            />
            <Exp className='edu' exp={1} text='私立四維高中' title='商業經營科 ' year='1997' mm='09' YEAR='2000' MM='06'
            article={'學 歷 : 高職'} license={'證照 : 會計技術士丙級'}
            article1={'聯考數學 :'}
            article2={'英文 : '}
            article3={'培訓考會計乙級 :'}
            />
          </div>
        </div>
      </div>
      <div className="IntroBlock">
        <div className="block">
          <div className='title'>轉職工程師的歷程
          </div>
          <div className='readMe'>
            <p>
              以前因為自己個性的關係，對於自己的未來沒有多想，選擇了自己也不太知道喜不喜歡的醫管系，
              工作選擇了自己也不太確定喜不喜歡的醫院行政。當初的我，只覺得有一份安定的工作也不錯，
              而這一做就是13年。隨著年紀增長，對未來的也充滿了不安全感。一個機緣下，我決定跳離舒適圈，進入到程式的領域。
            </p>
            <p>
              這份機緣來自我的親弟弟，以前我對程式設計沒有什麼特別的感覺，直到有一年他出國七次，
              才打開了我對程式領域的好奇心。也開啟了我都沒想過的另一條路。
              宜蘭的工作什麼都好，就是待遇差了一點，養得活自己，但真的真的很難存錢，剛好弟弟會寫程式。
              他便當起了我的老師，帶我一步步走進程式的領域，不走不知道，一走嚇一跳。
              原來程式的世界如此廣闊，也難怪他每次回家時，總是筆電不離身。
              而宜蘭真的很少程式設計的工作，因此我也必須到大台北找前端工程師的工作。
            </p>
            <p>
              想轉職工程師的目的其實就是希望可以多賺一點錢，讓生活有多一點選擇，而不是都吃別人剩的。
              也許這就是過去的自己沒有好好認真想過未來的後果，但也沒有關係，只要從現在開始努力，還是有機會。
              雖然比一般人起步得慢，但我一定會好好重新學習。面對「此時」的轉職挑戰。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
