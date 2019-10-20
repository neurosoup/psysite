import gql from 'graphql-tag';

const META = gql`
  fragment Meta on Meta {
    uid
    lastPublicationDate
    tags
  }
`;

const FULL_POST = gql`
  fragment FullPost on Post {
    content
  }
`;

const PARTIAL_POST = gql`
  fragment PartialPost on Post {
    featured_image
    title
    intro
  }
`;

const FULL_POSTS = gql`
  ${META}
  ${FULL_POST}
  ${PARTIAL_POST}

  fragment FullPosts on PostConnectionConnection {
    edges {
      node {
        _meta {
          ...Meta
        }
        ...PartialPost
        ...FullPost
      }
    }
  }
`;

const PARTIAL_POSTS = gql`
  ${META}
  ${PARTIAL_POST}

  fragment PartialPosts on PostConnectionConnection {
    edges {
      node {
        _meta {
          ...Meta
        }
        ...PartialPost
      }
    }
  }
`;

const BANNERS = gql`
  fragment Banners on Blog_bannerConnectionConnection {
    edges {
      node {
        title
        intro
      }
    }
  }
`;

export const BLOG = gql`
  ${PARTIAL_POSTS}
  ${BANNERS}

  query blog($tags: [String!]) {
    allBlog_banners {
      ...Banners
    }
    allPosts(tags_in: $tags) {
      ...PartialPosts
    }
  }
`;

export const POST_BY_SLUG = gql`
  ${FULL_POSTS}

  query postBySlug($slug: String!) {
    allPosts(uid: $slug) {
      ...FullPosts
    }
  }
`;
