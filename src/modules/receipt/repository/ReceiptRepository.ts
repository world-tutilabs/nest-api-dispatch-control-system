export abstract class ReceiptRepository {
  abstract findAll(): Promise<any>;
}
