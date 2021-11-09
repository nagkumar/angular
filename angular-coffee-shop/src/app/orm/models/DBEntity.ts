import {v4 as uuidv4} from 'uuid';

export abstract class DBEntity
{
    dbid: number = uuidv4();
}
