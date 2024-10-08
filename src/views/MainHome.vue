<template>
  <main class="profile">
    <PortfolioHeader />
    <section class="profile__content">
      <div class="profileIntro">
        <figure class="profileIntro__photo">
          <img src="@/assets/common/profile-me.png" alt="프로필 사진">
        </figure>
        <div class="profileIntro__text">
          <h2>
            사용자 편의를 고려하는<br/>
            <strong>UI 설계와 디자인, 퍼블리싱 및 개발</strong><br/>
            경험을 가진 조유림입니다.
          </h2>
          <p>
            저는 직관적이고 아름다운 인터페이스를 설계하고 구현하는 데 열정을 가지고 있습니다.
            다양한 프로젝트를 통해 쌓은 경험을 바탕으로 사용자와 고객 모두가 만족할 수 있는
            결과물을 제공하기 위해 노력하고 있습니다.<br/>
            제 포트폴리오에서 저의 작업과 역량을 확인해 보세요.
          </p>
        </div>
      </div>
      <div class="history">
        <h3>주요 참여 프로젝트</h3>
        <div class="history__container">
          <dl v-for="(history, index) in historyList" :key="`historyIdx-`+index">
            <dt>{{ history.year }}</dt>
            <dd>
              <h4>{{ history.company }}</h4>
              <p v-html="history.project" />
            </dd>
          </dl>
        </div>
      </div>
    </section>
  </main>
</template>

<script >
import {defineComponent} from 'vue'
import PortfolioHeader from "@/components/common/PortfolioHeader.vue";
export default defineComponent({
  name: "MainHome",
  components: {PortfolioHeader},
  data() {
    return {
      historyList: [
        { year: '2024', company: '텐바이텐', project: '광고 상품 영역 퍼블리싱 및 개발<br/>광고 상품 연결 추천 퍼블리싱 및 개발<br/>Admin 광고 예산 설정 퍼블리싱 및 개발' },
        { year: '2023', company: '텐바이텐', project: '렌더링 속도 개선을 위한 CSS 파일 분리<br/>페이지별 UI/UX 디자인 고도화<br/>react, style component 기반 사이트 리뉴얼 정기 이벤트 작업' },
        { year: '2022', company: '애버커스', project: 'LG U+ 데이터레이크 구축 - 가명처리<br/>LG AI 스마트 레이더 지원<br/>LG AI Engine Gateway<br/>LG U+ 로봇 관제/관리 플랫폼 고도화' },
        { year: '2021', company: '애버커스', project: 'LG U+ 데이터레이크 구축 - 분석과제<br/>LG U+ O2O 매장 마이크로 사이트 모바일<br/>서울특별시 스마트 컨트렉트 플랫폼 - 관리자<br/>Abacus CallFlow 고도화<br/>LG AI 스마트 레이더 지원<br/>LG U+ 로봇 관제/관리 시스템 구축<br/>LG U+ 데이터마켓 플레이스 고도화' },
        { year: '2020', company: '애버커스', project: 'LG CNS Homin 플랫폼 구축<br/>LG U+ O2O 매장 마이크로 사이트 구축<br/>LG U+ 콘텐츠 관리 효율화 프로젝트<br/>Abacus Dev Tools 사이트 구축<br/>LG U+ 데이터마켓 플레이스 구축' },
        { year: '2019', company: '애버커스', project: '금호 석유 화학 HR 사이트 고도화<br/>LG 화학 외국환 신고관리 시스템 구축<br/>현대중공업 UI Framework' },
        { year: '2015 ~ 2018', company: '테스트굿', project: '홈페이지 고도화 디자인 및 퍼블리싱<br/>운영업무 전반 및 정기 이벤트<br/>아로니아 오리지날 브랜드 사이트 기획 및 디자인, 퍼블리싱<br/>청라 지역포털 모바일 디자인 및 퍼블리싱<br/>캄보디아 리워드어플 메인 디자인 및 퍼블리싱<br/>캄보디아 개발자 대상 기본 퍼블리싱 교육' },
        { year: '2011 ~ 2015', company: '투두쇼핑', project: '투두쇼핑 정기 이벤트 디자인<br/>온라인 미용 아카데미 강의 페이지 디자인'}
      ]
    }
  },
});
</script>

<style scoped lang="scss">
@import "../styles/home/mainHome.scss"
</style>
