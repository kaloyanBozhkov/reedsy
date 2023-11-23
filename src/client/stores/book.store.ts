import create from 'vue-zustand'

interface BookStore {
  books: string[]
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
}))
