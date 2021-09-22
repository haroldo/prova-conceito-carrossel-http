 interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

 interface Author {
  name: string;
}

 interface Publisher {
  username: string;
  email: string;
}

 interface Maintainer {
  username: string;
  email: string;
}

 interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  date: Date;
  links: Links;
  author: Author;
  publisher: Publisher;
  maintainers: Array<Maintainer>;
  keywords: string[];
}

 interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}

 interface Score {
  final: number;
  detail: Detail;
}

export interface Result {
  package: Package;
  score: Score;
  searchScore: number;
}

export interface GitModel<t> {
  total: number;
  results: Array<t>;
}
