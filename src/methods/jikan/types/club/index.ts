import { Common } from "../";

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Club/Club.php */
export interface ClubInfo {
  mal_id: number;
  url: string;
  image_url: string;

  title: string;
  members_count: number;
  pictures_count: number;

  category: string;
  created: Date;
  type: string;

  staff: Common.MalUrl[];
  anime_relations: Common.MalUrl[];
  manga_relations: Common.MalUrl[];
  character_relations: Common.MalUrl[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: ? */
export interface Members {
  members: UserProfile[];

  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
}

/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Club/UserProfile.php */
export interface UserProfile {
  username: string;
  url: string;
  image_url: string;
}
