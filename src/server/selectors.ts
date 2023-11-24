export const LINK_SELECT = {
  distributor: true,
  href: true,
}

export const BOOK_SELECT = {
  id: true,
  title: true,
  publishedOn: true,
  img: true,
  rating: true,
  links: {
    select: LINK_SELECT,
  },
  author: {
    select: {
      name: true,
    },
  },
}
