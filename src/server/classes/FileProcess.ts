import { FileType } from 'common/types/types'

type Operation = 'import' | 'export'
type Timestamp = number
type BookId = string

type ProcessProps = {
  bookId: BookId
  type: FileType

  // @TODO if logic grows restructure url and how it's used to differentiate import/export processess atm
  url?: string
}

export type RequestProcess = Omit<Process, 'init'>
export type Processes = Record<BookId, RequestProcess>
export default class Process {
  bookId: BookId
  type: FileType
  state: 'pending' | 'finished'
  created_at: Timestamp
  updated_at: Timestamp
  url?: string
  operation: Operation

  constructor({ bookId, type, url }: ProcessProps) {
    this.bookId = bookId
    this.type = type
    this.state = 'pending'
    this.created_at = Date.now()
    this.updated_at = Date.now()
    this.url = url
    this.operation = url ? 'import' : 'export'

    this.init(this.operation)
  }

  async init(operation: Operation) {
    await Process.simulateProcessing(
      Process.PROCESSSING_TIMES[operation === 'import' ? 'import' : this.type]
    )

    this.state = 'finished'
    this.updated_at = Date.now()
  }

  static PROCESSSING_TIMES = {
    epub: 10,
    pdf: 25,
    import: 60,
  }

  static simulateProcessing = (seconds: number) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}
