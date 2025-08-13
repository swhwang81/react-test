import React from 'react';
import './about.css';

function About() {
  return (
    <main className="about-main">
      <section>
      <h1 className="about-title">여정의 전개</h1>
      <h1 className="about-title-en">UNFORD THE FLOW</h1>
      <div className="about-description-container">
        <p className="about-description">인제대학교 멀티미디어 학부는 창의적이고 혁신적인 디지털 콘텐츠 전문가를 양성하는 것을 목표로 합니다. 우리는 학생들이 현대적인 기술과 예술적 감각을 조화롭게 결합하여 새로운 미디어 환경에서 성공할 수 있도록 다양한 교육 프로그램을 제공합니다. 학부에서는 웹 디자인, 모바일 애플리케이션 개발, 게임 디자인, 영상 제작, 3D 모델링 등 다양한 분야의 실무 중심 교육을 통해 학생들이 실제 프로젝트에서 활용할 수 있는 실질적인 기술을 습득할 수 있도록 지원합니다.</p>
        <p className="about-description">The Inje University Multimedia Department aims to cultivate creative and innovative digital content experts. We provide various educational programs to help students successfully combine modern technology with artistic sensibility in new media environments. The department supports students in acquiring practical skills that can be utilized in real projects through hands-on education in various fields such as web design, mobile application development, game design, video production, and 3D modeling.</p>
      </div>
      </section>

      <section>
      <h1 className="about-title">비주얼 아이덴티티</h1>
      <h1 className="about-title-en">Visual Identity</h1>
      <div className="about-description-container">
        <p className="about-description">비주얼 아이덴티티는 브랜드나 조직의 시각적 표현을 통해 일관된 이미지를 전달하는 중요한 요소입니다. 우리는 색상, 타이포그래피, 로고, 레이아웃 등 다양한 디자인 요소를 체계적으로 구성하여 강력하고 기억에 남는 시각적 경험을 만들어냅니다. 현대적인 디자인 트렌드와 사용자 중심의 접근 방식을 결합하여, 단순히 아름다운 것뿐만 아니라 기능적이고 의미 있는 시각적 솔루션을 제공합니다.</p>
        <p className="about-description">Visual identity is a crucial element that conveys a consistent image through the visual expression of a brand or organization. We systematically organize various design elements such as colors, typography, logos, and layouts to create powerful and memorable visual experiences. By combining modern design trends with user-centered approaches, we provide not only beautiful but also functional and meaningful visual solutions.</p>
      </div>
      </section>

      <section>
      <h1 className="about-title">디지털콘텐츠 전공</h1>
      <h1 className="about-title-en">Digital Contents Major</h1>
      <div className="about-description-container">
        <p className="about-description">디지털콘텐츠 전공은 현대 사회의 디지털 환경에서 필요한 다양한 콘텐츠 제작 기술과 창의적 사고를 교육하는 전공입니다. 웹, 모바일, 소셜미디어 등 다양한 플랫폼에서 활용할 수 있는 디지털 콘텐츠의 기획, 제작, 관리에 대한 전문적인 지식과 실무 능력을 배양합니다. 학생들은 UI/UX 디자인, 웹 개발, 모바일 앱 개발, 영상 편집, 3D 그래픽, 게임 디자인 등 다양한 분야의 실습을 통해 실제 프로젝트에서 바로 활용할 수 있는 실무 중심의 교육을 받게 됩니다.</p>
        <p className="about-description">The Digital Contents major is a program that educates various content production technologies and creative thinking required in the digital environment of modern society. It cultivates professional knowledge and practical skills in planning, production, and management of digital content that can be utilized across various platforms such as web, mobile, and social media. Students receive practical-oriented education through hands-on experience in various fields such as UI/UX design, web development, mobile app development, video editing, 3D graphics, and game design.</p>
      </div>
      </section>

      <section>
      <h1 className="about-title">졸업준비 위원회</h1>
      <h1 className="about-title-en">Preparatory Committee</h1>
      <div className="about-team-list">
        <div className="about-team-item">
          <h3 className="about-team-name">Developer 1</h3>
          <p className="about-team-description">Hello World! Developer 1, This is a description of Developer 1</p>
        </div>
        <div className="about-team-item">
          <h3 className="about-team-name">Developer 2</h3>
          <p className="about-team-description">Hello World! Developer 2, This is a description of Developer 2</p>
        </div>
        <div className="about-team-item">
          <h3 className="about-team-name">Developer 3</h3>
          <p className="about-team-description">Hello World! Developer 3, This is a description of Developer 3</p>
        </div>
      </div>
      </section>
    </main>
  );
}

export default About;
