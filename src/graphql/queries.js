/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIntroductionText = /* GraphQL */ `
  query GetIntroductionText($id: ID!) {
    getIntroductionText(id: $id) {
      id
      text
      quote
      author
      createdAt
      updatedAt
    }
  }
`;
export const listIntroductionTexts = /* GraphQL */ `
  query ListIntroductionTexts(
    $filter: ModelIntroductionTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntroductionTexts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        quote
        author
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
