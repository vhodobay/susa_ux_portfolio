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
      owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getAbout = /* GraphQL */ `
  query GetAbout($id: ID!) {
    getAbout(id: $id) {
      id
      text1
      text2
      text3
      skillSections {
        items {
          id
          title
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAbouts = /* GraphQL */ `
  query ListAbouts(
    $filter: ModelAboutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text1
        text2
        text3
        skillSections {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSkillSection = /* GraphQL */ `
  query GetSkillSection($id: ID!) {
    getSkillSection(id: $id) {
      id
      title
      items {
        items {
          id
          text
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSkillSections = /* GraphQL */ `
  query ListSkillSections(
    $filter: ModelskillSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        items {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
