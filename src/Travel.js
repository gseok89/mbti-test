import { useCallback, useEffect, useState } from 'react';
import './Travel.css';

import startImg from './img/Start_Img.png';
import resultImg from './img/07.png';
import linkImg from './img/share_btn.svg';
import fbImg from './img/facebook.svg';
import twtImg from './img/twitter.svg';
import kktImg from './img/kakao.svg';
import returnImg from './img/testReturn.svg';

function App() {

  
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setVh()

    function onResize(){
      setVh()
    }

    window.addEventListener('resize', onResize)
  },[])


  const [page, setPage] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questionList = [
    {q:['포토존 앞에서 어떤 커플이\n사진을 찍어달라고 한다.'],
    a:[{type:'I',text:'네~ (최대한 정성스럽게 여러번 찍는다)\n좋은 하루 되세요!'},
       {type:'E',text:'당연하죠! 남자분 고개 이쪽으로 더 땡겨주세요~\n(촬영후) 저희도 찍어주세요! ^o^'}]},
    {q:['축제장에 사람이 많아\n활기차고 시끌벅적하다.'],
    a:[{type:'I',text:'재밌겠다ㅎㅎ\n(이렇게 많을 줄 몰랐는데...)'},
       {type:'E',text:'와 진짜 재밌는거 많은가 보다ㅋㅋ\n얼른 구경하러 가자!'}]},
    {q:['축제를 재밌게 즐기고\n집에 도착했다.'],
    a:[{type:'I',text:'응응 오늘 재밌었어 ㅎㅎ 일단 좀 쉬구 생각해보자!'},
       {type:'E',text:'다른 축제도 진짜 재밌을 것 같은데 거기도 가보자 ^~^'}]},

    {q:['자기야! 화순에서\n가을꽃 축제 한다는데 갈래?'],
    a:[{type:'S',text:'좋아! 가을꽃 축제에 이쁜 거 많겠다.'},
       {type:'N',text:'가을꽃 축제? 가을에만 피는 꽃을 말하는 건가?\n가을꽃 종류가 따로 있는 건가? 헷갈리네...'}]},
    {q:['국화모양의 헬륨 풍선이 있다.\n떠오르는 생각은?'],
    a:[{type:'S',text:'우와 진짜 이쁘다! 나 저거 사줘!'},
       {type:'N',text:'헬륨풍선으로 꽃다발 만들면 날아가려나?'}]},
    {q:['축제에 오는데 내비가\n내가 아는 길로 알려주질 않는다.'],
    a:[{type:'S',text:'음 내비가 정확하겠지^^ 가라는대로 가보자'},
       {type:'N',text:'내가 알고 있는 길이 더 빠를 것 같은데?'}]},

    {q:['축제장에 있는 수 많은 꽃들과\n조형물을 보면서 드는 생각은?'],
    a:[{type:'F',text:'와 진짜 이쁘다. 자기야 나 여기서 찍어줘!'},
       {type:'T',text:'와 진짜 대단하다. 이건 어떻게 만들었을까?'}]},
    {q:['사고 싶었지만 비싸서 안 샀던\n기념품을 애인이 몰래 사왔다.'],
    a:[{type:'F',text:'그거 비쌌을 텐데ㅠㅠ 고마워'},
       {type:'T',text:'고마워. 그거 진짜 갖고 싶은 거였어'}]},
    {q:['조금 전에 기념품을 샀는데\n애인이 또 사려고 한다.'],
    a:[{type:'F',text:'그래! 이쁜건 사야지~'},
       {type:'T',text:'그거 결국 쓰레기 된다..?'}]},

    {q:['3일 뒤면 가을꽃 축제각.'],
    a:[{type:'P',text:'축제장 가면 알아서 재밌는 거 많이 있겠지~'},
       {type:'J',text:'뭐뭐 있는지 알아봐야지'}]},
    {q:['축제에서 데이트할 때 비용은?'],
    a:[{type:'P',text:'오늘 얼마 썼더라..? 음 대충 3만원^^ (5만원 넘게 씀)'},
       {type:'J',text:'이거 먹구 저거 사구.. 오늘은 텅장 안 되게 3만원만 써야겠다!'}]},
    {q:['축제에서 예쁜 기념품을 사서 온 후,'],
    a:[{type:'P',text:'일단 누워서 쉰다. 다음날 나갈 때 기념품 발견. 여기 둬야겠다!'},
       {type:'J',text:'내가 생각했던 장소에 기념품 안착!'}]},

    // {q:['테스트가 모두 끝났어. 결과 보러 갈래?'],
    // a:[{type:'',text:'결과 보러 가기'}]}
  ]


  const [mbtiList, setMbtiList] = useState([
    {name:'I',count:0}, {name:'E',count:0}, {name:'S',count:0}, {name:'N',count:0}, 
    {name:'F',count:0}, {name:'T',count:0}, {name:'P',count:0}, {name:'J',count:0}, 
  ])

 const handleCkAnswer = (type,idx) => {
  let ls = mbtiList
  for(let i = 0; i < ls.length; i++)
  {
    if(ls[i].name===type)
    {
      ls[i].count = ls[i].count + 1
    }
  }

  setMbtiList(ls)
  setPage(page+1)

  setProgress(page+1)

  if(idx+1 === questionList.length)
  {
    setMbti();
  }
 }

 const setProgress = useCallback((pageidx) => {
  var progress = document.querySelector('.questionProgressBar');
  
  let t = (100/questionList.length) * (pageidx - 1)
  
  // progress.style.width = (100/questionList.length) * pageidx + '%';
  const barAnimation = setInterval(() => {
    progress.style.width =  t + '%'
    t++ >= (100/questionList.length) * pageidx && clearInterval(barAnimation)
  }, 20)


 }, [questionList])

 useEffect(() => {
  if(page === 1)
  {
    setProgress(1)
  }
 }, [page, setProgress])

 const [mbtiContents, setMbtiContents] = useState([])


const [dots, setDots] = useState(''); // "..." 텍스트를 저장할 상태 변수

  useEffect(() => {

    if(page === questionList.length+1)
    {
        // 1초마다 "..." 텍스트를 갱신합니다.
        const interval = setInterval(() => {
          setDots((prevDots) => {
            // "..."이 3개인 경우 초기화하고 3초 후에 함수 이벤트 실행
            if (prevDots === '...') {
              setTimeout(() => {
                // 여기에 실행할 함수 이벤트 추가
                setPage(page+1)
                console.log('3초 후 함수 이벤트 실행');
              }, 2000);
              return '';
            }
            // 그렇지 않으면 한 개씩 추가
            return prevDots + '.';
          });
        }, 400);

        // 컴포넌트가 unmount 될 때 interval을 정리합니다.
        return () => clearInterval(interval);
    }

    
  });

    // 높이를 동적으로 변경할 변수를 선언합니다.
    const [dynamicHeight, setDynamicHeight] = useState('calc(var(--vh, 1vh) * 100)');

    // 특정 조건에 따라 높이를 변경하는 예시
    useEffect(() => {
      // 어떤 조건에서 동적 높이를 변경하고 싶다면 해당 조건을 여기에 추가합니다.
      if (page === questionList.length+2) {
        setDynamicHeight('auto'); // 높이를 자동으로 설정
      } else {
        setDynamicHeight('calc(var(--vh, 1vh) * 100)'); // 다시 초기값으로 설정
      }
    }, [page, questionList]);

 function setMbti(){
  let mc = [
    {mbti:'ENTP',contents:['말을 잘해요','이상한 말을 자주 해요','혼자서도 잘 해요']},
    {mbti:'INTP',contents:['팩폭을 잘해요','감수성이 풍부해요','주관이 뚜렷해요']},
    {mbti:'ESFJ',contents:['남을 잘 챙겨요','눈치가 빨라요','새로운 사람과의 술자리를 좋아해요']},
    {mbti:'ESTP',contents:['손재주가 좋아요','리더십이 있어요','표현을 아끼지 않아요']},
    {mbti:'ISFJ',contents:['남 챙기는 거 좋아해요','공감 잘 해요','내가 싫은 건 남한테도 안 해요']},
    {mbti:'ISTP',contents:['효율적인 거 좋아해요','관찰력이 뛰어나요','기계조작 잘 하고 좋아해요']},
    {mbti:'ENFJ',contents:['분위기 메이커예요','리액션을 잘 해요','남에게 싫은 소리를 잘 못해요']},
    {mbti:'INFJ',contents:['집돌이/집순이 성향이 강해요','사람을 보는 통찰력이 있어요','자신만의 철학이 있어요']},
    {mbti:'ENTJ',contents:['직감이 좋은 편이에요','주변 사람을 잘 챙겨요','열등감이 없어요']},
    {mbti:'INTJ',contents:['혼자있는 거 좋아해요','돈 관리 잘해요','공상 많이 해요']},
    {mbti:'ENFP',contents:['소통과 공감을 잘해요','은근 독립적인 성격이에요','생각을 많이 해요']},
    {mbti:'INFP',contents:['MBTI 정말 좋아해요','미룰 수 있는 건 끝까지 미뤄요','호불호가 명확해요']},
    {mbti:'ESFP',contents:['사교성이 좋아요','자존감이 높아요','상처 잘 받는데 또 잘 풀려요']},
    {mbti:'ISFP',contents:['노는 거 은근 좋아해요','근데 집에 있는 것도 좋아요','마이웨이 성향이 강해요']},
    {mbti:'ESTJ',contents:['호불호가 명확하고 단호해요','기억력이 좋아요','완벽주의자 기질이 있어요']},
    {mbti:'ISTJ',contents:['원리원칙적이에요','즉흥적인 거 싫어해요','철벽을 잘 쳐요']},
  ]

  let IorE =
      mbtiList.find(function(data){return data.name === 'I'}).count >
      mbtiList.find(function(data){return data.name === 'E'}).count? 'I':'E'
  let SorN =
      mbtiList.find(function(data){return data.name === 'S'}).count >
      mbtiList.find(function(data){return data.name === 'N'}).count? 'S':'N'
  let ForT =
      mbtiList.find(function(data){return data.name === 'F'}).count >
      mbtiList.find(function(data){return data.name === 'T'}).count? 'F':'T'
  let PorJ =
      mbtiList.find(function(data){return data.name === 'P'}).count >
      mbtiList.find(function(data){return data.name === 'J'}).count? 'P':'J'

  let mbti = IorE + SorN + ForT + PorJ

  setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])
 }

  return (
    <div className="mbti-layout"  style={{ height: dynamicHeight }}>
      {page===0?
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>화순 여행지</div>
            <div>테스트<span style={{fontSize : "30px"}}>(연인편)</span></div>
          </div>
          <div className='startImgLayout'>
            <div className='startImg'>
              <img className='image' src={startImg} alt='' />
            </div>
          </div>
          <div className='startBottomPageLayout'>
            <div onClick={()=> setPage(1)} className='startButton'>시작하기</div>
            <div className='creditImg' />
          </div>
          
        </div>
        :page <= questionList.length?
        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>화순 여행지 테스트</div>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>

          <div className='questionProgress'>
            <div className='questionProgressBg'>
              <div className='questionProgressBar'>
                </div>
                <div className='questionProgressDot'/>
            </div>
          </div>

          {questionList.map((val,idx)=>

              <div className='questionItemLayout'style={{display:page===idx+1?'flex':'none'}} key={idx}>
                <div className='questionItemImg'>
                  <img className='image' src={startImg} alt='' />
                </div>

                <div className='questionItemContent'>
                  {val.q.map((qval,qidx)=>
                    <div key={qidx}>
                      <div>{qval}</div>
                    </div>
                  )}
                </div>
            </div>
          )}

          {questionList.map((val,idx)=>
            <div className='answerItemLayout' style={{display:page===idx+1?'flex':'none'}} key={idx}>
            {val.a.map((aval,aidx)=>
              <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(aval.type,idx)}>
                {aval.text}
              </div>
            )}
          </div>
          )}

        </div>
        :page === questionList.length+1?
        <div className='LoadingPageLayout'>
          <div className='questionItemLayout'>
                <div className='questionItemImg'>
                  <img className='image' src={startImg} alt='' />
                </div>

                <div className='questionItemContent'>
                고인돌에서 광합성 중{dots}
                </div>
            </div>
        </div>
        :
        <div className='resultPageLayout'>

          <div className='resultBox'>
            <div className='jobNameLayout'>
              <div className='jobName'>역사적 탐방자</div>
              <div className='jobContent'>문화와 휴식을 즐기는 여행자</div>
            </div>
            <div className='jobImgWrapper'>
              <img className='image' src={resultImg} alt='' />
            </div>
            <div className='resultContent'>
              <div className='resultContentTxt'>당신의 <span style={{fontWeight : "800"}}>화순 여행지</span>는</div>
            </div>
            <div className='jobImgWrapper'>
              <img className='image' src={resultImg} alt='' />
            </div>
            <div className='placeName'>다산 아트 뮤지엄</div>
            <div className='placeContent'>역사와 예술을 사랑하는 당신! 다산 미술관에서 휴식과 문화를 만끽하는여행을 떠나보는건 어떠세요?</div>
            <div className='placeAddress'>전남 화순군 남면 다공길 25 다산 아트 뮤지엄</div>
          </div>

          <div className='otherBox'>
            <div className='otherContent'>이런 곳도 잘 어울려요!</div>
            <div className='otherLayout'>
              <div className='otherImgWrapper'>
              <img className='image' src={resultImg} alt='' />
              </div>
              <div className='otherPlaceLayout'>
                <div className='otherPlaceName'>화순 동가리 계곡</div>
                <div className='otherPlaceAddress'>전남 화순군 한천면 동산1길 77-11</div>
              </div>
            </div>
          </div>

          <div className='snsBox'>
            <div className='snsFriendTxt'>친구에게 공유하기</div>
            <div className='snsList'>
            <img src={linkImg} alt=''/>
            <img src={fbImg} alt=''/>
            <img src={twtImg} alt=''/>
            <img src={kktImg} alt=''/>
            </div>
          </div>

          <div className='shareBox'>
            <div className='shareBtn'>테스트 공유하기</div>
            <img className='rePlay' src={returnImg} alt='' onClick={()=>window.location.reload()} />
          </div>
                    
          {/* <div className='questionList' style={{display:'flex'}}>
            <div className='questionItemLayout'>
              <div className='profileImg'>
                <div/><div/>
              </div>

              <div className='chatListLayout'>
                  <div className='chatBox'>
                    <div>◀</div> <div>당신의 MBTI는 {mbtiContents.mbti}입니다.</div>
                  </div>
                  <div className='chatBox'>
                    <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                  </div>

                  {mbtiContents.contents.map((val,idx)=>
                    <div className='chatBox' key={idx}>
                    <div>◀</div> <div>{val}</div>
                    </div>
                  )}
              </div>
            </div>

            <div className='resultBox' onClick={()=>window.location.reload()}>다시하기</div>
            
          </div> */}
          
        </div>
      }
    </div>
  );
}


export default App;
