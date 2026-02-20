import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="천안아산역이편한세상시티-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '사업개요' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '천안아산역이편한세상시티'
  ) {
    return (
      <>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        천안아산역 중심 입지에 들어서는 브랜드 프리미엄 주거단지.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        교통·생활·비즈니스 인프라를 모두 갖춘 복합 라이프 중심지.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        실거주 만족도를 높이는 효율적인 평면 설계와 공간 구성.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        e편한세상 브랜드가 제안하는 새로운 주거 라이프 스타일.
      </div>
    </>
  );
} else if (text === '입지환경' || text === '프리미엄') {
  return (
    <>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        KTX·SRT·1호선 등 광역 교통망을 누리는 천안아산역 핵심 입지.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        대형 쇼핑시설과 다양한 생활 인프라를 가까이 누리는 편리한 생활권.
      </div>
    </>
  );
} else if (text === '단지안내') {
  return (
    <>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        세련된 단지 설계와 쾌적한 주거 환경을 고려한 공간 구성.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        입주민 중심 커뮤니티와 효율적인 동선으로 완성되는 프리미엄 단지.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        천안아산역 이편한세상시티, 미래 가치를 담은 새로운 도시 주거의 기준.
      </div>
    </>
  );
}
}


  
