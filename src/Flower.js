import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import './Flower.css';

import startImg from './img/flower_result/Flower_Start.png';
import loadingImg from './img/question/Progress_Icon.png';



function App() {

  const navigate = useNavigate();

  const goToNavi = () => {
    navigate(`result/${mbtiIndex}`);
  }

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
    {
      q:['새로운 도전을 앞두고 있을 때,\n어떤 방식으로 접근하시나요?'],
      a:[{type:'S',text:'실제 가능성과 세부 사항을 주로 고려하여 계획을 세운다.'},
       {type:'N',text:'큰 그림과 잠재적인 가능성을 고려하여 계획을 세운다.'}],
      qimg: require('./img/question/Q4.png')
    },
    {
      q:['계획을 세우고 진행할 때,\n어떻게 대처하시나요?'],
      a:[{type:'P',text:'상황에 따라 일정과 방향을 조정하며 유연하게 일을 처리한다.'},
       {type:'J',text:'미리 계획한 일정과 목표를 엄격하게 지키며 진행한다.'}],
      qimg: require('./img/question/Q10.png')
    },
    {
      q:['여행을 갈 때,\n어떤 스타일을 선호하나요?'],
      a:[{type:'S',text:'세부 일정과 경로를 미리 계획하고 따른다.'},
       {type:'N',text:'그날의 기분과 상황에 따라 즉흥적으로 움직이는 편이다.'}],
      qimg: require('./img/question/Q6.png')
    },
    {
      q:['주말에 나는 주로\n어떤 활동을 즐기나요?'],
      a:[{type:'I',text:'혼자 조용한 공간에서 책을 읽거나 고요한 시간을 갖는다.'},
          {type:'E',text:'주변 친구들과 약속을 잡아 시간을 보낸다.'}],
      qimg: require('./img/question/Q2.png')
    },
    {
      q:['문제를 해결할 때,\n어떤 요소를 주로 고려하나요?'],
      a:[{type:'S',text:'논리적인 해결책과 사실에 주로 초점을 맞춘다.'},
       {type:'N',text:'창의적인 아이디어와 가능성을 고려하는 것을 선호한다.'}],
      qimg: require('./img/question/Q5.png')
    },
    {
      q:['모임에 가면\n나는 어떻게 행동하나요?'],
      a:[{type:'I',text:'다른 사람들의 이야기를 주로 듣는다.'},
          {type:'E',text:'대화를 주도적으로 이끄는 편이다.'}],
      qimg: require('./img/question/Q1.png')
    },
    {
      q:['어려운 결정을 할 때,\n어떤 방식으로 결정하시나요?'],
      a:[{type:'F',text:'감정과 다른 사람의 의견을 중요하게 고려하여 결정한다.'},
       {type:'T',text:'논리적인 장단점을 분석하여 결정한다.'}],
      qimg: require('./img/question/Q7.png')
    },
    {
      q:['일을 마무리할 때,\n어떻게 행동하시나요?'],
      a:[{type:'P',text:'마지막 순간까지 일정을 미루는 경향이 있다.'},
       {type:'J',text:'미리 계획한 일정대로 엄격하게 일을 완료한다.'}],
      qimg: require('./img/question/Q11.png')
    },
    {
      q:['일을 진행할 때,\n어떤 방식으로 접근하나요?'],
      a:[{type:'F',text:'동료들의 감정에 민감하게 대하고 협력을 중요하게 생각한다.'},
       {type:'T',text:'업무를 논리적으로 계획하고 추진하는 것을 선호한다.'}],
      qimg: require('./img/question/Q9.png')
    },
    {
      q:['다른 사람들의 의견을 수렴할 때,\n어떻게 접근하나요?'],
      a:[{type:'F',text:'공감과 이해를 중요하게 생각하며 다른 사람의 감정을 고려한다.'},
       {type:'T',text:'주장과 논리를 중요하게 생각하여 의사 결정을 한다.'}],
      qimg: require('./img/question/Q8.png')
    },
    {
      q:['새로운 경험을 할 때,\n어떤 방식으로 준비하나요?'],
      a:[{type:'I',text:'미리 계획을 세우고 일정을 따른다.'},
       {type:'E',text:'그 날의 기분과 상황에 따라 유연하게 대처한다.'}],
      qimg: require('./img/question/Q3.png')
    },
    {
      q:['여행 계획을 세울 때,\n어떤 스타일을 선호하시나요?'],
      a:[{type:'P',text:'그때의 기분에 따라 일정을 조절하고 선택하는 편이다.'},
       {type:'J',text:'일정, 숙소, 관광지 등을 미리 예약하고 계획을 따르는 편이다.'}],
      qimg: require('./img/question/Q12.png')
    },
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
  var progress = document.querySelector('.questionFlowerProgressBar');
  
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

//  const [mbtiContents, setMbtiContents] = useState([])
//  const [fitMbti, setFitMbti] = useState([])
 const [mbtiIndex, setMbtiIndex] = useState([])


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
                // setPage(page+1)
                goToNavi()
                //라우터 링크 넘겨버리기
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

    // // 높이를 동적으로 변경할 변수를 선언합니다.
    // const [dynamicHeight, setDynamicHeight] = useState('calc(var(--vh, 1vh) * 100)');

    // // 특정 조건에 따라 높이를 변경하는 예시
    // useEffect(() => {
    //   // 어떤 조건에서 동적 높이를 변경하고 싶다면 해당 조건을 여기에 추가합니다.
    //   if (page === questionList.length+2) {
    //     setDynamicHeight('auto'); // 높이를 자동으로 설정
    //   } else {
    //     setDynamicHeight('calc(var(--vh, 1vh) * 100)'); // 다시 초기값으로 설정
    //   }
    // }, [page, questionList]);

 function setMbti(){
  let mc = [
    {
      mbti:'ISTJ'
    },
    {
      mbti:'ISFJ'
    },
    {
      mbti:'INFJ'
    },
    {
      mbti:'INTJ'
    },
    {
      mbti:'ISTP'
    },
    {
      mbti:'ISFP'
    },
    {
      mbti:'INFP'
    },
    {
      mbti:'INTP'
    },
    {
      mbti:'ESTP'
    },
    {
      mbti:'ESFP'
    },
    {
      mbti:'ENFP'
    },
    {
      mbti:'ENTP'
    },
    {
      mbti:'ESTJ'
    },
    {
      mbti:'ESFJ'
    },
    {
      mbti:'ENFJ'
    },
    {
      mbti:'ENTJ'
    },

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

  setMbtiIndex(mc.findIndex(val => val.mbti === mbti))

  // setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])
  // setFitMbti(mc.filter(val=>val.fitmbti === mbti)[0])
 }


  return (
    <div className="mbti-layout">
      <Helmet>
        <title>화순 꽃 성격 테스트</title>
        <meta name="description" content="나는 어떤 꽃과 어울릴까?" data-react-helmet="true"/>
        <meta property="og:title" content="화순 여행지 테스트" data-react-helmet="true"/>
        <meta property="og:description" content="나는 화순의 어떤 곳과 어울릴까?" data-react-helmet="true" />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo512.png`} data-react-helmet="true"/>
      </Helmet>
      {page===0?
        <div className='startFlowerPageLayout'>
          <div className='startFlowerLogo'>
            <div>화순 꽃</div>
            <div>MBTI 테스트</div>
          </div>
          <div className='startImgLayout'>
            <div className='startImg'>
              <img className='image' src={startImg} alt='' />
            </div>
          </div>
          <div className='startBottomPageLayout'>
            <div onClick={()=> setPage(1)} className='startFlowerButton'>시작하기</div>
            <div className='creditImg' />
          </div>
          
        </div>
        :page <= questionList.length?
        <div className='questionFlowerLayout'>
          <div className='mbtiFlowerTitle'>
            <div>화순 꽃 MBTI 테스트</div>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>

          <div className='questionProgress'>
            <div className='questionFlowerProgressBg'>
              <div className='questionFlowerProgressBar'>
                </div>
                {/* <div className='progressItemImg'>
                  <img className='image' src={progressImg} alt='' />
                </div> */}
                <div className='questionFlowerProgressDot'/>
            </div>
          </div>

          {questionList.map((val,idx)=>

              <div className='questionItemLayout'style={{display:page===idx+1?'flex':'none'}} key={idx}>
                {/* <div className='questionItemImg'>
                  <img className='image' src={val.qimg} alt='' />
                </div> */}

                <div className='questionFlowerItemContent'>
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
        // :page === questionList.length+1?
        :
        <div className='LoadingFlowerPageLayout'>
          <div className='questionItemLayout'>
                <div className='LoadingItemImg'>
                  <img className='image' src={loadingImg} alt='' />
                </div>

                <div className='questionFlowerItemContent'>
                꽃을 피워내는 중{dots}
                </div>
            </div>
        </div>
      }
    </div>
  );
}


export default App;
