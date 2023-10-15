import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import linkImg from "./img/share_btn.svg";
import fbImg from "./img/facebook.svg";
import twtImg from "./img/twitter.svg";
import kktImg from "./img/kakao.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdReplay } from "react-icons/md";
import { useParams } from "react-router-dom";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;


function App() {
  const { id } = useParams();

  let resultTravel = [
    {
      mbti: "ISTJ",
      jobname: "역사적 탐방자",
      jobcontent: "문화와 휴식을 즐기는 여행자",
      jobimg: require("./img/result/ISTJ_0.png"),
      placename: "다산 아트 뮤지엄",
      placecontent:
        "역사와 예술을 사랑하는 당신!\n다산 미술관에서 휴식과 문화를 만끽하는 여행을 떠나보는 건 어떠세요?",
      placeaddress: "전남 화순군 남면 다공길 25 다산 아트 뮤지엄",
      placeimg: require("./img/result/ISTJ_1.png"),
      fitmbti: "ENFP",
    },
    {
      mbti: "ISFJ",
      jobname: "치유적인 여행객",
      jobcontent: "여행객의 치유사",
      jobimg: require("./img/result/ISFJ_0.png"),
      placename: "운주사",
      placecontent:
        "자연과 역사를 통해 힐링하는 것을 좋아하는 당신!\n운주사에서 천불천탑의 미스테리와 자연을 느껴보는 건 어떠세요?",
      placeaddress: "전남 화순군 도암면 천태로 91-44 운주사",
      placeimg: require("./img/result/ISFJ_1.png"),
      fitmbti: "ENTP",
    },
    {
      mbti: "INFJ",
      jobname: "문화적 탐험가",
      jobcontent: "문화발견왕",
      jobimg: require("./img/result/INFJ_0.png"),
      placename: "영벽정",
      placecontent:
        "독특하고 흥미로운 경험을 좋아하는 당신!\n영벽정에서 화순의 보물같은 경치를 발견해보는 건 어떨까요?",
      placeaddress: "전라남도 화순군 능주면 관영리 1 영벽정",
      placeimg: require("./img/result/INFJ_1.png"),
      fitmbti: "ESTP",
    },
    {
      mbti: "INTJ",
      jobname: "지적인 여행객",
      jobcontent: "소소한 지식탐험가",
      jobimg: require("./img/result/INTJ_0.png"),
      placename: "소소 미술관",
      placecontent:
        "지식과 예술 탐험을 좋아하는 당신!\n소소미술관에서 작지만 깊은 지식을 탐험해보는 건 어떠세요?",
      placeaddress: "전라남도 화순군 도곡면 지강로 467-1 소소미술관",
      placeimg: require("./img/result/INTJ_1.png"),
      fitmbti: "ESFP",
    },
    {
      mbti: "ISTP",
      jobname: "자연 속의 모험가",
      jobcontent: "자연 속의 모험러",
      jobimg: require("./img/result/ISTP_0.png"),
      placename: "천불천탑",
      placecontent:
        "역사의 미스테리와 문화유산과 자연을 좋아하는 당신!\n천개의 탑과 불상이 있었다는 천불천탑의 미스테리를 알아보는 것은 어떠세요?",
      placeaddress: "전라남도 화순군 도암면 천태로 91-44 천불천탑",
      placeimg: require("./img/result/ISTP_1.png"),
      fitmbti: "ENFJ",
    },
    {
      mbti: "ISFP",
      jobname: "예술과 자연 애호가",
      jobcontent: "예술과 자연의 친구",
      jobimg: require("./img/result/ISFP_0.png"),
      placename: "고인돌 유적지",
      placecontent:
        "창의성과 아름다움을 함께 탐구하는 당신!\n화순 고인돌 유적지에서 자연의 아름다움과 선사인들의 발자취를 엿보는 건 어떠세요?",
      placeaddress: "화순군 도곡면 효산리 64 고인돌유적지",
      placeimg: require("./img/result/ISFP_1.png"),
      fitmbti: "ENTJ",
    },
    {
      mbti: "INFP",
      jobname: "정서적 탐험가",
      jobcontent: "감성 탐험가",
      jobimg: require("./img/result/INFP_0.png"),
      placename: "수만리 철쭉 공원",
      placecontent:
        "아름다운 것을 보며 마음의 평화를 원하는 당신!\n수만리 철쭉 공원에서 화순의 감성을 듬뿍 느껴보는 건 어떠세요?",
      placeaddress: "전남 화순군 화순읍 안양산로 258 수만리 철쭉 공원",
      placeimg: require("./img/result/INFP_1.png"),
      fitmbti: "ESTJ",
    },
    {
      mbti: "INTP",
      jobname: "지적 탐험가",
      jobcontent: "지식 엔지니어",
      jobimg: require("./img/result/INTP_0.png"),
      placename: "화순 거석테마파크",
      placecontent:
        "역사와 창의성을 함께 탐구하는 당신!\n화순 거석테마파크에서 세계 거석문화의 신비로움을 느껴보는 건 어떠세요?",
      placeaddress: "전라남도 화순군 도곡면 효산리 172-1 화순 거석테마파크",
      placeimg: require("./img/result/INTP_1.png"),
      fitmbti: "ESFJ",
    },
    {
      mbti: "ESTP",
      jobname: "액티브한 여행객",
      jobcontent: "사교의 신",
      jobimg: require("./img/result/ESTP_0.png"),
      placename: "무등산 양떼목장",
      placecontent:
        "사교성이 좋고 특별한 활동을 좋아하는 당신!\n무등산 양떼목장에서 양들과 특별한 친구가 되어보는건 어떠세요?",
      placeaddress: "전라남도 화순군 화순읍 안양산로 537 무등산 양떼목장",
      placeimg: require("./img/result/ESTP_1.png"),
      fitmbti: "INFJ",
    },
    {
      mbti: "ESFP",
      jobname: "사교적인 여행객",
      jobcontent: "소통의 신",
      jobimg: require("./img/result/ESFP_0.png"),
      placename: "연둔리 숲정이",
      placecontent:
        "소중한 사람과 대화하며 힐링을 원하는 당신!\n이번에는 숲정이 길을 거닐며 소통해보는건 어떠세요?",
      placeaddress: "전남 화순군 동복면 연둔리 472-1 연둔리 숲정이",
      placeimg: require("./img/result/ESFP_1.png"),
      fitmbti: "INTJ",
    },
    {
      mbti: "ENFP",
      jobname: "엔터테인먼트 애호가",
      jobcontent: "여행지의 연예인",
      jobimg: require("./img/result/ENFP_0.png"),
      placename: "화순 동가리 계곡",
      placecontent:
        "댕댕이처럼 뛰어놀기 좋아하는 당신!\n내년 여름에 소중한 사람들과 함께 물놀이 가보는 건 어떠세요?",
      placeaddress: "전남 화순군 한천면 동산1길 77-11 화순 동가리 계곡",
      placeimg: require("./img/result/ENFP_1.png"),
      fitmbti: "ISTJ",
    },
    {
      mbti: "ENTP",
      jobname: "창의적 탐험가",
      jobcontent: "아이디어 발굴가",
      jobimg: require("./img/result/ENTP_0.png"),
      placename: "백아산 하늘다리",
      placecontent:
        "스릴넘치는 경험과 번뜩이는 아이디어가 생기는 여행을 원하는 당신!\n하늘다리를 건너며 자연 속에서 아이디어를 찾아보는 건 어떠세요?",
      placeaddress: "전남 화순군 백아면 1310-56 백아산 하늘다리",
      placeimg: require("./img/result/ENTP_1.png"),
      fitmbti: "ISFJ",
    },
    {
      mbti: "ESTJ",
      jobname: "주도력 있는 여행객",
      jobcontent: "효율성의 수호자",
      jobimg: require("./img/result/ESTJ_0.png"),
      placename: "세량지",
      placecontent:
        "효율적이고 유익한 여행을 추구하는 당신!\n이참에 세량지에서 카메라 효율을 최대로 뽑아보는 건 어떠세요?",
      placeaddress: "전남 화순군 화순읍 세량리 98 세량지",
      placeimg: require("./img/result/ESTJ_1.png"),
      fitmbti: "INFP",
    },
    {
      mbti: "ESFJ",
      jobname: "친화적인 탐험가",
      jobcontent: "가정의 수호자",
      jobimg: require("./img/result/ESFJ_0.png"),
      placename: "규봉암",
      placecontent:
        "사랑과 관계를 소중히 하는 당신!\n소중한 사람과 규봉암에 올라 특별한 추억을 만들어보는 건 어떠세요?",
      placeaddress: "전남 화순군 이서면 도원길 40-28 규봉암",
      placeimg: require("./img/result/ESFJ_1.png"),
      fitmbti: "INTP",
    },
    {
      mbti: "ENFJ",
      jobname: "사회적 탐험가",
      jobcontent: "사회적 여행가",
      jobimg: require("./img/result/ENFJ_0.png"),
      placename: "동구리 호수공원",
      placecontent:
        "다양한 경험과 새로운 사람을 만나는 여행에 관심이 많은 당신!\n동구리 호수공원에서 플로깅을 하면서 벚꽃과 새친구를 만나보는 건 어떨까요?",
      placeaddress: "전라남도 화순군 화순읍 동구리 122-1 동구리 호수공원",
      placeimg: require("./img/result/ENFJ_1.png"),
      fitmbti: "ISTP",
    },
    {
      mbti: "ENTJ",
      jobname: "리더십 있는 여행객",
      jobcontent: "자연을 느끼는 자",
      jobimg: require("./img/result/ENTJ_0.png"),
      placename: "화순적벽",
      placecontent:
        "도전적인 활동과 자기계발을 위한 여행을 좋아하는 당신!\n화순적벽을 여행하며 자연의 웅장함에 도전해보는 건 어떠세요?",
      placeaddress: "전남 화순군 이서면 월산리 26-4 화순적벽",
      placeimg: require("./img/result/ENTJ_1.png"),
      fitmbti: "ISFP",
    },
  ];

  const fitMbti = resultTravel.find(item => item.mbti === resultTravel[id].fitmbti);

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
  };

  const navigate = useNavigate();

  const goToTravel = () => {
    navigate(`/travel`);
  }

  const location = useLocation();
  const currentPath = location.pathname;

  const shareTItle = '화순 여행지 테스트!';
  const shareContent = resultTravel[id].jobname +' - '+ resultTravel[id].placename;
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
          title: '화순 여행지 테스트',
          description: shareContent,
          imageUrl:
          "https://aldream.kr/Start_Img.png",
          link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl
          },
      },
      buttons: [
          {
              title: '테스트 하러가기',
              link: {
              mobileWebUrl: window.location.origin + '/#/travel',
              webUrl: window.location.origin + '/#/travel'
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
        <meta property="og:title" content="화순 여행지 테스트" data-react-helmet="true"/>
        <meta property="og:description" content={shareContent} data-react-helmet="true"/>
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo512.png`} data-react-helmet="true"/>
      </Helmet>

      <div className="resultPageLayout">
        <div className="resultBox">
          <div className="jobNameLayout">
            <div className="jobName">{resultTravel[id].jobname}</div>
            <div className="jobContent">{resultTravel[id].jobcontent}</div>
          </div>
          <div className="jobImgWrapper">
            <img className="image" src={resultTravel[id].jobimg} alt="" />
          </div>
          <div className="resultContent">
            <div className="resultContentTxt">
              당신의 <span style={{ fontWeight: "800" }}>화순 여행지</span>는
            </div>
          </div>
          <div className="jobImgWrapper">
            <img className="image" src={resultTravel[id].placeimg} alt="" />
          </div>
          <div className="placeName">{resultTravel[id].placename}</div>
          <div className="placeContent">{resultTravel[id].placecontent}</div>
          <div
            className="placeAddress"
            onClick={() => handleCopyClick(resultTravel[id].placeaddress)}
          >
            <FaLocationDot />
            {resultTravel[id].placeaddress}
          </div>
        </div>

        <div className="otherBox">
          <div className="otherContent">이런 곳도 잘 어울려요!</div>
          <div className="otherLayout">
            <div className="otherImgWrapper">
              <img className="image" src={fitMbti.placeimg} alt="" />
            </div>
            <div
              className="otherPlaceLayout"
              onClick={() => handleCopyClick(fitMbti.placeaddress)}
            >
              <div className="otherPlaceName">{fitMbti.placename}</div>
              <div className="otherPlaceAddress">
                <FaLocationDot />
                {fitMbti.placeaddress}
              </div>
            </div>
          </div>
        </div>

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
