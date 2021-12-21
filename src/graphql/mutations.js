/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIntroductionText = /* GraphQL */ `
  mutation CreateIntroductionText(
    $input: CreateIntroductionTextInput!
    $condition: ModelIntroductionTextConditionInput
  ) {
    createIntroductionText(input: $input, condition: $condition) {
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
export const updateIntroductionText = /* GraphQL */ `
  mutation UpdateIntroductionText(
    $input: UpdateIntroductionTextInput!
    $condition: ModelIntroductionTextConditionInput
  ) {
    updateIntroductionText(input: $input, condition: $condition) {
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
export const deleteIntroductionText = /* GraphQL */ `
  mutation DeleteIntroductionText(
    $input: DeleteIntroductionTextInput!
    $condition: ModelIntroductionTextConditionInput
  ) {
    deleteIntroductionText(input: $input, condition: $condition) {
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
export const createAbout = /* GraphQL */ `
  mutation CreateAbout(
    $input: CreateAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    createAbout(input: $input, condition: $condition) {
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
export const updateAbout = /* GraphQL */ `
  mutation UpdateAbout(
    $input: UpdateAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    updateAbout(input: $input, condition: $condition) {
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
export const deleteAbout = /* GraphQL */ `
  mutation DeleteAbout(
    $input: DeleteAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    deleteAbout(input: $input, condition: $condition) {
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
export const createSkillSection = /* GraphQL */ `
  mutation CreateSkillSection(
    $input: CreateSkillSectionInput!
    $condition: ModelskillSectionConditionInput
  ) {
    createSkillSection(input: $input, condition: $condition) {
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
export const updateSkillSection = /* GraphQL */ `
  mutation UpdateSkillSection(
    $input: UpdateSkillSectionInput!
    $condition: ModelskillSectionConditionInput
  ) {
    updateSkillSection(input: $input, condition: $condition) {
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
export const deleteSkillSection = /* GraphQL */ `
  mutation DeleteSkillSection(
    $input: DeleteSkillSectionInput!
    $condition: ModelskillSectionConditionInput
  ) {
    deleteSkillSection(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
