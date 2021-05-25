/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: string;
    name: string;
    age: number;
    weight?: number;
    posts?: Post[];
}

export interface Post {
    id: string;
    slug: string;
    content: string;
    tag: string;
    author: User;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
}
