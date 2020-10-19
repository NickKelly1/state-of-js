import { UserModel } from "../../circle";
import { IRequestContext } from "../../common/interfaces/request-context.interface";
import { Permission } from "../permission/permission.const";

export class UserPolicy {
  constructor(
    protected readonly ctx: IRequestContext,
  ) {
    //
  }

  canFindMany(arg?: {
    //
  }): boolean {
    return this.ctx.auth.hasAnyPermissions([Permission.ShowUser]);
  }

  canFindOne(arg: {
    model: UserModel;
  }): boolean {
    const { model } = arg;
    return this.ctx.auth.hasAnyPermissions([Permission.ShowUser]);
  }

  canCreate(arg?: {
    //
  }): boolean {
    return this.ctx.auth.hasAnyPermissions([Permission.CreateUser]);
  }

  canUpdate(arg: {
    model: UserModel;
  }): boolean {
    const { model } = arg;
    return this.ctx.auth.hasAnyPermissions([Permission.CreateUser]);
  }

  canDelete(arg: {
    model: UserModel;
  }): boolean {
    const { model } = arg;
    return this.ctx.auth.hasAnyPermissions([Permission.CreateUser]);
  }
}