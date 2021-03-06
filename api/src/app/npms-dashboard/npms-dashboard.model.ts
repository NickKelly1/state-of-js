import {
  Model,
  DataTypes,
} from 'sequelize';
import { AuditableSchema } from '../../common/schemas/auditable.schema';
import { AutoIncrementingId } from '../../common/schemas/auto-incrementing-id.schema';
import { pretendAuditable } from '../../common/schemas/helpers/pretend-auditable.helper';
import { ModelInitFn } from '../../common/schemas/interfaces/model-init-fn.interface';
import { NpmsDashboardAssociation, NpmsDashboardAssociations } from './npms-dashboard.associations';
import { NpmsDashboardId } from './npms-dashboard.id.type';
import { pretendSoftDeleteable } from '../../common/schemas/helpers/pretend-soft-deleteable.helper';
import { NpmsDashboardDefinition } from './npms-dashboard.definition';
import { SoftDeleteableSchema } from '../../common/schemas/soft-deleteable.schema';
import { INpmsDashboardAttributes, INpmsDashboardCreationAttributes, NpmsDashboardField } from './npms-dashboard.attributes';
import { NpmsDashboardItemModel, UserModel } from '../../circle';
import { UserId } from '../user/user.id.type';
import { NpmsDashboardStatus } from '../npms-dashboard-status/npms-dashboard-status.const';
import { NpmsDashboardStatusField } from '../npms-dashboard-status/npms-dashboard-status.attributes';
import { NpmsDashboardStatusModel } from '../npms-dashboard-status/npms-dashboard-status.model';
import { OrNull } from '../../common/types/or-null.type';
import { RequestAuth } from '../../common/classes/request-auth';
import { BaseContext } from '../../common/context/base.context';


export class NpmsDashboardModel extends Model<INpmsDashboardAttributes, INpmsDashboardCreationAttributes> implements INpmsDashboardAttributes {
  // fields
  [NpmsDashboardField.id]!: NpmsDashboardId;
  [NpmsDashboardField.name]!: string;
  [NpmsDashboardField.order]!: number;
  [NpmsDashboardField.aid]!: OrNull<string>;
  [NpmsDashboardField.owner_id]!: OrNull<UserId>;
  [NpmsDashboardField.status_id]!: UserId;

  [NpmsDashboardField.created_at]!: Date;
  [NpmsDashboardField.updated_at]!: Date;
  [NpmsDashboardField.deleted_at]!: Date;

  // acceptable associations
  static associations: NpmsDashboardAssociations;

  // eager loaded associations
  [NpmsDashboardAssociation.owner]?: OrNull<UserModel>;
  [NpmsDashboardAssociation.items]?: NpmsDashboardItemModel[];
  [NpmsDashboardAssociation.npmsPackages]?: NpmsDashboardModel[];
  [NpmsDashboardAssociation.status]?: NpmsDashboardStatusModel;

  // associations
  //

  // helpers
  isDraft(): boolean { return this[NpmsDashboardField.status_id] === NpmsDashboardStatus.Draft; }
  isRejected(): boolean { return this[NpmsDashboardField.status_id] === NpmsDashboardStatus.Rejected; }
  isSubmitted(): boolean { return this[NpmsDashboardField.status_id] === NpmsDashboardStatus.Submitted; }
  isPublished(): boolean { return this[NpmsDashboardField.status_id] === NpmsDashboardStatus.Published; }
  isUnpublished(): boolean { return this[NpmsDashboardField.status_id] === NpmsDashboardStatus.Unpublished; }

  /** Is the NpmsDashboardModel Submittable? */
  isSubmittable(): boolean { return this.isDraft() || this.isRejected() || this.isUnpublished(); }

  /** Is the NpmsDashboardModel Rejectable? */
  isRejectable(): boolean { return this.isSubmitted() || this.isPublished() || this.isUnpublished(); }

  /** Is the NpmsDashboardModel Publishable? */
  isPublishable(): boolean { return this.isDraft() || this.isRejected() || this.isSubmitted() || this.isUnpublished(); }

  /** Is the NpmsDashboardModel Unpublishable? */
  isUnpublishable(): boolean { return this.isPublished(); }


  /**
   * Is the model owned by the authentication?
   *
   * @param auth
   */
  isOwnedBy(auth: RequestAuth): boolean {
    return auth.isMeById(this.owner_id) || auth.isMeByAId(this.aid);
  }

  /**
   * Does the Requester own this Model?
   *
   * @param ctx
   */
  isOwnedByCtx(ctx: BaseContext): boolean {
    return this.isOwnedBy(ctx.auth);
  }
}


export const initNpmsDashboardModel: ModelInitFn = (arg) => {
  const { sequelize, env } = arg;
  NpmsDashboardModel.init({
    id: AutoIncrementingId,
    name: { type: DataTypes.STRING(NpmsDashboardDefinition.name.max), allowNull: false, },
    order: { type: DataTypes.INTEGER, allowNull: false, },
    owner_id: { type: DataTypes.INTEGER, references: { model: UserModel as typeof Model, key: NpmsDashboardField.id }, allowNull: true, },
    aid: { type: DataTypes.STRING(255), allowNull: true },
    status_id: { type: DataTypes.INTEGER, references: { model: NpmsDashboardStatusModel as typeof Model, key: NpmsDashboardStatusField.id }, allowNull: false, },
    ...pretendAuditable,
    ...pretendSoftDeleteable,
  }, {
    sequelize,
    tableName: 'npms_dashboards',
    ...AuditableSchema,
    ...SoftDeleteableSchema,
  });
}
