export interface RootObjects {
  logging_page_id: string;
  show_suggested_profiles: boolean;
  show_follow_dialog: boolean;
  graphql: Graphql;
  toast_content_on_load: null;
}

export interface Graphql {
  user: User;
}

export interface User {
  biography: string;
  blocked_by_viewer: boolean;
  restricted_by_viewer: boolean;
  country_block: boolean;
  external_url: null;
  external_url_linkshimmed: null;
  edge_followed_by: EdgeFollowClass;
  followed_by_viewer: boolean;
  edge_follow: EdgeFollowClass;
  follows_viewer: boolean;
  full_name: string;
  has_ar_effects: boolean;
  has_channel: boolean;
  has_blocked_viewer: boolean;
  highlight_reel_count: number;
  has_requested_viewer: boolean;
  id: string;
  is_business_account: boolean;
  is_joined_recently: boolean;
  business_category_name: string;
  category_id: string;
  overall_category_name: null;
  is_private: boolean;
  is_verified: boolean;
  edge_mutual_followed_by: EdgeMutualFollowedBy;
  profile_pic_url: string;
  profile_pic_url_hd: string;
  requested_by_viewer: boolean;
  username: string;
  connected_fb_page: null;
  edge_felix_combined_post_uploads: PurpleEdge;
  edge_felix_combined_draft_uploads: PurpleEdge;
  edge_felix_video_timeline: PurpleEdge;
  edge_felix_drafts: PurpleEdge;
  edge_felix_pending_post_uploads: PurpleEdge;
  edge_felix_pending_draft_uploads: PurpleEdge;
  edge_owner_to_timeline_media: PurpleEdge;
  edge_saved_media: PurpleEdge;
  edge_media_collections: PurpleEdge;
}

export interface PurpleEdge {
  count: number;
  page_info: PageInfo;
  edges: EdgeFelixCombinedDraftUploadsEdge[];
}

export interface EdgeFelixCombinedDraftUploadsEdge {
  node: PurpleNode;
}

export interface PurpleNode {
  __typename: Typename;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  gating_info: null;
  fact_check_overall_rating: null;
  fact_check_information: null;
  media_preview: null | string;
  owner: Owner;
  is_video: boolean;
  accessibility_caption: null | string;
  edge_media_to_caption: EdgeMediaToCaption;
  edge_media_to_comment: EdgeFollowClass;
  comments_disabled: boolean;
  taken_at_timestamp: number;
  edge_liked_by: EdgeFollowClass;
  edge_media_preview_like: EdgeFollowClass;
  location: Location | null;
  thumbnail_src: string;
  thumbnail_resources: ThumbnailResource[];
  felix_profile_grid_crop?: null;
  encoding_status?: string;
  is_published?: boolean;
  product_type?: string;
  title?: string;
  video_duration?: number;
  video_view_count?: number;
  edge_sidecar_to_children?: EdgeSidecarToChildren;
}

export enum Typename {
  GraphImage = 'GraphImage',
  GraphSidecar = 'GraphSidecar',
  GraphVideo = 'GraphVideo',
}

export interface Dimensions {
  height: number;
  width: number;
}

export interface EdgeFollowClass {
  count: number;
}

export interface EdgeMediaToCaption {
  edges: EdgeMediaToCaptionEdge[];
}

export interface EdgeMediaToCaptionEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  text: string;
}

export interface EdgeSidecarToChildren {
  edges: EdgeSidecarToChildrenEdge[];
}

export interface EdgeSidecarToChildrenEdge {
  node: TentacledNode;
}

export interface TentacledNode {
  __typename: Typename;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  gating_info: null;
  fact_check_overall_rating: null;
  fact_check_information: null;
  media_preview: string;
  owner: Owner;
  is_video: boolean;
  accessibility_caption: string;
}

export interface Owner {
  id: string;
  username: string;
}

export interface Location {
  id: string;
  has_public_page: boolean;
  name: string;
  slug: string;
}

export interface ThumbnailResource {
  src: string;
  config_width: number;
  config_height: number;
}

export interface PageInfo {
  has_next_page: boolean;
  end_cursor: null | string;
}

export interface EdgeMutualFollowedBy {
  count: number;
  edges: any[];
}
