import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      { title: "브랜드 소개", url: "/brand/intro" }, 
      // { title: "홍보 영상", url: "/brand/video" }
    
    ];

      
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
            <div className={styles.container}>
<Helmet>
  <title>천안아산역이편한세상시티 - 브랜드 소개</title>
  <meta
    name="description"
    content="DL이앤씨 e편한세상 브랜드 철학과 가치를 소개합니다. 편리한 생활 동선, 스마트 주거 시스템, 신뢰의 품질로 완성되는 천안아산역이편한세상시티(총 396실)."
  />
  <link rel="canonical" href="https://www.layershop.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안아산역이편한세상시티" />
  <meta property="og:title" content="천안아산역이편한세상시티 - 브랜드 소개" />
  <meta
    property="og:description"
    content="DL이앤씨 e편한세상의 주거 철학을 담은 천안아산역이편한세상시티. 스마트한 주거 시스템과 완성도 높은 품질로 프리미엄 라이프를 제안합니다."
  />
  <meta property="og:url" content="https://www.layershop.kr/Brand/intro" />
  <meta property="og:image" content="https://www.layershop.kr/images/og/main.jpg" />
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="브랜드 소개" />

    <MenuBar contents={menuContents} />

    {/* SEO용 H1 */}
    <h1 className={styles.screenReaderOnly}>
      천안아산역이편한세상시티 - 브랜드 소개
    </h1>

    <p className={styles.screenReaderOnly}>
      천안아산역이편한세상시티는 DL이앤씨 e편한세상 브랜드가 적용된
      주거 단지로, 총 396실 규모로 조성됩니다.
      생활의 편리함을 높이는 공간 설계와 스마트 주거 시스템,
      신뢰의 품질을 바탕으로 천안아산역 생활권에 프리미엄 라이프를 제시합니다.
    </p>

    <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
      <div>천안아산역 생활권, 브랜드 프리미엄을 담다</div>
      <div>DL이앤씨 e편한세상, 일상의 기준을 높이다</div>
    </div>

    <img
      className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
      src={page1}
      alt="천안아산역이편한세상시티 brand-Image1"
    />


            <Footer />
        </div>
    );
}

export default Brand1;
