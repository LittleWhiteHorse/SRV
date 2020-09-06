<style>
  @import './tags-nav.css';
</style>
<template>
  <div class="tag-nav">
<!--    <div class="close-box">-->
<!--      <Dropdown @on-click="handleTagsClose">-->
<!--        <Button type="text">-->
<!--          <Icon type="md-close" :size="18" />-->
<!--        </Button>-->
<!--        <DropdownMenu slot="list">-->
<!--          <DropdownItem name="all">关闭全部</DropdownItem>-->
<!--          <DropdownItem name="other">关闭其他</DropdownItem>-->
<!--        </DropdownMenu>-->
<!--      </Dropdown>-->
<!--    </div>-->
<!--    <div class="btn-box left-btn">-->
<!--      <Button type="text" @click="handleScroll(200)">-->
<!--        <Icon type="ios-arrow-back" :size="18" />-->
<!--      </Button>-->
<!--    </div>-->
    <div class="tag-box" ref="tagBox">
      <div class="scroll-box" ref="scrollBox" :style="{left: tagBodyLeft + 'px'}">
        <Tag
          ref="tagNavOpen"
          size="large"
          v-for="(item, index) in list"
          :data-route-item="item"
          :closable="item.name !== $config.homeName"
          :color="isCurTag(item) ? 'primary' : 'default'"
          :key="`tag-nav-${index}`"
          :name="item.name"
          @click.native="handleClick(item)"
          @on-close="handleClose(item)">
          {{item.meta.title}}
        </Tag>
      </div>
    </div>
<!--    <div class="btn-box right-btn">-->
<!--      <Button type="text" @click="handleScroll(-200)">-->
<!--        <Icon type="ios-arrow-forward" :size="18" />-->
<!--      </Button>-->
<!--    </div>-->
  </div>
</template>
<script>
import { equalRoute } from '@/libs/utils'
export default {
  name: 'TagsNav',
  props: {
    routeCur: {
      type: Object
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tagBodyLeft: 0,
      rightOffset: 40,
      outerPadding: 4
    }
  },
  computed: {
    curRouter () {
      const { name, params, query, meta } = this.routeCur
      return { name, params, query, meta }
    }
  },
  watch: {
    '$route' (to) {
      this.getTagElementByRoute(to)
    }
  },
  methods: {
    handleTagsClose (type) {
      if (type === 'all') {
        console.log(this.$config)
        let res = this.list.filter(item => item.name === this.$config.homeName)
        this.$emit('on-close', res, type)
      } else if (type === 'other') {
        let res = this.list.filter(item => equalRoute(item, this.curRouter) || item.name === this.$config.homeName)
        this.$emit('on-close', res, type, this.curRouter)
      }
    },
    handleClose (route) {
      let res = this.list.filter(item => !equalRoute(item, route))
      this.$emit('on-close', res, undefined, route)
    },
    handleScroll (offset) {
      const outerWidth = this.$refs.tagBox.offsetWidth
      const bodyWidth = this.$refs.scrollBox.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            let left = this.tagBodyLeft
            this.tagBodyLeft = left
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    moveToView (tag) {
      const outerWidth = this.$refs.tagBox.offsetWidth
      const bodyWidth = this.$refs.scrollBox.offsetWidth
      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
      } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
      }
    },
    getTagElementByRoute (route) {
      this.$nextTick(() => {
        this.refsTag = this.$refs.tagNavOpen
        this.refsTag.forEach((item, index) => {
          if (equalRoute(route, item.$attrs['data-route-item'])) {
            let tag = this.refsTag[index].$el
            this.moveToView(tag)
          }
        })
      })
    },
    isCurTag (item) {
      return equalRoute(this.curRouter, item)
    },
    handleClick (item) {
      this.$emit('clickTag', item)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
