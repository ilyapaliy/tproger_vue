<template>
  <li>
    <a href="{{ href }}">
    <p>{{ text }}</p>
    <div class="bottom">
      <div class="left">
        <img src="@/assets/message-circle.svg">
        <span>{{ comments_num }}</span>
      </div>
      <div class="right">
        <img src="@/assets/eye.svg">
        <span class="views">{{ views_num }}</span>
        <span class="plus">+{{ plus_num }}</span>
      </div>
    </div>
    </a>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    href: String,
    text: String,
    comments_num: String,
    views_num: String,
    plus_num: String
  }
})
export default class RightMenuItem extends Vue {
  href!: string
  text!: string
  comments_num!: string
  views_num!: string
  plus_num!: string
}
</script>

<style scoped lang="scss">

li {
  @include flex(center, space-between, 0);

  a {
    color: var(--text-light-color);
  }

  p {
    @include font(2*$pt, 500, 3*$pt, normal);
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2*$pt;

    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .bottom {
    @include flex(center, space-between, 0);
    color: var(--second-light-color);

    .left {
      gap: 6px;
      @include font16;
    }

    .right {
      @include font14;
      img {
        margin-right: 6px;
        padding: 1px;
      }
      .views {
        margin-right: 2*$pt;
      }
      .plus {
        color: var(--a-light-color);
      }
    }
  }
}

</style>
