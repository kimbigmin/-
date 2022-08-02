/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      isTeacher
      name
      schoolName
      email
      image
      classNum
      sex
      age
      grade
      school
      record {
        id
        endurance
        flexibility
        strength
        speediness
        createdAt
        updatedAt
      }
      belong {
        id
        teacher {
          id
          isTeacher
          name
          schoolName
          email
          image
          classNum
          sex
          age
          grade
          school
          createdAt
          updatedAt
          classPendingId
          classStudentsId
          userBelongId
        }
        name
        school
        grade
        endurance
        flexibility
        strength
        speediness
        pending {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        userManagingId
        classTeacherId
      }
      managing {
        items {
          id
          name
          school
          grade
          endurance
          flexibility
          strength
          speediness
          createdAt
          updatedAt
          userManagingId
          classTeacherId
        }
        nextToken
      }
      createdAt
      updatedAt
      classPendingId
      classStudentsId
      userBelongId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isTeacher
        name
        schoolName
        email
        image
        classNum
        sex
        age
        grade
        school
        record {
          id
          endurance
          flexibility
          strength
          speediness
          createdAt
          updatedAt
        }
        belong {
          id
          name
          school
          grade
          endurance
          flexibility
          strength
          speediness
          createdAt
          updatedAt
          userManagingId
          classTeacherId
        }
        managing {
          nextToken
        }
        createdAt
        updatedAt
        classPendingId
        classStudentsId
        userBelongId
      }
      nextToken
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      endurance
      flexibility
      strength
      speediness
      createdAt
      updatedAt
    }
  }
`;
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        endurance
        flexibility
        strength
        speediness
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      teacher {
        id
        isTeacher
        name
        schoolName
        email
        image
        classNum
        sex
        age
        grade
        school
        record {
          id
          endurance
          flexibility
          strength
          speediness
          createdAt
          updatedAt
        }
        belong {
          id
          name
          school
          grade
          endurance
          flexibility
          strength
          speediness
          createdAt
          updatedAt
          userManagingId
          classTeacherId
        }
        managing {
          nextToken
        }
        createdAt
        updatedAt
        classPendingId
        classStudentsId
        userBelongId
      }
      name
      school
      grade
      endurance
      flexibility
      strength
      speediness
      pending {
        items {
          id
          isTeacher
          name
          schoolName
          email
          image
          classNum
          sex
          age
          grade
          school
          createdAt
          updatedAt
          classPendingId
          classStudentsId
          userBelongId
        }
        nextToken
      }
      students {
        items {
          id
          isTeacher
          name
          schoolName
          email
          image
          classNum
          sex
          age
          grade
          school
          createdAt
          updatedAt
          classPendingId
          classStudentsId
          userBelongId
        }
        nextToken
      }
      createdAt
      updatedAt
      userManagingId
      classTeacherId
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teacher {
          id
          isTeacher
          name
          schoolName
          email
          image
          classNum
          sex
          age
          grade
          school
          createdAt
          updatedAt
          classPendingId
          classStudentsId
          userBelongId
        }
        name
        school
        grade
        endurance
        flexibility
        strength
        speediness
        pending {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
        userManagingId
        classTeacherId
      }
      nextToken
    }
  }
`;
