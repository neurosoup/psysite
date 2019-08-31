import gql from 'graphql-tag';

export const BLOG = gql`
  query blog {
    allBlog_banners {
      edges {
        node {
          title
          introduction
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
          content
        }
      }
    }
  }
`;
