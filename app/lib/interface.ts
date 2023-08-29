export interface Post {
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  _id: string;
  body: any;
  imagesGallery: [];
  linkToGit: string;
  linkToLive: string;
}
