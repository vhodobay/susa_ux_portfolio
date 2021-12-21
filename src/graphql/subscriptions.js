/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIntroductionText = /* GraphQL */ `
  subscription OnCreateIntroductionText {
    onCreateIntroductionText {
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
export const onUpdateIntroductionText = /* GraphQL */ `
  subscription OnUpdateIntroductionText {
    onUpdateIntroductionText {
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
export const onDeleteIntroductionText = /* GraphQL */ `
  subscription OnDeleteIntroductionText {
    onDeleteIntroductionText {
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
export const onCreateAbout = /* GraphQL */ `
  subscription OnCreateAbout {
    onCreateAbout {
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
export const onUpdateAbout = /* GraphQL */ `
  subscription OnUpdateAbout {
    onUpdateAbout {
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
export const onDeleteAbout = /* GraphQL */ `
  subscription OnDeleteAbout {
    onDeleteAbout {
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
export const onCreateSkillSection = /* GraphQL */ `
  subscription OnCreateSkillSection {
    onCreateSkillSection {
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
export const onUpdateSkillSection = /* GraphQL */ `
  subscription OnUpdateSkillSection {
    onUpdateSkillSection {
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
export const onDeleteSkillSection = /* GraphQL */ `
  subscription OnDeleteSkillSection {
    onDeleteSkillSection {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      text
      createdAt
      updatedAt
      owner
    }
  }
`;
