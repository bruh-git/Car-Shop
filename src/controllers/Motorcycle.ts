import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class CarController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    // Unimos o tipo do _request_ com um objeto que tem chave `body` com o valor de um IMotorcycle
    // assim conseguimos extrair as propriedades da armação para passá-las para o _service_
    req: Request & { body: IMotorcycle },
    // Usamos o IMotorcycle como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo IMotorcycle
    res: Response<IMotorcycle>,
  ) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async read(
    req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { params, body } = req;
    const result = await this._service.update(params.id, body);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { params } = req;
    const result = await this._service.delete(params.id);
    return res.status(204).json(result);
  }
}