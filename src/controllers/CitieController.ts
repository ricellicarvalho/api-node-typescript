import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICitie {
  name: string;
}

class CitieController {
  async listCities(req: Request, res: Response) {
    
    return res.send('Listing cities');
  }

  async create(req: Request<{}, {}, ICitie>, res: Response) {
    const data: ICitie = req.body;

    if (req.body.name === undefined) {
      return res.status(StatusCodes.BAD_REQUEST).send('A propiedade nome existe');
    }
    
    return res.json(data.name);
  }
}

export { CitieController };