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

export const BLOG = gql`
  ${META}
  ${PARTIAL_POST}

  query blog {
    allBlog_banners {
      edges {
        node {
          title
          intro
        }
      }
    }
    allPosts {
      edges {
        node {
          _meta {
            ...Meta
          }
          ...PartialPost
        }
      }
    }
  }
`;

export const POST = gql`
  ${META}
  ${PARTIAL_POST}
  ${FULL_POST}

  query posts($slug: String!) {
    allPosts(uid: $slug) {
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
  }
`;
