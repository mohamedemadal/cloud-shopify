<template>
  <va-dropdown class="language-dropdown" :offset="[13, 0]" stick-to-edges>
    <template #anchor>
      <va-icon :name="getFlagIcon(locale, 'large')" />
    </template>

    <va-dropdown-content class="language-dropdown__content pl-8 pr-8 pt-2 pb-2">
      <div
        v-for="(option, id) in options"
        :key="id"
        class="language-dropdown__item flex flex-1 flex-wrap items-center pt-1 pb-1 mt-2 mb-2"
        :class="{ active: option.code === locale }"
        @click="setLocale(option.code)"
      >
        <va-icon :name="getFlagIcon(option.code, 'small')" />
        <span class="dropdown-item__text">
          {{ t(`language.${option.name}`) }}
        </span>
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { reactive, computed } from 'vue'
  const { t, locale } = useI18n()
  import axios from 'axios'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()

  withDefaults(
    defineProps<{
      options?: { code: string; name: string }[]
    }>(),
    {
      options: () => [
        {
          code: 'gb',
          name: 'english',
        },
        {
          code: 'sa',
          name: 'arabic',
        },
        {
          code: 'az',
          name: 'azerbaijan',
        },
        {
          code: 'ge',
          name: 'georgia',
        },
        {
          code: 'ru',
          name: 'russia',
        },
        {
          code: 'tr',
          name: 'turkey',
        },
      ],
    },
  )

  function getFlagIcon(code: string, size: string) {
    return `flag-icon-${code} ${size}`
  }

  import i18n from '../../../../i18n/index'

  const changeLocale = () => {
    i18n.global.locale.value != 'sa' ? executeArCode() : executeEnCode()
  }

  const executeArCode = () => {
    localStorage.setItem('dir', 'ltr')
    document.body.dir = 'ltr'
  }

  const executeEnCode = () => {
    localStorage.setItem('dir', 'rtl')

    document.body.dir = 'rtl'
  }

  const setLocale = (code: string) => {
    axios
      .get(`/api/language/${locale}`)
      .then((res) => {
        locale.value = code
        localStorage.setItem('appLang', code)
        changeLocale()
        router.push({
          params: { locale: code },
        })
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
</script>

<style lang="scss" scoped>
  @import 'flag-icons/css/flag-icons.css';

  .language-dropdown {
    cursor: pointer;

    &__content {
      .fi-size-small {
        min-width: 1.5rem;
        min-height: 1.5rem;
        margin-right: 0.5rem;
      }
    }

    &__item {
      cursor: pointer;
      flex-wrap: nowrap;

      &:last-of-type {
        padding-bottom: 0 !important;
      }

      &:hover {
        color: var(--va-primary);
      }
    }

    .fi::before {
      content: '';
    }

    .fi-size-large {
      display: block;
      width: 32px;
      height: 24px;
    }

    .va-dropdown__anchor {
      display: inline-block;
    }
  }
</style>
