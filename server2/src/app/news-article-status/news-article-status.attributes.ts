import { Optional } from "sequelize";
import { IAuditable } from "../../common/interfaces/auditable.interface";
import { created_at } from "../../common/schemas/constants/created_at.const";
import { id } from "../../common/schemas/constants/id.const";
import { updated_at } from "../../common/schemas/constants/updated_at.const";
import { K2K } from "../../common/types/k2k.type";
import { ISoftDeleteable } from "../../common/interfaces/soft-deleteable.interface";
import { UserId } from "../user/user.id.type";
import { deleted_at } from "../../common/schemas/constants/deleted_at.const";
import { NewsArticleStatusId } from "./news-article-status.id.type";

export interface INewsArticleStatusAttributes extends IAuditable {
  id: NewsArticleStatusId;
  name: string;
}

export const NewsArticleStatusField: K2K<INewsArticleStatusAttributes> = {
  id: 'id',
  name: 'name',
  [created_at]: created_at,
  [updated_at]: updated_at,
}

export interface INewsArticleStatusCreationAttributes extends Optional<INewsArticleStatusAttributes,
  | id
  | created_at
  | updated_at
> {}

