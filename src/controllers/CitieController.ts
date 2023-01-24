import { Request, Response } from 'express';

interface ICitie {
  name: string;
}

class CitieController {
  async listCities(req: Request, res: Response) {
    
    return res.send('Listing cities');
  }

  async create(req: Request<{}, {}, ICitie>, res: Response) {
    const data: ICitie = req.body;
    
    return res.json(data.name);
  }
}

export { CitieController };