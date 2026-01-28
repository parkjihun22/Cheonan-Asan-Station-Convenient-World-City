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
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
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
        content="DL이앤씨 프리미엄 브랜드 이편한세상의 철학과 가치를 소개합니다. 고객 중심 설계, 스마트 라이프 시스템, 신뢰의 품질로 완성되는 천안아산역이편한세상시티."
      />
      <link rel="canonical" href="https://www.layershop.kr/Brand/intro" />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="천안아산역이편한세상시티" />
      <meta property="og:title" content="천안아산역이편한세상시티 - 브랜드 소개" />
      <meta
        property="og:description"
        content="DL이앤씨 브랜드 이편한세상의 주거 철학. 고객 중심의 공간 설계와 프리미엄 품질로 완성하는 천안아산역이편한세상시티."
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
      천안아산역이편한세상시티는 DL이앤씨의 프리미엄 주거 브랜드
      이편한세상이 적용된 복합 주거 단지입니다.
      고객 중심의 공간 설계와 스마트 시스템, 신뢰의 시공 품질을 통해
      천안아산역 중심에 미래형 하이엔드 라이프를 제시합니다.
    </p>

    <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
      <div>천안아산역 위, 프리미엄 라이프를 완성하다</div>
      <div>DL이앤씨 이편한세상, 삶의 새로운 기준</div>
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
