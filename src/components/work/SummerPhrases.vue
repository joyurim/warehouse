<template>
  <section ref="summerd" class="summer">
      <article class="summer__intro">
        <img src="@/assets/event/SummerPhrases/summer__intro.jpg" alt="여름문구 여름의 시작">
        <img src="@/assets/event/SummerPhrases/summer__description.jpg" alt="여름문구 여름의 시작">
        <img src="@/assets/event/SummerPhrases/summer__description--ani.gif" alt="여름의 설렘을 기록해보자">
      </article>
      <article class="summer__product">
        <div class="summer-item">
          <figure class="summer-item__thumbnail">
            <div class="summer-item__mark">
              <img src="@/assets/event/SummerPhrases/summer__product--mark.png" alt="10x10 단독상품">
            </div>
            <img src="@/assets/event/SummerPhrases/summer__product--thumbnail.png" alt="여름문구 세트">
          </figure>
          <p class="summer-item__name">여름 기록 세트</p>
          <div class="summer-item__info">
            <span class="summer-item__org-price">{{ numberFormat(31000) }}</span>
            <span class="summer-item__price">{{ numberFormat(19900) }}</span>
            <span class="summer-item__price--discount">[36%]</span>
          </div>
          <p class="summer-item__text">
            투명한 만년필에<br/>
            푸른빛이 감도는 블루블랙 잉크로<br/>
            라이트 크림 컬러 만년필 전용 노트에<br/>
            여름의 설렘을 기록해 보세요.
          </p>
          <button type="button" class="summer-item__buy" @click="moveToLink(6327214, 'item')">
            <img src="@/assets/event/SummerPhrases/summer__product--buy.png" alt="구매하러가기">
          </button>
        </div>
        <img src="@/assets/event/SummerPhrases/summer__product--item.jpg" alt="여름문구 세트 구성품">
      </article>
  </section>
  <swiper
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="summer__swiper"
  >
    <swiper-slide
        v-for="(swiper, index) in swiperList"
        :key="index"
        class="swiper-slide"
    >
      <img :src="swiper" alt="여름문구 구성품">
    </swiper-slide>
  </swiper>
  <article id="commentWrite" class="comment-write">
    <div class="comment-write__box">
      올 여름은<br/>
      <input v-model="newComment" type="text" maxlength="10" placeholder="내용을 입력해주세요.">(으)로<br/>
      시작한다!
    </div>
    <button type="submit" class="comment-write__box--entrance" @click="addComment">
      <img src="@/assets/event/SummerPhrases/summer__comment--entrance.png" alt="응모하기">
    </button>
  </article>
  <article v-if="commentList.length > 0" class="summer__comment-read">
    <p class="summer__comment-read--title">
      <img src="@/assets/event/SummerPhrases/summer__comment--title.png" alt="텐텐이들은 여름을 어떻게 시작할까?">
    </p>
    <div class="summer__comment-read--grid">
      <div v-for="(comment, index) in commentList" :key="index" class="summer-comment__list">
        <div>
          올 여름은<br/>
          <strong>{{ comment.comment }} (으)로</strong>
          시작한다!<br/>
          <p class="summer-comment-item__userid">{{ comment.useridMasked }}</p>
        </div>
        <button
            type="button"
            class="summer-comment__delete"
            @click="deleteComment(comment.idx)"
        >
          <img src="@/assets/event/SummerPhrases/summer__comment--delet.png" alt="삭제하기">
        </button>
      </div>
    </div>

  </article>
  <article @click="moveToLink(127808, 'event')">
    <img src="@/assets/event/SummerPhrases/summer__banner.jpg" alt="텐텐문구클럽 신청하러가기">
  </article>
  <aside
      class="summer__floating"
      @click="scrollToComment"
  >
    <button type="button" class="summer__floating--close" @click.stop="closeFloating">
      <img src="//webimage.10x10.co.kr/fixevent/event/2024/127725/summer__floating--delete.png/10x10/optimize" alt="플로팅 안보기">
    </button>
    <img src="//webimage.10x10.co.kr/fixevent/event/2024/127725/summer__floating.png/10x10/optimize" alt="코멘트 이벤트 바로가기">
  </aside>
</template>

<script>
import {defineComponent} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
export default defineComponent({
  name: 'SummerPhrases',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      newComment: '',
      commentList: [],
      modules: [Autoplay],
      swiperList: [
        require('@/assets/event/SummerPhrases/summer__swiper01.jpg'),
        require('@/assets/event/SummerPhrases/summer__swiper02.jpg'),
        require('@/assets/event/SummerPhrases/summer__swiper03.jpg'),
        require('@/assets/event/SummerPhrases/summer__swiper04.jpg'),
      ]
    }
  },
  methods: {
    numberFormat(price) {
      const floorPrice = Math.floor(price);
      return floorPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    moveToLink(code, type) {
      let url = '';
      switch (type) {
        case 'item':
          url = `https://m.10x10.co.kr/category/category_itemPrd.asp?itemid=${code}`;
          break;
        case 'event':
          url = `https://m.10x10.co.kr/event/eventmain.asp?eventid=${code}`;
          break;
        default:
          console.error('Unsupported type:', type);
      }
      return location.href = url;
    },
    addComment() {
      if (this.newComment.value > 0) {
        this.commentList.value.push(
            {
              comment: this.newComment.value,
              idx: this.commentList.value.length,
              useridMasked: 'SomeUser'
            }
        );
        this.newComment.value = '';
      } else  {
        alert('내용을 입력해주세요.')
      }
    },
    deleteComment(idx) {
      const index = this.commentList.value.findIndex(comment => comment.idx === idx);
      if (index !== -1) {
        this.commentList.value.splice(index, 1);
      }
    },
    scrollToComment() {
      const commentSection = document.getElementById('commentWrite');
      if (commentSection) {
        commentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/work/summerPhrases.scss";
</style>
