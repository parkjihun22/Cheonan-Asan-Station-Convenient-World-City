import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
  { label: '사업명', value: '천안아산역이편한세상시티' },
  { label: '사업위치', value: '충청남도 아산시 배방읍 장재리 176-5번지 외' },
  { label: '대지면적', value: '6,847.00㎡' },
  { label: '건축면적', value: '3,930.79㎡' },
  { label: '연면적', value: '74,068.48㎡' },
  { label: '용적률', value: '599.79%' },
  { label: '건축규모', value: '지하 6층 ~ 지상 29층, 3개동' },
  { label: '세대수', value: '총 1,329실 (오피스텔)' },
];

  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>천안아산역이편한세상시티 - 사업안내</title>
        <meta
          name="description"
          content="충청남도 아산시 배방읍 장재리 176-5번지 외에 들어서는 천안아산역이편한세상시티의 사업 개요를 확인하세요. 총 1,329실(지하 6층~지상 29층, 3개동), 전용 84㎡ 중심 오피스텔, 교통·생활 인프라 및 프리미엄 설계 정보 제공."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.layershop.kr/BusinessGuide/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="천안아산역이편한세상시티" />
        <meta property="og:title" content="천안아산역이편한세상시티 - 사업안내" />
        <meta
          property="og:description"
          content="천안아산역 초역세권 입지, 총 1,329실 규모의 프리미엄 복합 오피스텔. 위치, 규모, 타입 구성 등 주요 사업 정보를 한눈에 확인하세요."
        />
        <meta property="og:url" content="https://www.layershop.kr/BusinessGuide/intro" />
        <meta property="og:image" content="https://www.layershop.kr/img/og/business.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="천안아산역이편한세상시티 - 사업안내" />
        <meta
          name="twitter:description"
          content="천안아산역이편한세상시티 사업 개요: 총 1,329실 오피스텔, 전용 84㎡ 중심 평면 구성, 초역세권 입지와 프리미엄 설계 안내."
        />
        <meta name="twitter:image" content="https://www.layershop.kr/img/og/business.jpg" />
        <meta name="twitter:url" content="https://www.layershop.kr/BusinessGuide/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "천안아산역이편한세상시티 - 사업안내",
            "url": "https://www.layershop.kr/BusinessGuide/intro",
            "description":
              "충청남도 아산시 배방읍 장재리 일원에 조성되는 천안아산역이편한세상시티의 사업 개요와 위치, 규모, 타입 구성, 프리미엄 단지 설계 정보를 제공합니다.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://www.layershop.kr/img/og/business.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.layershop.kr/" },
                { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://www.layershop.kr/BusinessGuide/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />

      {/* SEO 최적화 H1 */}
      <h1 className={styles.screenReaderOnly}>
        천안아산역이편한세상시티 - 사업안내
      </h1>

      <p className={styles.screenReaderOnly}>
        천안아산역이편한세상시티는 DL이앤씨의 프리미엄 브랜드 이편한세상이 적용된
        대규모 복합 오피스텔 단지입니다. 이 페이지에서는 초역세권 입지와 건축 규모,
        전용 84㎡ 중심의 타입 구성, 특화 설계, 상업시설 연계 등 사업의 핵심 정보를 안내합니다.
      </p>

      <div className={styles.textBox}>
        <div>천안아산역 초역세권의 프리미엄 라이프</div>
        <div>이편한세상이 완성하는 하이엔드 주거 가치</div>
      </div>



			<img className={styles.img3} src={page1} alt="천안아산역이편한세상시티-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
