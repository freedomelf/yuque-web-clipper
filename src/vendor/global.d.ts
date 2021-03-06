declare module '*.scss';
declare module '*.png';
declare module 'readability';
declare module 'turndown' {
  let TurndownService: any;
  export default TurndownService;
}

type Omit<T, K extends keyof T> = Pick<
  T,
  ({ [P in keyof T]: P } &
    { [P in K]: never } & { [x: string]: never })[keyof T]
>;

type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

type Unpack<T> = T extends Promise<infer U> ? U : T;
// eslint-disable-next-line no-unused-vars
type CallResult<T extends (...args: any[]) => any> = Unpack<ReturnType<T>>;

/// <reference path="../../node_modules/@types/chrome/index.d.ts"/>
