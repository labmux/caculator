import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage | null = null;

  constructor(private ionicStorage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.ionicStorage.create();
  }

  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }

  async get(key: string) {
    const value = await this.ionicStorage.get(key);
    return value;
  }

  async remove(key: string) {
    const value = await this.ionicStorage.remove(key);
    return value;
  }

  async getAll() {
    const value = await this.ionicStorage.keys();
    return value;
  }

  async length() {
    const value = await this.ionicStorage.length();
    return value;
  }


}

