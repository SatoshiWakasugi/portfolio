export type Links = {
  [key: string]: string | undefined;
};
export interface Profile {
  contact: string;
  heading: string;
  icon: {
    url: string;
  } & Record<string, unknown>;
  interest: string;
  introduction: string;
  skill: string;
  introText: string;
  catchPhrase: string;
}
