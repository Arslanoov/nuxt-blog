<template lang="pug">
  .socials
    .socials__title(v-if=`title`) {{ title }}
    .socials__items(:class=`{
      "socials__items_bordered": withBorder
    }`)
      a(v-for=`item in items`, :href=`item.url`, :key=`item.url`, target="_blank").socials__item
        font-awesome-icon(:icon=`["fab", item.icon]`)
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

import { SocialInterface } from "~/interfaces/social"

@Component({})
export default class BaseError extends Vue {
  @Prop([String]) readonly title!: string
  @Prop([Array]) readonly items!: SocialInterface[]
  @Prop({ type: Boolean, default: false }) readonly withBorder!: boolean
}
</script>

<style lang="less" scoped>
.socials {
  &__title {
    margin-bottom: 1.5rem;

    font-size: @socials-title-font-size;
    font-weight: @socials-title-font-weight;

    color: @socials-title-color;
  }

  &__items {
    display: inline-block;

    padding: 0.8rem 0.7rem;

    &_bordered {
      border-bottom: @socials-border-bottom;
    }
  }

  &__item {
    font-size: @socials-item-font-size;

    color: @socials-item-color;

    .pointer-on-hover();

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
}
</style>
