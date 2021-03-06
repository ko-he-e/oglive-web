declare type queryParamsType = string | string[] | undefined

// cms
declare type pageTypes = "home" | "about" | "content" | "contents"

declare type CmsHomeType = {
  id: string;
  title: string;
  body: string;
  liveVolume?: number;
}

declare type CmsAboutType = {
  id: string;
  title: string;
  body: string;
  liveVolume?: number;
}

declare type CmsContentType = {
  id: string;
  title: string;
  body: string;
  liveVolume?: number;
  updatedAt: string;
  createdAt: string;
}

declare type CmsStaffType = {
  id: string;
  name: string;
  nickname: string;
  imageUrlList: string[];
  comment: string;
}

declare type CmsAssetType = {
  url: string;
}

declare type CmsContactType = {
  id: string;
  title: string;
  body: string;
  liveVolume?: number;
}