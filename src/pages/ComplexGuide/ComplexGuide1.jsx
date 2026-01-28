import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";



const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	// 이미지가 로드되면 호출되는 함수
	const handleImageLoad = () => {
		setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
	};

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
    <Helmet>
      {/* 페이지별 메타 */}
      <title>천안아산역이편한세상시티 - 단지배치도</title>
      <meta
        name="description"
        content="천안아산역이편한세상시티 단지배치도를 통해 각 동의 위치, 커뮤니티시설, 조경구역, 주차장 및 보행 동선을 확인하세요. 입주민 편의를 고려한 스마트 단지 설계를 소개합니다."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://www.layershop.kr/ComplexGuide/intro" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="천안아산역이편한세상시티" />
      <meta property="og:title" content="천안아산역이편한세상시티 - 단지배치도" />
      <meta
        property="og:description"
        content="천안아산역이편한세상시티 단지배치도: 동별 배치, 조경, 커뮤니티시설, 주차장과 보행자 동선을 한눈에 확인해보세요."
      />
      <meta property="og:url" content="https://www.layershop.kr/ComplexGuide/intro" />
      <meta property="og:image" content="https://www.layershop.kr/img/og/complex.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="천안아산역이편한세상시티 단지배치도 안내 이미지" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="천안아산역이편한세상시티 - 단지배치도" />
      <meta
        name="twitter:description"
        content="천안아산역이편한세상시티의 단지배치도를 통해 조경, 커뮤니티, 주차, 보행 동선까지 입주자 중심의 설계를 확인해보세요."
      />
      <meta name="twitter:image" content="https://www.layershop.kr/img/og/complex.jpg" />
      <meta name="twitter:url" content="https://www.layershop.kr/ComplexGuide/intro" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "천안아산역이편한세상시티 - 단지배치도",
          "url": "https://www.layershop.kr/ComplexGuide/intro",
          "description":
            "천안아산역이편한세상시티 단지배치도: 동별 위치, 커뮤니티 시설, 조경, 주차장 및 보행자 동선을 포함한 단지 설계 정보를 제공합니다.",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "contentUrl": "https://www.layershop.kr/img/og/complex.jpg",
            "width": 1200,
            "height": 630
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "홈",
                "item": "https://www.layershop.kr/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "단지배치도",
                "item": "https://www.layershop.kr/ComplexGuide/intro"
              }
            ]
          }
        })}
      </script>
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />
    <Bener title="단지안내" />
    <MenuBar contents={menuContents} />

    {/* SEO 최적화 */}
    <h1 className={styles.screenReaderOnly}>
      천안아산역이편한세상시티 - 단지배치도
    </h1>
    <p className={styles.screenReaderOnly}>
      이 페이지는 천안아산역이편한세상시티의 단지배치도를 제공합니다.
      각 동의 위치, 커뮤니티 시설 배치, 조경 및 녹지 설계, 지상·지하 주차장과
      보행 동선 계획까지 입주자의 편의를 고려한 스마트 단지 구성 정보를
      시각적으로 안내합니다.
    </p>

    <div className={styles.textBox}>
      <div>천안아산역 초역세권의 중심에</div>
      <div>스마트하게 설계된 프리미엄 단지를 만나보세요</div>
    </div>

    <img
      className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
      src={page1}
      alt="천안아산역이편한세상시티 단지배치도"
    />



			



			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 단지배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
				</div>
				<div className={styles.notice}>
					※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장 상황에 따라 변경될 수 있습니다
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide1;
