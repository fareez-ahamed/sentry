import fetch from 'isomorphic-unfetch'
import { IUser } from '../common/interfaces/api';

class Api {

  private baseUrl: string = 'http://localhost:3000/api';

  public get(uri) {
    console.log(`Requesting GET: ${uri}`)
    return fetch(this.url(uri)).then(res => res.json())
  }

  public post(uri, data) {
    return fetch(this.url(uri), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public getUsers() {
    return this.get('/users')
  }

  public createUser(user: IUser) {
    return this.post('/users', user).then(res => res.json())
  }

  private url(uri) {
    return this.baseUrl + uri
  }
}

export default new Api()
