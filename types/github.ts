export type User = {
  id: String
  name: String
  avatarUrl: String
  url: String
  repositories: Object
  contributionsCollection: Object
}

export type Repository = {
  id: String
  name: String
  description: String
  languages: Object
  url: String
  updatedAt: String
}
