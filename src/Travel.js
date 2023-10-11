import { useCallback, useEffect, useState } from 'react';
import './Travel.css';
import { useNavigate } from 'react-router-dom';

import startImg from './img/Start_Img.png';
import linkImg from './img/share_btn.svg';
import fbImg from './img/facebook.svg';
import twtImg from './img/twitter.svg';
import kktImg from './img/kakao.svg';
import {FaLocationDot} from 'react-icons/fa6';
import { MdReplay } from "react-icons/md";


function App() {

  const navigate = useNavigate();

  const goToNavi = () => {
    navigate(`result/${mbtiIndex}`);
    
  }

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('텍스트가 복사되었습니다.');
      })
      .catch((error) => {
        console.error('복사 실패:', error);
      });
  };
  
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
      q:['포토존 앞에서 어떤 커플이\n사진을 찍어달라고 한다.'],
      a:[{type:'I',text:'네~ (최대한 정성스럽게 여러번 찍는다)\n좋은 하루 되세요!'},
          {type:'E',text:'당연하죠! 남자분 고개 이쪽으로 더 땡겨주세요~\n(촬영후) 저희도 찍어주세요! ^o^'}],
      qimg: require('./img/Start_Img.png')
    },
    {
      q:['축제장에 사람이 많아\n활기차고 시끌벅적하다.'],
      a:[{type:'I',text:'재밌겠다ㅎㅎ\n(이렇게 많을 줄 몰랐는데...)'},
          {type:'E',text:'와 진짜 재밌는거 많은가 보다ㅋㅋ\n얼른 구경하러 가자!'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['축제를 재밌게 즐기고\n집에 도착했다.'],
      a:[{type:'I',text:'응응 오늘 재밌었어 ㅎㅎ 일단 좀 쉬구 생각해보자!'},
       {type:'E',text:'다른 축제도 진짜 재밌을 것 같은데 거기도 가보자 ^~^'}],
      qimg: require('./img/result/ISFJ_1.png')
    },

    {
      q:['자기야! 화순에서\n가을꽃 축제 한다는데 갈래?'],
      a:[{type:'S',text:'좋아! 가을꽃 축제에 이쁜 거 많겠다.'},
       {type:'N',text:'가을꽃 축제? 가을에만 피는 꽃을 말하는 건가?\n가을꽃 종류가 따로 있는 건가? 헷갈리네...'}],
      qimg: require('./img/result/ESFP_1.png')
    },
    {
      q:['국화모양의 헬륨 풍선이 있다.\n떠오르는 생각은?'],
      a:[{type:'S',text:'우와 진짜 이쁘다! 나 저거 사줘!'},
       {type:'N',text:'헬륨풍선으로 꽃다발 만들면 날아가려나?'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['축제에 오는데 내비가\n내가 아는 길로 알려주질 않는다.'],
      a:[{type:'S',text:'음 내비가 정확하겠지^^ 가라는대로 가보자'},
       {type:'N',text:'내가 알고 있는 길이 더 빠를 것 같은데?'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['축제장에 있는 수 많은 꽃들과\n조형물을 보면서 드는 생각은?'],
      a:[{type:'F',text:'와 진짜 이쁘다. 자기야 나 여기서 찍어줘!'},
       {type:'T',text:'와 진짜 대단하다. 이건 어떻게 만들었을까?'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['사고 싶었지만 비싸서 안 샀던\n기념품을 애인이 몰래 사왔다.'],
      a:[{type:'F',text:'그거 비쌌을 텐데ㅠㅠ 고마워'},
       {type:'T',text:'고마워. 그거 진짜 갖고 싶은 거였어'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['조금 전에 기념품을 샀는데\n애인이 또 사려고 한다.'],
      a:[{type:'F',text:'그래! 이쁜건 사야지~'},
       {type:'T',text:'그거 결국 쓰레기 된다..?'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['3일 뒤면 가을꽃 축제각.'],
      a:[{type:'P',text:'축제장 가면 알아서 재밌는 거 많이 있겠지~'},
       {type:'J',text:'뭐뭐 있는지 알아봐야지'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['축제에서 데이트할 때 비용은?'],
      a:[{type:'P',text:'오늘 얼마 썼더라..? 음 대충 3만원^^ (5만원 넘게 씀)'},
       {type:'J',text:'이거 먹구 저거 사구.. 오늘은 텅장 안 되게 3만원만 써야겠다!'}],
      qimg: require('./img/result/ISFP_1.png')
    },
    {
      q:['축제에서 예쁜 기념품을 사서 온 후,'],
      a:[{type:'P',text:'일단 누워서 쉰다. 다음날 나갈 때 기념품 발견. 여기 둬야겠다!'},
       {type:'J',text:'내가 생각했던 장소에 기념품 안착!'}],
      qimg: require('./img/result/ISFP_1.png')
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
 const [fitMbti, setFitMbti] = useState([])
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
                setPage(page+1)
                // goToNavi()
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
    {
      mbti:'ISTJ',
      jobname:'역사적 탐방자',
      jobcontent:'문화와 휴식을 즐기는 여행자',
      jobimg: require('./img/result/ISTJ_1.png'),
      placename:'다산 아트 뮤지엄',
      placecontent:'역사와 예술을 사랑하는 당신!\n다산 미술관에서 휴식과 문화를 만끽하는 여행을 떠나보는 건 어떠세요?',
      placeaddress:'전남 화순군 남면 다공길 25 다산 아트 뮤지엄',
      placeimg: require('./img/result/ISTJ_1.png'),
      fitmbti:'ENFP'
    },
    {
      mbti:'ISFJ',
      jobname:'치유적인 여행객',
      jobcontent:'여행객의 치유사',
      jobimg: require('./img/result/ISFJ_1.png'),
      placename:'운주사',
      placecontent:'자연과 역사를 통해 힐링하는 것을 좋아하는 당신!\n운주사에서 천불천탑의 미스테리와 자연을 느껴보는 건 어떠세요?',
      placeaddress:'전남 화순군 도암면 천태로 91-44 운주사',
      placeimg: require('./img/result/ISFJ_1.png'),
      fitmbti:'ENTP'
    },
    {
      mbti:'INFJ',
      jobname:'문화적 탐험가',
      jobcontent:'문화발견왕',
      jobimg: require('./img/result/INFJ_1.png'),
      placename:'영벽정',
      placecontent:'독특하고 흥미로운 경험을 좋아하는 당신!\n영벽정에서 화순의 보물같은 경치를 발견해보는 건 어떨까요?',
      placeaddress:'전라남도 화순군 능주면 관영리 1 영벽정',
      placeimg: require('./img/result/INFJ_1.png'),
      fitmbti:'ESTP'
    },
    {
      mbti:'INTJ',
      jobname:'지적인 여행객',
      jobcontent:'소소한 지식탐험가',
      jobimg: require('./img/result/INTJ_1.png'),
      placename:'소소 미술관',
      placecontent:'지식과 예술 탐험을 좋아하는 당신!\n소소미술관에서 작지만 깊은 지식을 탐험해보는 건 어떠세요?',
      placeaddress:'전라남도 화순군 도곡면 지강로 467-1 소소미술관',
      placeimg: require('./img/result/INTJ_1.png'),
      fitmbti:'ESFP'
    },
    {
      mbti:'ISTP',
      jobname:'자연 속의 모험가',
      jobcontent:'자연 속의 모험러',
      jobimg: require('./img/result/ISTP_1.png'),
      placename:'천불천탑',
      placecontent:'역사의 미스테리와 문화유산과 자연을 좋아하는 당신!\n천개의 탑과 불상이 있었다는 천불천탑의 미스테리를 알아보는 것은 어떠세요?',
      placeaddress:'전라남도 화순군 도암면 천태로 91-44 천불천탑',
      placeimg: require('./img/result/ISTP_1.png'),
      fitmbti:'ENFJ'
    },
    {
      mbti:'ISFP',
      jobname:'예술과 자연 애호가',
      jobcontent:'예술과 자연의 친구',
      jobimg: require('./img/result/ISFP_1.png'),
      placename:'고인돌 유적지',
      placecontent:'창의성과 아름다움을 함께 탐구하는 당신!\n화순 고인돌 유적지에서 자연의 아름다움과 선사인들의 발자취를 엿보는 건 어떠세요?',
      placeaddress:'화순군 도곡면 효산리 64 고인돌유적지',
      placeimg: require('./img/result/ISFP_1.png'),
      fitmbti:'ENTJ'
    },
    {
      mbti:'INFP',
      jobname:'정서적 탐험가',
      jobcontent:'감성 탐험가',
      jobimg: require('./img/result/INFP_1.png'),
      placename:'수만리 철쭉 공원',
      placecontent:'아름다운 것을 보며 마음의 평화를 원하는 당신!\n수만리 철쭉 공원에서 화순의 감성을 듬뿍 느껴보는 건 어떠세요?',
      placeaddress:'전남 화순군 화순읍 안양산로 258 수만리 철쭉 공원',
      placeimg: require('./img/result/INFP_1.png'),
      fitmbti:'ESTJ'
    },
    {
      mbti:'INTP',
      jobname:'지적 탐험가',
      jobcontent:'지식 엔지니어',
      jobimg: require('./img/result/INTP_1.png'),
      placename:'화순 거석테마파크',
      placecontent:'역사와 창의성을 함께 탐구하는 당신!\n화순 거석테마파크에서 세계 거석문화의 신비로움을 느껴보는 건 어떠세요?',
      placeaddress:'전라남도 화순군 도곡면 효산리 172-1 화순 거석테마파크',
      placeimg: require('./img/result/INTP_1.png'),
      fitmbti:'ESFJ'
    },
    {
      mbti:'ESTP',
      jobname:'액티브한 여행객',
      jobcontent:'사교의 신',
      jobimg: require('./img/result/ESTP_1.png'),
      placename:'무등산 양떼목장',
      placecontent:'사교성이 좋고 특별한 활동을 좋아하는 당신!\n무등산 양떼목장에서 양들과 특별한 친구가 되어보는건 어떠세요?',
      placeaddress:'전라남도 화순군 화순읍 안양산로 537 무등산 양떼목장',
      placeimg: require('./img/result/ESTP_1.png'),
      fitmbti:'INFJ'
    },
    {
      mbti:'ESFP',
      jobname:'사교적인 여행객',
      jobcontent:'소통의 신',
      jobimg: require('./img/result/ESFP_1.png'),
      placename:'연둔리 숲정이',
      placecontent:'소중한 사람과 대화하며 힐링을 원하는 당신!\n이번에는 숲정이 길을 거닐며 소통해보는건 어떠세요?',
      placeaddress:'전남 화순군 동복면 연둔리 472-1 연둔리 숲정이',
      placeimg: require('./img/result/ESFP_1.png'),
      fitmbti:'INTJ'
    },
    {
      mbti:'ENFP',
      jobname:'엔터테인먼트 애호가',
      jobcontent:'여행지의 연예인',
      jobimg: require('./img/result/ENFP_1.png'),
      placename:'화순 동가리 계곡',
      placecontent:'댕댕이처럼 뛰어놀기 좋아하는 당신!\n내년 여름에 소중한 사람들과 함께 물놀이 가보는 건 어떠세요?',
      placeaddress:'전남 화순군 한천면 동산1길 77-11 화순 동가리 계곡',
      placeimg: require('./img/result/ENFP_1.png'),
      fitmbti:'ISTJ'
    },
    {
      mbti:'ENTP',
      jobname:'창의적 탐험가',
      jobcontent:'아이디어(아이가 사슴탐)',
      jobimg: require('./img/result/ENTP_1.png'),
      placename:'백아산 하늘다리',
      placecontent:'스릴넘치는 경험과 번뜩이는 아이디어가 생기는 여행을 원하는 당신!\n하늘다리를 건너며 자연 속에서 아이디어를 찾아보는 건 어떠세요?',
      placeaddress:'전남 화순군 백아면 1310-56 백아산 하늘다리',
      placeimg: require('./img/result/ENTP_1.png'),
      fitmbti:'ISFJ'
    },
    {
      mbti:'ESTJ',
      jobname:'주도력 있는 여행객',
      jobcontent:'효율성의 수호자',
      jobimg: require('./img/result/ESTJ_1.png'),
      placename:'세량지',
      placecontent:'효율적이고 유익한 여행을 추구하는 당신!\n이참에 세량지에서 카메라 효율을 최대로 뽑아보는 건 어떠세요?',
      placeaddress:'전남 화순군 화순읍 세량리 98 세량지',
      placeimg: require('./img/result/ESTJ_1.png'),
      fitmbti:'INFP'
    },
    {
      mbti:'ESFJ',
      jobname:'친화적인 탐험가',
      jobcontent:'가정의 수호자',
      jobimg: require('./img/result/ESFJ_1.png'),
      placename:'규봉암',
      placecontent:'사랑과 관계를 소중히 하는 당신!\n소중한 사람과 규봉암에 올라 특별한 추억을 만들어보는 건 어떠세요?',
      placeaddress:'전남 화순군 이서면 도원길 40-28 규봉암',
      placeimg: require('./img/result/ESFJ_1.png'),
      fitmbti:'INTP'
    },
    {
      mbti:'ENFJ',
      jobname:'사회적 탐험가',
      jobcontent:'사회적 여행가',
      jobimg: require('./img/result/ENFJ_1.png'),
      placename:'동구리 호수공원',
      placecontent:'다양한 경험과 새로운 사람을 만나는 여행에 관심이 많은 당신!\n동구리 호수공원에서 플로깅을 하면서 벚꽃과 새친구를 만나보는 건 어떨까요?',
      placeaddress:'전라남도 화순군 화순읍 동구리 122-1 동구리 호수공원',
      placeimg: require('./img/result/ENFJ_1.png'),
      fitmbti:'ISTP'
    },
    {
      mbti:'ENTJ',
      jobname:'리더십 있는 여행객',
      jobcontent:'자연을 느끼는 자',
      jobimg: require('./img/result/ENTJ_1.png'),
      placename:'화순적벽',
      placecontent:'도전적인 활동과 자기계발을 위한 여행을 좋아하는 당신!\n화순적벽을 여행하며 자연의 웅장함에 도전해보는 건 어떠세요?',
      placeaddress:'전남 화순군 이서면 월산리 26-4 화순적벽',
      placeimg: require('./img/result/ENTJ_1.png'),
      fitmbti:'ISFP'
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

  setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])
  setFitMbti(mc.filter(val=>val.fitmbti === mbti)[0])
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
                  <img className='image' src={val.qimg} alt='' />
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
              <div className='jobName'>{mbtiContents.jobname}</div>
              <div className='jobContent'>{mbtiContents.jobcontent}</div>
            </div>
            <div className='jobImgWrapper'>
              <img className='image' src={mbtiContents.jobimg} alt='' />
            </div>
            <div className='resultContent'>
              <div className='resultContentTxt'>당신의 <span style={{fontWeight : "800"}}>화순 여행지</span>는</div>
            </div>
            <div className='jobImgWrapper'>
              <img className='image' src={mbtiContents.placeimg} alt='' />
            </div>
            <div className='placeName'>{mbtiContents.placename}</div>
            <div className='placeContent'>{mbtiContents.placecontent}</div>
            <div className='placeAddress' onClick={() => handleCopyClick(mbtiContents.placeaddress)}><FaLocationDot/>{mbtiContents.placeaddress}</div>
          </div>

          <div className='otherBox'>
            <div className='otherContent'>이런 곳도 잘 어울려요!</div>
            <div className='otherLayout'>
              <div className='otherImgWrapper'>
              <img className='image' src={fitMbti.placeimg} alt='' />
              </div>
              <div className='otherPlaceLayout' onClick={() => handleCopyClick(fitMbti.placeaddress)}>
                <div className='otherPlaceName'>{fitMbti.placename}</div>
                <div className='otherPlaceAddress'><FaLocationDot/>{fitMbti.placeaddress}</div>
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
            <div className='rePlay' onClick={()=>window.location.reload()}><MdReplay size="40"/></div>
          </div>          
        </div>
      }
    </div>
  );
}


export default App;
