import { Collection as C } from 'collect.js';
import axios from 'axios';
import queryString from 'query-string';
import { Model } from '@/models/Model';

const TEMP_URL = 'https://jsonplaceholder.typicode.com';

export interface FetchProps {
  first?: number;
}

export abstract class Collection<T = Model> extends C<T> {
  // @ts-ignore
  items: T[];

  // @ts-ignore
  fetchPath = TEMP_URL + '/todos'; // TODO temporary, make abstract and universal

  protected $http = axios;

  public one(id: string, props?: FetchProps | T | object): Promise<T> {
    const url = this.prepareUrl(`${this.fetchPath}/${id}`, props);
    return this.$http.get(url);
  }

  public async many(props?: FetchProps | T | object): Promise<T[]> {
    const url = this.prepareUrl(this.fetchPath, props);
    this.items = await this.$http.get(url).then(r => r.data);
    return this.items;
  }

  private prepareUrl(url: string, props?: FetchProps | T | object) {
    if (props) {
      return url.concat('?' + queryString.stringify(props));
    }

    return url;
  }
}
