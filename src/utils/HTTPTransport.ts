import { json } from "stream/consumers";

const enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}


function queryStringify(value: {[key:string]: string}) {
  if (typeof value !== "object") {
    throw new Error("Data must be object")
  }

  const keyLength = Object.keys(value);
  return keyLength.reduce((result, key, index) => {
    return `${result}${key}=${value[key]}${index < keyLength.length - 1 ? "&" : ""}`
  }, "?")
}

type Options = {
  method: METHODS;
  headers?: Record<string, string>
  data?: any;
  timeout?: number;
};

const mainUrl = 'https://ya-praktikum.tech/api/v2';

class HTTPTransport {
  async get<TResponse>(url: string, data?: {}): Promise<TResponse> {
      return this.request(url, {method: METHODS.GET, data});
  }

  async post<TResponse>(url: string, data: {}): Promise<TResponse> {
      return this.request(url, {method: METHODS.POST, data});
  }

  async put<TResponse>(url: string, data: {}): Promise<TResponse> {
      return this.request(url, {method: METHODS.PUT, data});
  }

  async delete<TResponse>(url: string, data: {}): Promise<TResponse> {
      return this.request(url, {method: METHODS.DELETE, data});
  }

  async request<TResponse>(
      url: string,
      options: Options = {method: METHODS.GET},
  ): Promise<TResponse> {
      return new Promise((resolve, reject) => {
          const {headers = {},method, data} = options;

          const xhr:XMLHttpRequest = new XMLHttpRequest();

          if (method === METHODS.GET) {
              if (data) {
                  url = `${url}?${Object.entries(data)
                      .map(([key, value]: [key: string, value: any]): string => {
                          return `${key}=${value}`;
                      })
                      .join('&')}`;
              }
          }

          xhr.open(method, mainUrl + url);
          xhr.withCredentials = true

          Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key])
          })


          xhr.onload = function () {
              let resp;
              if (~xhr?.getResponseHeader('Content-Type')?.indexOf('application/json')!) { 
                resp = JSON.parse(xhr.response)
              } else {
                  resp = xhr.response;
              }
              if (xhr.status === 200) {
                  resolve(resp);

              }else if(xhr.response === `{"reason":"Login already exists"}`)  {
                  resolve(resp);
              }else if(xhr.response === `{"reason":"Login or password is incorrect"}`)  {
                  resolve(resp);
              }else if(xhr.response === `{"reason":"User already in system"}`)  {
                  resolve(resp);
              }else {
                  reject(resp)
              }
          };

          xhr.onabort = () => reject({reason: "Abort"});
          xhr.onerror = () => reject({reason: "Error network"});;
          xhr.ontimeout = () => reject({reason: "Timeout"});;

          if (method === METHODS.GET || !data) {
              xhr.send();
          } else {
              if (data instanceof FormData) {
                  xhr.setRequestHeader("Content-Type", "multipart/form-data");
                  xhr.send(data);
              } else {
                  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                  xhr.send(JSON.stringify(data));
              }

          }
      });
  }
}

export default HTTPTransport
