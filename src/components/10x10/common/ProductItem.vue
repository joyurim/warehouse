<template>
  <li class="item" v-for="item in limitedItems" :key="item.itemId">
    <figure class="item__thumbnail">
      <img :src="item.image" :alt="item.name">
    </figure>
    <p class="item__brand">{{ item.brandName }}</p>
    <p class="item__name">{{ item.name }}</p>
    <p v-if="item.discountText" class="item__orgPrice">{{ numberFormat(item.originPrice) }}</p>
    <p class="item__priceBox">
      <span v-if="item.discountText" class="percent">{{ item.discountText }}</span>
      <span class="price">{{ numberFormat(item.price) }}</span>
    </p>
    <div v-if="item.reviewCount" class="review">
      <div class="review__eval">
        <span class="review__eval--rating" :style="{ width: (item.reviewScore * 20) + '%' }" />
      </div>
      <span class="review__count">
        ({{ numberFormat(item.reviewCount) }})
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    itemLimit: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      itemList: [
        {
          itemId: 6369514,
          brandId: 'sanrio10x10',
          brandName: 'SANRIO',
          image: 'https://webimage.10x10.co.kr/image/basic/636/B006369514-2.jpg',
          name: '[6/28배송] 텐텐포차코박스',
          originPrice: 71400,
          price: 34900,
          discountText: '51%',
          reviewCount: 2517,
          reviewScore: 5,
          isWish: false
        },
        {
          itemId: 6351949,
          brandId: 'misstop88',
          brandName: 'sukeydokey',
          image: 'https://webimage.10x10.co.kr/image/basic/635/B006351949.jpg',
          name: '수키도키 한달버티기 올인원팩',
          originPrice: 15000,
          price: 10000,
          discountText: '33%',
          reviewCount: 82,
          reviewScore: 5,
          isWish: false
        },
        {
          itemId: 6329485,
          brandId: 'pis935310',
          brandName: 'ULLALA',
          image: 'https://webimage.10x10.co.kr/image/basic/632/B006329485.jpg',
          name: '체리쉬 나시 투피스 크림 40수',
          originPrice: 74000,
          price: 74000,
          discountText: '',
          reviewCount: 1,
          reviewScore: 3,
          isWish: false
        },
        {
          itemId: 3581268,
          brandId: 'disney10x10',
          brandName: 'Disney Edition',
          image: 'https://thumbnail.10x10.co.kr/webimage/image/tenten/358/T003581268.jpg?cmd=thumb&fit=true&ws=false&w=300&h=300/10x10/optimize',
          name: '푸 씨리얼볼 세트(스푼&씨리얼볼)',
          originPrice: 24000,
          price: 17900,
          discountText: '25%',
          reviewCount: 2415,
          reviewScore: 4,
          isWish: false
        },
        {
          itemId: 6360928,
          brandId: 'bleoh22',
          brandName: 'Character World',
          image: 'https://webimage.10x10.co.kr/image/basic/636/B006360928.jpg',
          name: '산리오 원터치 밀폐용기 진공 사각 플라스틱통 3종 세트',
          originPrice: 42900,
          price: 29900,
          discountText: '30%',
          reviewCount: null,
          reviewScore: null,
          isWish: false
        },
        {
          itemId: 6348020,
          brandId: 'bandainamco',
          brandName: 'BANDAINAMCO',
          image: 'https://webimage.10x10.co.kr/image/basic/634/B006348020.jpg',
          name: 'HG 건담 G-셀프 퍼펙트 팩 장비형',
          originPrice: 30000,
          price: 27000,
          discountText: '10%',
          reviewCount: 3,
          reviewScore: 5,
          isWish: false
        },
        {
          itemId: 6334095,
          brandId: 'amuroki',
          brandName: 'amuroki',
          image: 'https://webimage.10x10.co.kr/image/basic/633/B006334095.jpg',
          name: '아무로키 해달이 파우치',
          originPrice: 26000,
          price: 26000,
          discountText: '',
          reviewCount: 1,
          reviewScore: 5,
          isWish: false
        },
        {
          itemId: 6340383,
          brandId: 'prolana',
          brandName: 'origo',
          image: 'https://webimage.10x10.co.kr/image/basic/634/B006340383.jpg',
          name: '디즈니 인사이드아웃 리버서블 파우치 6color',
          originPrice: 35000,
          price: 28000,
          discountText: '20%',
          reviewCount: null,
          reviewScore: null,
          isWish: false
        },
        {
          itemId: 6368053,
          brandId: 'pancake10',
          brandName: 'pancake',
          image: 'https://webimage.10x10.co.kr/image/basic/636/B006368053.jpg',
          name: '덕질 미니크로스',
          originPrice: 49800,
          price: 41800,
          discountText: '16%',
          reviewCount: null,
          reviewScore: null,
          isWish: false
        },
        {
          itemId: 4728736,
          brandId: 'disney10x10',
          brandName: 'Disney Edition',
          image: 'https://thumbnail.10x10.co.kr/webimage/image/tenten/472/T004728736.jpg?cmd=thumb&fit=true&ws=false&w=300&h=300',
          name: '[사은품증정] 디즈니 푸 멀티쿠커',
          originPrice: 39000,
          price: 22900,
          discountText: '41%',
          reviewCount: 426,
          reviewScore: 4.89,
          isWish: false
        },
        {
          itemId: 6358665,
          brandId: 'Logitech_srise',
          brandName: 'Logitech',
          image: 'https://webimage.10x10.co.kr/image/basic/635/B006358665.jpg',
          name: '[예약판매] 로지텍코리아 iPad Pro 11인치(M4)용 Combo Touch',
          originPrice: 345000,
          price: 345000,
          discountText: '',
          reviewCount: null,
          reviewScore: null,
          isWish: false
        },
        {
          itemId: 6340094,
          brandId: 'Playmobil',
          brandName: 'Playmobil',
          image: 'https://webimage.10x10.co.kr/image/basic/634/B006340094.jpg',
          name: '플레이모빌 50주년 기프트 세트-코스튬 파티',
          originPrice: 35000,
          price: 35000,
          discountText: '',
          reviewCount: null,
          reviewScore: null,
          isWish: false
        },
        {
          itemId: 6332279,
          brandId: 'microsoft990',
          brandName: 'HAILY',
          image: 'https://webimage.10x10.co.kr/image/basic/633/B006332279.jpg',
          name: '헤일리 옥씨즌 WOOD 2단 유리 테이블',
          originPrice: 518000,
          price: 518000,
          discountText: '',
          reviewCount: null,
          reviewScore: null,
          isWish: false
        },
        {
          itemId: 4039727,
          brandId: 'sanrio10x10',
          brandName: 'SANRIO',
          image: 'https://thumbnail.10x10.co.kr/webimage/image/basic600/403/B004039727-1.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
          name: '산리오 헬로키티 디퓨저',
          originPrice: 27000,
          price: 19200,
          discountText: '29%',
          reviewCount: 209,
          reviewScore: 4.85,
          isWish: false
        },
      ]
    };
  },
  computed: {
    limitedItems() {
      return this.shuffleArray(this.itemList).slice(0, this.itemLimit);
    }
  },
  methods: {
    shuffleArray(array) {
      const shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    },
    numberFormat(price) {
      const floorPrice = Math.floor(price);
      return floorPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  }
}
</script>
<style scoped lang="scss">
.item {
  width: pxToVw(150);
  &__thumbnail {
    @include thumbnail(150, 150);
    margin-bottom: pxToVw(8);
    overflow: hidden;
  }
  &__brand {
    @include font(14,20,$weight-700);
    letter-spacing: - pxToVw(0.05);
    text-transform: lowercase;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: pxToVw(8);
    @include font(14,20,$weight-500);
    letter-spacing: - pxToVw(0.09);
  }
  &__orgPrice {
    color: $grey50;
    @include font(12,18,$weight-500);
    letter-spacing: - pxToVw(0.09);
    text-decoration-line: line-through;
  }
  &__priceBox {
    .percent {
      margin-right: pxToVw(4);
      color: $ten;
      @include font(15,20,$weight-700);
      letter-spacing: - pxToVw(0.09);
    }
    .price {
      @include font(15,20,$weight-700);
      letter-spacing: - pxToVw(0.09);
    }
  }
  .review {
    display: flex;
    align-items: center;
    margin-top: pxToVw(8);
    &__eval {
      display: inline-block;
      width: pxToVw(60);
      height: pxToVw(12);
      background-image: url("@/assets/tenbyten/common/star-line.svg");
      background-repeat: repeat-x;
      background-size: pxToVw(12) pxToVw(12);
      overflow: hidden;
      &--rating {
        display: inline-block;
        height: pxToVw(12);
        background-image: url("@/assets/tenbyten/common/star-full.svg");
        background-repeat: repeat-x;
        background-size: pxToVw(12) pxToVw(12);
      }
    }
    &__count {
      margin-left: pxToVw(4);
      color: $grey60;
      @include font(11,16,$weight-400);
    }
  }
}
</style>
