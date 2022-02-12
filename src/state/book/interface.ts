export interface Book {
  title: string,
  description: string,
  contributor?: string | null,
  author: string,
  contributor_note?: string,
  price?: number,
  age_group: string | null,
  publisher: string,
  isbns: [
    {
      isbn10: string,
      isbn13: string
    }
  ],
  ranks_history: [
    {
      primary_isbn10: string,
      primary_isbn13: string,
      rank: number,
      list_name: string,
      display_name: string,
      published_date: string,
      bestsellers_date: string,
      weeks_on_list: number,
      ranks_last_week: null,
      asterisk: number,
      dagger: number
    }
  ],
  reviews: [
    {
      book_review_link: string | null,
      first_chapter_link: string | null,
      sunday_review_link: string | null,
      article_chapter_link: string | null
    }
  ]
}

export interface Reducer {
  bestSeller: Book[] | null,
  error: any
}

interface ActionSetBestSeller {
  type: string,
  payload: Book[] | null
}

export interface Error {
  type: string,
  payload: any
}

export type Action = ActionSetBestSeller
