<script setup lang="ts">
import { THEME } from '@/configs'
import { defineCssNamespace, useTheme, useToggleTheme } from '@/hooks'
import { MoonIcon, SunIcon } from '@/icons'
import { computed } from 'vue'

const cssNs = defineCssNamespace('appearance')
const [theme] = useTheme()

function handleToggleTheme() {
  useToggleTheme()
}
const checked = computed(() => {
  return theme.value === THEME.DARK
})
</script>

<template>
  <div class="flex" :class="[cssNs.cls]">
    <button
      role="switch"
      class="relative block shrink-0 outline-0"
      :aria-checked="checked"
      @click="handleToggleTheme"
    >
      <span :class="[cssNs.e('check')]">
        <span
          class="relative block overflow-hidden rounded-full"
          :class="[cssNs.e('icon')]"
        >
          <SunIcon />
          <MoonIcon />
        </span>
      </span>
    </button>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/override.scss' as *;
@use '@/assets/scss/theme.scss' as *;

.dark {
  .#{$namespace}-appearance {
    --switch-border-divider: #545454a6;
    --switch-bg-color: #3b3b3b;
    --switch-checked-color: #1a1a1a;
    --switch-fill-svg: #ffffffde;
  }
}

.#{$namespace}-appearance {
  --switch-border-divider: #3c3c3c4a;
  --switch-bg-color: #f1f1f1;
  --switch-checked-color: #fff;
  --switch-fill-svg: #3c3c3cb3;
  --switch-translate-x: 18px;

  button {
    border-radius: 11px;
    width: 40px;
    height: 22px;
    cursor: pointer;
    border: 1px solid var(--switch-border-divider);
    background-color: var(--switch-bg-color);
    transition: border-color 0.25s;

    &[aria-checked='true'] {
      .sun {
        opacity: 0;
      }

      .moon {
        opacity: 1;
      }
    }
  }

  &__icon {
    width: 18px;
    height: 18px;

    svg {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 12px;
      height: 12px;
      fill: var(--switch-fill-svg);
    }
  }

  &__check {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--switch-checked-color);
    transition: transform 0.25s;
  }
}

.#{$namespace}-appearance
  button[aria-checked='true']
  .#{$namespace}-appearance__check {
  transform: translate(var(--switch-translate-x));
}
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}
</style>
