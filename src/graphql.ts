
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: number;
    name: string;
    age: number;
    weight?: number;
    posts?: Post[];
}

export class Post {
    id: number;
    slug: string;
    content: string;
    tag: string[];
    author: User;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(name: string, age: number, weight?: number): User | Promise<User>;
}
