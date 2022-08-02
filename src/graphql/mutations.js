/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
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
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
