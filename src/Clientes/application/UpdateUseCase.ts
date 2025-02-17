import { Users } from "../domain/users"; 
import { Repository } from "../domain/Repository";

export class UpdateClientesUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(
    id: number,
    nombre: string,
    password: string
  ): Promise<Users | null> {
    try {
      const result = await this.movimientoRepo.update(
        id,
        nombre,
        password
      );
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
