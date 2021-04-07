import { Model } from '@/models/Model';

export enum NoteType {
  Local = 'LOCAL_NOTE',
  Private = 'PRIVATE_NOTE',
  Collaborative = 'COLLABORATIVE_NOTE',
  Public = 'PUBLIC_NOTE',
}

export class Note extends Model {
  type!: NoteType;

  constructor(props: Note) {
    // TODO add base note logic
    super(props);
  }
}
