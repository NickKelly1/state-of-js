import { Model, DataTypes, HasOneGetAssociationMixin, HasManyGetAssociationsMixin, } from 'sequelize';
import { UserPasswordModel } from '../../circle';
import { AuditableSchema } from '../../common/schemas/auditable.schema';
import { AutoIncrementingId } from '../../common/schemas/auto-incrementing-id.schema';
import { pretendAuditable } from '../../common/schemas/helpers/pretend-auditable.helper';
import { pretendSoftDeleteable } from '../../common/schemas/helpers/pretend-soft-deleteable.helper';
import { ModelInitFn } from '../../common/schemas/interfaces/model-init-fn.interface';
import { SoftDeleteableSchema } from '../../common/schemas/soft-deleteable.schema';
import { OrNull } from '../../common/types/or-null.type';
import { UserAssociation, UserAssociations } from './user.associations';
import { IUserAttributes, IUserCreationAttributes, UserField } from '../user/user.attributes';
import { UserDefinition } from './user.definition';
import { UserId } from './user.id.type';
import { RoleModel } from '../role/role.model';
import { UserRoleModel } from '../user-role/user-role.model';


export class UserModel extends Model<IUserAttributes, IUserCreationAttributes> implements IUserAttributes {
  // fields
  [UserField.id]!: UserId;
  [UserField.name]!: string;
  [UserField.created_at]!: Date;
  [UserField.updated_at]!: Date;
  [UserField.deleted_at]!: OrNull<Date>;


  // acceptable associations
  static associations: UserAssociations;

  // eager loaded associations
  [UserAssociation.password]?: UserPasswordModel;
  [UserAssociation.roles]?: RoleModel[];
  [UserAssociation.userRoles]?: UserRoleModel[];

  // associations
  getPassword!: HasOneGetAssociationMixin<UserPasswordModel>;
  getRoles!: HasManyGetAssociationsMixin<UserPasswordModel>;
  getUserRoles!: HasManyGetAssociationsMixin<UserRoleModel>;
}


export const initUserModel: ModelInitFn = (arg) => {
  const { sequelize } = arg;
  UserModel.init({
    id: AutoIncrementingId,
    name: {
      type: DataTypes.STRING(UserDefinition.name.max),
      unique: true,
      allowNull: false,
    },
    ...pretendAuditable,
    ...pretendSoftDeleteable,
  }, {
    sequelize,
    tableName: 'users',
    ...AuditableSchema,
    ...SoftDeleteableSchema,
  });
}