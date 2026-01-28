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
    text === '두산위브' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '천안아산역이편한세상시티'
  ) {
    return (
      <>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        천안아산역 초역세권 입지에 들어서는 대규모 복합 주거단지.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        지하 6층~지상 29층, 총 1,329실 규모의 프리미엄 오피스텔과 상업시설.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        84㎡ 중심의 실용적인 평면과 라이프스타일을 고려한 특화설계.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        이편한세상 브랜드가 제안하는 미래형 주거 가치.
      </div>
    </>
  );
} else if (text === '입지환경' || text === '프리미엄') {
  return (
    <>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        KTX·SRT·1호선·BRT까지 누리는 트리플 역세권의 핵심 입지.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        모다아울렛·갤러리아백화점·트레이더스 등 풍부한 생활 인프라를 가까이.
      </div>
    </>
  );
} else if (text === '단지안내') {
  return (
    <>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        단지 내 상업시설과 연결된 혁신적 스트리트형 설계.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        프리미엄 커뮤니티와 효율적인 동선으로 완성되는 고품격 일상.
      </div>
      <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
        천안아산역 이편한세상시티, 미래 주거의 새로운 중심이 됩니다.
      </div>
    </>
  );
}
}


  
