import { Injectable } from '@nestjs/common';

export interface Song {
  title: string;
  artist: string;
  [key: string]: any;
}

@Injectable()
export class SongsService {
  //For now we will make use of the local array as our DB but later on we will switch to PostgreSQL
  private readonly songs: Song[] = [];

  //Let's define a new method to return a song
  create(song: Song) {
    //WIP: Save song in the DB
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    //WIP: fetch all songs from the DB
    return [...this.songs];
  }
}
