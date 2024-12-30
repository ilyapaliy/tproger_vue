<template>
      <ul class="upper">
        <a v-for="li in accordion.lis" :href="li.href" :key="li"><li>
          <img :src="li.src">
          <span>{{ li.text }}</span>
        </li></a>
        <template v-for="item in accordion.accordion_items" :key="item">
        <li class="accordion-parent" @click="on_click_accordion()">
          <img :src="item.parent_src">
          <span>{{ item.parent_text }}</span>
          <img class="arrow" src="@/assets/aside/arrow.svg">
        </li>
        <ul class="accordion-child">
          <a v-for="child in item.children" :key="child" :href="child.child_href"><li>{{ child.child_text }}</li></a>
          <template v-if="item.is_more">
          <a href="https://tproger.ru/"><li class="more">Ещё...</li></a>
          </template>
        </ul>
        </template>
      </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

interface Li {
  href: string,
  src: string,
  text: string
}

interface Child {
  child_href: string,
  child_text: string
}

interface Parent {
  parent_src: string,
  parent_text: string,
  children: Array<Child>,
  is_more: boolean
}

interface Accordion {
  lis?: Array<Li>,
  accordion_items?: Array<Parent>
}

interface AccordionTarget extends EventTarget {
  parentElement: Element
}


@Options({
  data() {
    return {
      accordionParents: document.getElementsByClassName("accordion-parent"),
      accordionChildren: document.getElementsByClassName("accordion-child"),
    }
  },
  props: {
    accordion: {
      // This check only correspondence to Object type.
      // Checking of interfeces types not work.
      type: Object as Accordion
    }
  },
  methods: {
    search(): void {
      document.querySelector(".search-container")!.classList.add("focused")
    },
    searchout(): void {
      document.querySelector(".search-container")!.classList.remove("focused")
    },
    on_click_accordion(): void {
      // console.log(event!.target.className)
      // console.log(event?.target.className)
      // console.log((event as PointerEvent).target.className)
      let visibles = document.getElementsByClassName("visible")
      for (let i = 0; i < this.accordionParents.length; i++) {
        if (
          this.accordionParents[i] == (event as PointerEvent).target ||
          this.accordionParents[i] == ((event as PointerEvent).target as AccordionTarget).parentElement
          ) {
          let iClassList = this.accordionChildren[i].classList
          if (iClassList.contains('visible')) {
            iClassList.remove('visible')
            this.accordionParents[i].children[2].classList.remove('arrow-rotation')
          } else {
            if (visibles.length > 0) {
              console.log(visibles[0].previousElementSibling)
              visibles[0].previousElementSibling?.children[2].classList.remove('arrow-rotation')
              visibles[0].classList.remove("visible")
            }
            iClassList.add('visible')
            this.accordionParents[i].children[2].classList.add('arrow-rotation')
            console.log(this.accordionParents[i].children[2])
          }
        }
      }
    }
  },
})
export default class LeftMenu extends Vue {
  accordion!: Accordion
}

</script>

<style scoped lang="scss">

.upper {
  list-style-type: none;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: $second-dark-color $bg-main-color;

  @media (max-width: $s-computer-screen-width) {
    span {
      display: none;
    }
    .arrow {
      display: none;
    }
  }

  li {
    @include font18;
    @include flex(center, start, 6px);

    border-radius: $pt;
    padding: 6px 2*$pt;
    color: $text-dark-color;
    user-select: none;

    &:hover {
      background-color: $second-dark-color;
    }

    .arrow {
      margin-left: -2px;
      transition: transform .25s ease;
    }

    .arrow-rotation {
      transform: rotate(-180deg);
    }
  }

  ul {
    display: none;
  }

  .visible {
    display: block;
  }

  .more {
    @include font16;
    color: $a-dark-color;

    &:hover {
      background-color: $bg-main-color;
      color: $a-hover-color;
      text-decoration: underline;
    }        
  }
}

</style>
