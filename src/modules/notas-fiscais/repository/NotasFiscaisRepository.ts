export abstract class NotasFiscaisRepository {
  abstract findAll(offset?: number, limit?: number): Promise<any>;
}
