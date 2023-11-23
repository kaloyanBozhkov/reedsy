<template>
  <table
    :class="['table-fixed', spacingAdjust ? '' : 'w-full']"
    :style="getSpacingFixTable('margin')"
  >
    <thead class="hidden sm:table-header-group">
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="column.key"
          :class="[
            !index ? 'w-auto md:w-[300px] lg:w-[500px]' : '',
            'text-left text-gray-400 dark:text-gray-200 text-xs font-semibold py-4 px-2',
          ]"
          :style="getSpacingFixTable('padding')"
        >
          {{ column.label.toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id" class="odd:bg-black/5 hover:bg-black/[0.08]">
        <td
          v-for="column in columns"
          :key="column.key"
          :data-label="column.label.toUpperCase()"
          :style="getSpacingFixTable('padding')"
          class="flex flex-col gap-1 my-4 before:content-[attr(data-label)] before:block before:text-gray-400 before:dark:text-gray-200 before:text-xs before:font-semibold sm:before:hidden sm:table-cell sm:py-4 sm:px-2"
        >
          <slot :name="column.key" :row="row">
            {{ row[column.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<Array<{ key: string | number; label: string }>>,
      required: true,
    },
    rows: {
      type: Array as PropType<Array<Record<string, any>>>,
      required: true,
    },
    spacingAdjust: {
      type: String,
      default: '',
    },
  },
  computed: {
    getSpacingFixTable() {
      return (prop: 'margin' | 'padding') => {
        if (!this.spacingAdjust) return

        const sign = prop === 'margin' ? '-' : ''
        return {
          [`${prop}Left`]: `${sign}${this.spacingAdjust}`,
          [`${prop}Right`]: `${sign}${this.spacingAdjust}`,
        }
      }
    },
  },
})
</script>
