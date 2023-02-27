import HTTPTransport from "../src/utils/HTTPTransport";
export class BaseAPI {

    public create?(data: any): Promise<any> {
        throw new Error('Not implemented');
    }
    public request?(data?: string | number): Promise<any> {
        throw new Error('Not implemented');
    }
    public update?(data: unknown, id?: string | number): Promise<any> {
        throw new Error('Not implemented');
    }
    public delete?(id: string | number): Promise<any> {
        throw new Error('Not implemented');
    }
  }
