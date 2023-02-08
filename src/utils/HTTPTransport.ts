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

interface IOptions {
  headers?: {
    [key: string]: string
  },
  method?: string,
  data?:{
    [key: string]: string
  },
  timeout?: number
}

class HTTPTransport {
  get = (url: string, options: IOptions = {}) => {
    return this.request(url, {...options, method: METHODS.GET}, options.timeout)
  }
  post = (url: string, options: IOptions = {}) => {
  return this.request(url, {...options, method: METHODS.POST}, options.timeout)
  }
  put = (url: string, options: IOptions = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout)
  }
  delete = (url: string, options: IOptions = {}) => { 
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout)
  }

  request = (url: string, options: IOptions = {}, timeout = 5000) => {
    const {headers = {}, method, data} = options

    return new Promise(function(resolve, reject) {
      if (!method) {
        reject("No method")
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method,isGet && !!data? `${url}${queryStringify(data)}`: url,)

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function() {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else {
        xhr.send(data.toString())
      }
    });
  };
}
