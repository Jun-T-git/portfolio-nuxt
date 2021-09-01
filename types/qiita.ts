export type Post = {
  body: String
  coediting: Boolean
  comments_count: Number
  created_at: String
  group: Object
  id: String
  likes_count: Number
  page_views_count: Number
  private: Boolean
  reactions_count: Number
  rendered_body: String
  tags: Array<Object>
  team_membership: Object
  title: String
  updated_at: String
  url: String
  user: Object
}

export type Tag = {
  name: String
  versions: Array<String>
}
