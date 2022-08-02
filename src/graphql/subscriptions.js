/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
