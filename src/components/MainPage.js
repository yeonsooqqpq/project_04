import React, { useEffect, useState, useSyncExternalStore } from 'react';
import "./MainPage.css";
import axios from 'axios';
const MainPage = () => {
  let [products, setProducts] = React.useState([]);
  let [contents, setContents] = React.useState([]);
  useState([]);

  useEffect(() => {
    axios
      .get("https://3ff702e2-6a07-46b8-8588-7f52a887e35e.mock.pstmn.io/products")
      .then((res) => {
        products = res.data.products;
        setProducts(products);
        contents = res.data.contents;
        setContents(contents);
      })
      .catch((err) => {
        return console.log(err);
      });

  }, [])
  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="img/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="img/main.jpg" alt="banner" />
        </div>
        <h2>OUR VEHICLES</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div className="product-seller">
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
        
        <h2>STAY CONNECTED WITH LAND ROVER</h2>
        <h3>랜드로버의 소셜미디어 컨텐츠를 확인하십시오.</h3>
        <div id="social-content">
        {contents.map((content, idx) => {
            return (
              <div className="content-card" key={idx}>
                <div>
                  <img className="content-img" src={content.imageUrl} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div id="footer">
        <a href="#">© JAGUAR LAND ROVER LIMITED 2022: 서울시 중구 수하동 67(중구 을지로5길 26) 미래에셋센터원빌딩 동관 13층 재규어 랜드로버 코리아</a>
        <a href="#">스마트 설정은 추후 무선 소프트웨어 업데이트의 일부로 출시될 예정입니다. 소프트웨어 개발 및 출시에 대한 계획, 프로그래밍 및 일정은 변경될 수 있습니다.</a>
        <a href="#">이미지 및 사양 관련 안내. 다수의 이미지가 코로나19(COVID-19)의 영향으로 인해 준비가 늦어지고 있습니다. 또한, 현재 세계적인 반도체 부품 수급 불안에 따라 사양, 옵션 및 출시 시기도 영향을 받고 있습니다. 이 문제가 해결될 때까지 다수의 이미지가 22/23/23.5년식 사양으로 업데이트되지 못할 수 있습니다. 국내 판매하는 차량의 사양, 옵션, 트림, 컬러 등이 이미지와 다를 수 있습니다. 22/23/23.5년식 사양에 대한 자세한 내용은 가까운 재규어 랜드로버 공식 리테일러 전시장에 문의하시기 바랍니다. 마케팅 이미지와 사양은 예시 목적으로만 제공되며, 이미지에 보여지는 차량의 사양은 국내 적용 모델과 상이할 수 있습니다.</a>
        <a href="#">위 연비는 표준모드에 의한 연비로서 도로상태·운전방법·차량적재·정비상태 및 외기온도에 따라 실주행연비와 차이가 있습니다. 상기 정보, 가격, 제원, 이미지들은 실제 국내 적용 사양과 상이할 수 있으며 성능 개선을 위하여 사전 예고 없이 변경될 수 있습니다. 해당 수치는 비교 목적으로만 참조하시기 바랍니다. 정확한 모델별 옵션 적용 사항 및 기타 자세한 사항은 가까운 랜드로버 공식 리테일러 전시장에 문의하시기 바랍니다.
</a>
        <a href="#">타이어 에너지 소비 효율 등급은 https://www.landroverkorea.co.kr/ownership/land-rover-tire-energy-efficiency-rating.html를 참조하시기 바랍니다.</a>
      </div>
    </>
  );
};
export default MainPage;
