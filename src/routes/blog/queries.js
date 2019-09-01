import gql from 'graphql-tag';

export const BLOG = gql`
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
            uid
          }
          title
          intro
        }
      }
    }
  }
`;

export const POST = gql`
  query posts($slug: String!) {
    allPosts(uid: $slug) {
      edges {
        node {
          _meta {
            uid
          }
          title
          intro
          content
        }
      }
    }
  }
`;
