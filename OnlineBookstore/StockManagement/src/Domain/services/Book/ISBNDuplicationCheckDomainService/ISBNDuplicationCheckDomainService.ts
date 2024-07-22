import { BookId } from 'Domain/models/Book/BookId/BookId';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// リポジトリを適用せずに実装
export class ISBNDuplicationCheckDomainService {
  async execute(isbn: BookId): Promise<boolean> {
    // データベースに問い合わせて重複があるか確認する
    const duplicateISBNBook = await prisma.book.findUnique({
      where: {
        bookId: isbn.value
      },
    });

    const isDuplicateISBN = duplicateISBNBook !== null;

    return isDuplicateISBN;
  }
}