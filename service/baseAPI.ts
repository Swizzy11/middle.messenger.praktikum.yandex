export class BaseAPI {

    public create?(data: any):Promise<unknown> {
        throw new Error('Not implemented');
    }
    public request?(data?: string | number):Promise<unknown> {
        throw new Error('Not implemented');
    }
    public update?(data: unknown, id?: string | number):Promise<unknown> {
        throw new Error('Not implemented');
    }
    public delete?(id: string | number):Promise<unknown> {
        throw new Error('Not implemented');
    }
  }
