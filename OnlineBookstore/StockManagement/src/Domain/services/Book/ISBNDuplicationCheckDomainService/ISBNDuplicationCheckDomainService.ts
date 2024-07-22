import { BookId } from 'Domain/models/Book/BookId/BookId';
import { IBookRepository } from 'Domain/models/Book/IBookRepository';

export class ISBNDuplicationCheckDomainService {
  constructor(private readonly bookRepository: IBookRepository) { }

  async execute(isbn: BookId): Promise<boolean> {
    // データベースに問い合わせて重複があるか確認する
    const duplicateISBNBook = await this.bookRepository.find(isbn);
    const isDuplicateISBN = duplicateISBNBook !== null;

    return isDuplicateISBN;
  }
}