interface IMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

interface IOembed {
    provider_url: string;
    description: string;
    title: string;
    url: string;
    type: string;
    author_name: string;
    height: number;
    width: number;
    html: string;
    thumbnail_width: number;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
}

interface ISecureMedia {
    oembed: IOembed;
    type: string;
}

interface ISecureIMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

interface IOembed2 {
    provider_url: string;
    description: string;
    title: string;
    url: string;
    type: string;
    author_name: string;
    height: number;
    width: number;
    html: string;
    thumbnail_width: number;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
}

interface IMedia {
    oembed: IOembed2;
    type: string;
}

interface Data2 {
    domain: string;
    banned_by?: any;
    media_embed: IMediaEmbed | {};
    subreddit: string;
    selftext_html: string | null;
    selftext: string;
    likes?: any;
    user_reports: any[];
    secure_media: ISecureMedia | null;
    link_flair_text: string | null;
    id: string;
    gilded: number;
    secure_media_embed: ISecureIMediaEmbed | {};
    clicked: boolean;
    report_reasons?: any;
    author: string;
    media: IMedia | null;
    score: number;
    approved_by?: any;
    over_18: boolean;
    hidden: boolean;
    thumbnail: string;
    subreddit_id: string;
    edited: any;
    link_flair_css_class: string | null;
    author_flair_css_class?: any;
    downs: number;
    mod_reports: any[];
    saved: boolean;
    is_self: boolean;
    name: string;
    permalink: string;
    stickied: boolean;
    created: number;
    url: string;
    author_flair_text?: any;
    title: string;
    created_utc: number;
    ups: number;
    num_comments: number;
    visited: boolean;
    num_reports?: any;
    distinguished?: any;
}

export interface IRedditTop50DataItem {
    kind: string;
    data: Data2;
}

interface IRedditTop50Data {
    modhash: string;
    children: IRedditTop50DataItem[];
    after: string;
    before?: any;
}

export interface IRedditTop50Root {
    kind: string;
    data: IRedditTop50Data
}
