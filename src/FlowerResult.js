import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import linkImg from "./img/share_btn.svg";
import fbImg from "./img/facebook.svg";
import twtImg from "./img/twitter.svg";
import kktImg from "./img/kakao.svg";
import { MdReplay } from "react-icons/md";
import { useParams } from "react-router-dom";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;


function App() {
  const { id } = useParams();

  let resultTravel = [
    {
      mbti: "ISTJ",
      flowersubname: "신뢰할 수 있는 데이지",
      flowerimg: require("./img/flower_result/ISTJ_0.png"),
      flowername: "데이지 (Daisy)",
      flowercontent:
        "ISTJ 유형은 신뢰할 수 있고 조직적이며 책임감이 강한 성향을 가지고 있습니다.\n데이지는 ISTJ의 신뢰와 안정성을 상징하며 잘 어울립니다.",
      flowerlanguage: "데이지의 꽃말은 희망과 평화 입니다.",
      fitmbti: "ENFP",
    },
    {
      mbti: "ISFJ",
      flowersubname: "애정 넘치는 벚꽃",
      flowerimg: require("./img/flower_result/ISFJ_0.png"),
      flowername: "벚꽃 (Cherry Blossom)",
      flowercontent:
        "ISFJ 유형은 따뜻하고 돌봄을 주는 성향으로 다른 사람을 위해 노력합니다.\n벚꽃은 ISFJ의 애정과 따뜻한 성격과 잘 어울립니다.",
      flowerlanguage: "벚꽃의 꽃말은 애정과 사랑입니다.",
      fitmbti: "ENTP",
    },
    {
      mbti: "INFJ",
      flowersubname: "비전을 가진 아카시아",
      flowerimg: require("./img/flower_result/INFJ_0.png"),
      flowername: "아카시아 (Acacia)",
      flowercontent:
        "NFJ 유형은 비전과 사명을 중요하게 여기며 내적으로 풍부한 성향을 가지고 있습니다.\n아카시아는 INFJ의 비전과 아름다움과 잘 어울립니다.",
      flowerlanguage: "아카시아의 꽃말은 숨겨진 아름다움과 희망입니다.",
      fitmbti: "ESTP",
    },
    {
      mbti: "INTJ",
      flowersubname: "논리적인 온시디움",
      flowerimg: require("./img/flower_result/INTJ_0.png"),
      flowername: "온시디움 (Oncidium Orchid)",
      flowercontent:
        "INTJ 유형은 논리적이며 전략적으로 생각하며 목표를 추구하는 데 집중합니다.\n온시디움의 독특한 형태와 심오한 아름다움은 INTJ의 논리적 성향과 어울립니다.",
      flowerlanguage: "온시디움의 꽃말은 순박한 마음 입니다.",
      fitmbti: "ESFP",
    },
    {
      mbti: "ISTP",
      flowersubname: "지혜로운 아이리스",
      flowerimg: require("./img/flower_result/ISTP_0.png"),
      flowername: "아이리스 (Iris)",
      flowercontent:
        "ISTP 유형은 논리적이고 분석적이며 문제를 해결하는 데 뛰어난 능력을 가지고 있습니다.\n아이리스의 우아함과 아름다움은 ISTP의 지혜로운 성향과 잘 어울립니다.",
      flowerlanguage: "아이리스의 꽃말은 지혜와 용기입니다.",
      fitmbti: "ENFJ",
    },
    {
      mbti: "ISFP",
      flowersubname: "자유로운 마음의 아네모네",
      flowerimg: require("./img/flower_result/ISFP_0.png"),
      flowername: "아네모네 (Anemone)",
      flowercontent:
        "ISFP 유형은 예술적이며 자유로운 영혼을 가지고 있으며 아름다움을 추구합니다.\n아네모네의 아름다움과 자유로운 성격이 잘 어울립니다.",
      flowerlanguage: "아네모네의 꽃말은 희망과 기대입니다.",
      fitmbti: "ENTJ",
    },
    {
      mbti: "INFP",
      flowersubname: "예술적인 라벤더",
      flowerimg: require("./img/flower_result/INFP_0.png"),
      flowername: "라벤더 (Lavender)",
      flowercontent:
        "INFP 유형은 예술적이며 창의적이며 내적 가치와 아름다움을 추구합니다.\n라벤더의 아름다움과 평화로운 분위기는 INFP의 예술적인 성향과 어울립니다.",
      flowerlanguage: "라벤더의 꽃말은 기대와 고요함입니다.",
      fitmbti: "ESTJ",
    },
    {
      mbti: "INTP",
      flowersubname: "논리적인 안젤리카",
      flowerimg: require("./img/flower_result/INTP_0.png"),
      flowername: "안젤리카 (Angelica)",
      flowercontent:
        "INTP 유형은 논리적이며 분석적이며 지적 탐구를 중요시하며 독립적인 사고를 가지고 있습니다.\n안젤리카는 신비로움과 지적인 아름다움을 상징하며 INTP의 특성과 잘 어울립니다.",
      flowerlanguage: "안젤리카의 꽃말은 창조적인 영감과 지혜입니다.",
      fitmbti: "ESFJ",
    },
    {
      mbti: "ESTP",
      flowersubname: "도전적인 개나리",
      flowerimg: require("./img/flower_result/ESTP_0.png"),
      flowername: "개나리 (Forsythia)",
      flowercontent:
        "ESTP 유형은 활동적이며 도전과 모험을 즐기며 새로운 경험을 추구합니다.\n개나리의 화려한 노란 꽃과 에너지 넘치는 느낌은 ESTP의 도전적인 성향과 잘 어울립니다.",
      flowerlanguage: "개나리의 꽃말은 새로운 시작과 희망입니다.",
      fitmbti: "INFJ",
    },
    {
      mbti: "ESFP",
      flowersubname: "즐거움을 주는 튤립",
      flowerimg: require("./img/flower_result/ESFP_0.png"),
      flowername: "튤립 (Tulip)",
      flowercontent:
        "ESFP 유형은 사람들과 소통하며 즐거움을 추구하며 활기찬 에너지를 가지고 있습니다.\n튤립의 생기와 색다른 아름다움은 ESFP의 즐거운 성향과 어울립니다.",
      flowerlanguage: "튤립의 꽃말은 사랑과 성공입니다.",
      fitmbti: "INTJ",
    },
    {
      mbti: "ENFP",
      flowersubname: "열정적인 파스틸베고니아",
      flowerimg: require("./img/flower_result/ENFP_0.png"),
      flowername: "파스틸베고니아 (Pastel Begonia)",
      flowercontent:
        "ENFP 유형은 열정적이며 상상력이 풍부하며 탐험을 즐기며 새로운 경험을 추구합니다.\n파스틸베고니아의 아름다움과 활기찬 성향이 잘 어울립니다.",
      flowerlanguage: "파스틸베고니아의 꽃말은 열정과 활기입니다.",
      fitmbti: "ISTJ",
    },
    {
      mbti: "ENTP",
      flowersubname: "창의적인 왕자의 깃털",
      flowerimg: require("./img/flower_result/ENTP_0.png"),
      flowername: "왕자의 깃털 (Prince's Feather)",
      flowercontent:
        "ENTP 유형은 창의적이며 독립적인 사고를 가지고 있으며 새로운 아이디어를 추구합니다.\n왕자의 깃털의 독특한 형태와 창의적인 성향이 잘 어울립니다.",
      flowerlanguage: "왕자의 깃털의 꽃말은 변화와 창조입니다.",
      fitmbti: "ISFJ",
    },
    {
      mbti: "ESTJ",
      flowersubname: "책임감 있는 해바라기",
      flowerimg: require("./img/flower_result/ESTJ_0.png"),
      flowername: "해바라기 (Sunflower)",
      flowercontent:
        "ESTJ 유형은 책임감이 강하며 조직적이고 결단력 있는 성향을 가지고 있습니다.\n해바라기의 밝은 모습과 책임감 있는 성격이 잘 어울립니다.",
      flowerlanguage: "해바라기의 꽃말은 기다림과 존경입니다.",
      fitmbti: "INFP",
    },
    {
      mbti: "ESFJ",
      flowersubname: "다정한 피오니",
      flowerimg: require("./img/flower_result/ESFJ_0.png"),
      flowername: "피오니 (Peony)",
      flowercontent:
        "ESFJ 유형은 다른 사람들을 돌봄으로 채우며 다정하고 사회적인 성향을 가지고 있습니다.\n페오니는 ESFJ의 다정함과 사랑스러운 성격과 잘 어울립니다.",
      flowerlanguage: "피오니의 꽃말은 행복과 건강입니다.",
      fitmbti: "INTP",
    },
    {
      mbti: "ENFJ",
      flowersubname: "열정적인 백합",
      flowerimg: require("./img/flower_result/ENFJ_0.png"),
      flowername: "백합 (Lily)",
      flowercontent:
        "ENFJ 유형은 타인과의 관계를 중요하게 여기며 사회적, 열정적이며 동정심이 풍부합니다.\n아름다움과 순결을 상징하는 백합은 ENFJ의 열정적인 성향과 어울립니다.",
      flowerlanguage: "백합의 꽃말은 순결과 사랑입니다.",
      fitmbti: "ISTP",
    },
    {
      mbti: "ENTJ",
      flowersubname: "리더십을 상징하는 아마릴리스",
      flowerimg: require("./img/flower_result/ENTJ_0.png"),
      flowername: "아마릴리스 (Amaryllis)",
      flowercontent:
        "ENTJ 유형은 결단력 있으며 리더십을 추구하며 목표 달성을 중요시합니다.\n아마릴리스는 풍부한 아름다움과 리더십을 상징하며 ENTJ의 특성과 잘 어울립니다.",
      flowerlanguage: "아마릴리스의 꽃말은 자신감과 성공을 의미합니다.",
      fitmbti: "ISFP",
    },
  ];

  const fitMbti = resultTravel.find(item => item.mbti === resultTravel[id].fitmbti);

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
  };

  const navigate = useNavigate();

  const goToTravel = () => {
    navigate(`/flower`);
  }

  const location = useLocation();
  const currentPath = location.pathname;

  const shareTItle = '화순 꽃 MBTI 테스트!';
  const shareContent = resultTravel[id].mbti +' - '+ resultTravel[id].flowersubname;
  const shareUrl = window.location.origin + '/#' + currentPath;

  const handleShare = () => {
  
    if (navigator.share) {

      navigator.share({
        title: shareTItle, // 원하는 제목으로 변경
        text: shareContent, // 원하는 설명으로 변경
        url: shareUrl,
      })
      .then(() => console.log('공유 성공'))
      .catch((error) => console.error('공유 실패:', error));
    } else {
      // 브라우저가 Web Share API를 지원하지 않을 때 다른 공유 기능을 구현하거나 무시
      alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  };

  const shareToTwitter = () => {
    const sharedLink =
      "text=" + encodeURIComponent(shareTItle + "\n" + shareContent) + encodeURIComponent(shareUrl);
    window.open(`https://twitter.com/intent/tweet?${sharedLink}`);
  };

  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(shareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`, `${shareTItle}`, 'width=600,height=800,location=no,status=no,scrollbars=yes');
  };

  const shareToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
          title: '화순 꽃 MBTI 테스트',
          description: shareContent,
          imageUrl:
          "https://aldream.kr/Flower_Start.png",
          link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl
          },
      },
      buttons: [
          {
              title: '테스트 하러가기',
              link: {
              mobileWebUrl: window.location.origin + '/#/flower',
              webUrl: window.location.origin + '/#/flower'
              },
          },
          ],
      });
  };

  useEffect(()=>{
    // init 해주기 전에 clean up 을 해준다.
      Kakao.cleanup();
      // 자신의 js 키를 넣어준다.
      Kakao.init('e4a4e68f0239bd9e37b26d74a067bd3c');
      // 잘 적용되면 true 를 뱉는다.
      console.log(Kakao.isInitialized());
  },[]);


  return (
    <div className="mbti-layout" style={{ height: "auto" }}>

      <Helmet>
        <meta property="og:title" content="화순 꽃 성격 테스트" data-react-helmet="true"/>
        <meta property="og:description" content={shareContent} data-react-helmet="true"/>
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo512.png`} data-react-helmet="true"/>
      </Helmet>

      <div className="resultPageLayout">
        <div className="resultBox">
          <div className="jobNameLayout">
            <div className="jobName">{resultTravel[id].mbti}</div>
            <div className="jobContent">{resultTravel[id].flowersubname}</div>
          </div>
          <div className="jobImgWrapper">
            <img className="image" src={resultTravel[id].flowerimg} alt="" />
          </div>
          {/* <div className="resultContent">
            <div className="resultContentTxt">
              당신의 <span style={{ fontWeight: "800" }}>화순 여행지</span>는
            </div>
          </div> */}
          {/* <div className="flowerimgWrapper">
            <img className="image" src={resultTravel[id].placeimg} alt="" />
          </div> */}
          <div className="placeName">{resultTravel[id].flowername}</div>
          <div className="placeContent">{resultTravel[id].flowercontent}</div>
          <div className="placeAddress">
            {resultTravel[id].flowerlanguage}
          </div>
        </div>

        {/* <div className="otherBox">
          <div className="otherContent">이런 곳도 잘 어울려요!</div>
          <div className="otherLayout">
            <div className="otherImgWrapper">
              <img className="image" src={fitMbti.placeimg} alt="" />
            </div>
            <div
              className="otherPlaceLayout"
              onClick={() => handleCopyClick(fitMbti.flowerlanguage)}
            >
              <div className="otherflowername">{fitMbti.flowername}</div>
              <div className="otherflowerlanguage">
                <FaLocationDot />
                {fitMbti.flowerlanguage}
              </div>
            </div>
          </div>
        </div> */}

        <div className="snsBox">
          <div className="snsFriendTxt">친구에게 공유하기</div>
          <div className="snsList">
            <img src={linkImg} alt="" onClick={() => handleCopyClick(window.location.origin + '/#' + currentPath)} />
            <img src={fbImg} alt="" onClick={shareToFacebook}/>
            <img src={twtImg} alt="" onClick={shareToTwitter}/>
            <img src={kktImg} alt="" onClick={shareToKakao}/>
          </div>
        </div>

        <div className="shareBox">
          <div className="shareBtn" onClick={handleShare}>테스트 공유하기</div>
          <div className="rePlay" onClick={goToTravel}>
            <MdReplay size="40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
