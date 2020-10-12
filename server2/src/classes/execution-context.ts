import { exec } from "child_process";
import { Request, Response } from "express";
import { HttpContext } from '@src/classes/http.context';
import { OrUndefined } from '@src/types/or-undefined.type';
import { WsCtx } from "@src/classes/ws.context";


interface IMatchFnArg<T> {
  http?: (ctx: HttpContext) => T;
  ws?: (ctx: WsCtx) => T;
}

export class ExecutionContext {
  protected _http?: HttpContext;
  protected _ws?: WsCtx;

  constructor(readonly arg: {
    http?: HttpContext;
    ws?: WsCtx;
  }) {
    const { http, ws } = arg;
    this._http = http;
    this._ws = ws;
  }

  setHttp(http: HttpContext): this {
    this._http = http;
    return this;
  }

  setWs(ws: WsCtx): this {
    this._ws = ws;
    return this;
  }

  http(): OrUndefined<HttpContext> {
    return undefined!;
  }

  ws(): OrUndefined<HttpContext> {
    return undefined!;
  }

  match<T>(arg: IMatchFnArg<T>): OrUndefined<T> {
    if (this._http && arg.http) return arg.http(this._http);
    if (this._ws && arg.ws) return arg.ws(this._ws);
    return undefined;
  }
}
