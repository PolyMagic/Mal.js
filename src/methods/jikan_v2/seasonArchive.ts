import { joinUrl } from "./url";
import baseUrl from "./jikanApi";

class SeasonArchive {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${baseUrl}/season/archive`;
  }
  jikanGet(url: string) {
    console.log(url);
  }
  info() {
    return this.jikanGet(this.baseUrl);
  }
}

function seasonArchive(): Promise<any> {
  return new Promise(resolve => {
    resolve(new SeasonArchive().info());
  });
}

seasonArchive.debug = (): string => {
  let s = new SeasonArchive();
  // Return url instead of calling jikan api
  s.jikanGet = s => s;
  // @ts-ignore
  return s.info();
};

export default seasonArchive;
