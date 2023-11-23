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
            'text-left text-gray-400 dark:text-slate-300 text-xs font-bold py-4 px-2',
          ]"
          :style="getSpacingFixTable('padding')"
        >
          {{ column.label.toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="isLoading"
        v-for="(_, idx) in Array(rowsLoading).fill(null)"
        class="odd:bg-black/5 dark:hover:bg-black/[0.08] hover:bg-black/[0.02] hover:odd:bg-black/[0.07]"
      >
        <td
          v-for="column in columns"
          :key="`${column.key}-${idx}`"
          :data-label="column.label.toUpperCase()"
          :style="getSpacingFixTable('padding')"
          class="flex flex-col gap-3 font-normal before:content-[attr(data-label)] before:block before:text-slate-500 before:dark:text-slate-400 before:text-xs before:font-semibold sm:before:hidden sm:table-cell sm:py-4 sm:px-2 dark:text-slate-300"
        >
          <div class="animate-pulse bg-black/10 flex-1 min-h-[50px] sm:my-4" />
        </td>
      </tr>
      <tr
        v-else
        v-for="row in rows"
        :key="row.id"
        :class="[
          'odd:bg-black/5 dark:hover:bg-black/[0.08] hover:bg-black/[0.02] hover:odd:bg-black/[0.07] flex flex-col gap-4 py-8 sm:py-0 sm:table-row',
          onRowClick ? 'cursor-pointer' : '',
        ]"
        @click="onRowClick?.(row)"
      >
        <td
          v-for="column in columns"
          :key="column.key"
          :data-label="column.label.toUpperCase()"
          :style="getSpacingFixTable('padding')"
          class="flex flex-col gap-2 font-normal before:content-[attr(data-label)] before:block before:text-slate-500 before:dark:text-slate-400 before:text-xs before:font-semibold sm:before:hidden sm:table-cell sm:py-4 sm:px-2 dark:text-slate-300"
        >
          <slot :name="column.key" :row="row">
            {{ row[column.key] }}
          </slot>
        </td>
        <slot :name="`${row.id}-expanded`" />
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
// @TODO generics wiht defineComponent seem to be lacking still?
// https://blog.vuejs.org/posts/vue-3-3#generic-components
import { PropType, defineComponent } from 'vue'

interface TableColumn {
  key: string | number
  label: string
}

interface TableRowBase {
  id: string | number
}

interface TableRow extends TableRowBase {
  [key: string | number]: any
}

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true,
    },
    rows: {
      type: Array as PropType<TableRow[]>,
      required: true,
    },
    spacingAdjust: {
      type: String,
      default: '',
    },
    onRowClick: {
      type: Function as PropType<(row: TableRow) => void>,
      default: undefined,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    rowsLoading: {
      type: Number,
      default: 5,
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
