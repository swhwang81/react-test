import React from 'react';
import './about.css';

function About() {
  return (
    <main className="about-main">
      <section>
      <h1 className="about-title">여정의 전개</h1>
      <h1 className="about-title-en">UNFORD THE FLOW</h1>
      <div className="about-description-container">
        <p className="about-description">인제대학교 멀티미디어 학부는 창의적이고 혁신적인 디지털 콘텐츠 전문가를 양성하는 것을 목표로 합니다. 웹 디자인, 모바일 개발, 게임 디자인, 영상 제작 등 다양한 분야의 실무 중심 교육을 제공합니다.</p>
        <p className="about-description">The Inje University Multimedia Department aims to cultivate creative and innovative digital content experts. We provide practical education in various fields such as web design, mobile development, game design, and video production.</p>
      </div>
      </section>

      <section>
      <h1 className="about-title">비주얼 아이덴티티</h1>
      <h1 className="about-title-en">Visual Identity</h1>
      <div className="about-description-container">
        <p className="about-description">비주얼 아이덴티티는 브랜드나 조직의 시각적 표현을 통해 일관된 이미지를 전달하는 중요한 요소입니다. 색상, 타이포그래피, 로고, 레이아웃 등 다양한 디자인 요소를 체계적으로 구성하여 강력하고 기억에 남는 시각적 경험을 만들어냅니다.</p>
        <p className="about-description">Visual identity is a crucial element that conveys a consistent image through the visual expression of a brand or organization. We systematically organize various design elements such as colors, typography, logos, and layouts to create powerful and memorable visual experiences.</p>
      </div>
      </section>

      <section>
      <h1 className="about-title">디지털콘텐츠 전공</h1>
      <h1 className="about-title-en">Digital Contents Major</h1>
      <div className="about-description-container">
        <p className="about-description">디지털콘텐츠 전공은 현대 사회의 디지털 환경에서 필요한 다양한 콘텐츠 제작 기술과 창의적 사고를 교육하는 전공입니다. 웹, 모바일, 소셜미디어 등 다양한 플랫폼에서 활용할 수 있는 디지털 콘텐츠의 기획, 제작, 관리에 대한 전문적인 지식과 실무 능력을 배양합니다.</p>
        <p className="about-description">The Digital Contents major educates various content production technologies and creative thinking required in the digital environment of modern society. It cultivates professional knowledge and practical skills in planning, production, and management of digital content for web, mobile, and social media platforms.</p>
      </div>
      </section>

      <section>
      <h1 className="about-title">졸업준비 위원회</h1>
      <h1 className="about-title-en">Preparatory Committee</h1>
      <div className="about-description-container">
        <div className="about-team-list">
          <h3 className="about-team-title">팀 구성</h3>
          <ul className="about-team-items">
            <li>그래픽팀</li>
            <li>웹설계팀</li>
            <li>GUI팀</li>
            <li>개발팀</li>
            <li>홍보/운영팀</li>
          </ul>
        </div>
        <div className="about-team-description">
          <p className="about-description">졸업준비 위원회는 5개 팀으로 구성되어 각 분야의 전문성을 바탕으로 체계적인 졸업 전시회 준비를 담당합니다. 각 팀은 독립적으로 업무를 수행하면서도 유기적인 협력을 통해 완성도 높은 결과물을 만들어냅니다.</p>
          <p className="about-description">The Preparatory Committee consists of 5 teams that are responsible for systematic preparation of the graduation exhibition based on expertise in each field. Each team works independently while creating high-quality results through organic collaboration.</p>
        </div>
      </div>
      </section>
    </main>
  );
}

export default About;
