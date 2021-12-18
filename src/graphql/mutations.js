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
    }
  }
`;
