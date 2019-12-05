import gql from "graphql-tag";

const META = gql`
  fragment Meta on Meta {
    uid
    lastPublicationDate
    tags
  }
`;

const PARTIAL_POST = gql`
  fragment PartialPost on Post {
    featured_image
    title
    intro
  }
`;

const FULL_POST = gql`
  ${META}
  ${PARTIAL_POST}

  fragment FullPost on Post {
    _meta {
      ...Meta
    }
    ...PartialPost
    content
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

export const POSTS = gql`
  ${PARTIAL_POSTS}

  query posts($tags: [String!], $first: Int, $after: String) {
    allPosts(
      sortBy: meta_lastPublicationDate_DESC
      tags_in: $tags
      first: $first
      after: $after
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      ...PartialPosts
    }
  }
`;

export const BANNERS = gql`
  query banners {
    allBlog_banners {
      edges {
        node {
          title
          intro
        }
      }
    }
  }
`;

export const POST_BY_SLUG = gql`
  ${FULL_POST}

  query postBySlug($slug: String!) {
    post(uid: $slug, lang: "fr-fr") {
      ...FullPost
    }
  }
`;
