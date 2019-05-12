import fetch from 'isomorphic-unfetch'

class Api {

  private baseUrl: string = 'http://localhost:3000/api';

  public get(uri) {
    console.log(`Requesting GET: ${uri}`)
    return fetch(this.url(uri)).then(res => res.json())
  }

  public getUsers() {
    return this.get('/users')
  }

  private url(uri) {
    return this.baseUrl + uri
  }
}

export default new Api()
