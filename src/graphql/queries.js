/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
          sex
          age
          school
          managing {
            nextToken
          }
          createdAt
          updatedAt
        }
        name
        school
        grade
        number
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
            studentRecordId
            studentBelongId
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
            studentRecordId
            studentBelongId
          }
          nextToken
        }
        createdAt
        updatedAt
        teacherManagingId
        classTeacherId
      }
      createdAt
      updatedAt
      classPendingId
      classStudentsId
      studentRecordId
      studentBelongId
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          teacher {
            id
            isTeacher
            name
            schoolName
            email
            image
            sex
            age
            school
            createdAt
            updatedAt
          }
          name
          school
          grade
          number
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
          teacherManagingId
          classTeacherId
        }
        createdAt
        updatedAt
        classPendingId
        classStudentsId
        studentRecordId
        studentBelongId
      }
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      isTeacher
      name
      schoolName
      email
      image
      sex
      age
      school
      managing {
        items {
          id
          teacher {
            id
            isTeacher
            name
            schoolName
            email
            image
            sex
            age
            school
            createdAt
            updatedAt
          }
          name
          school
          grade
          number
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
          teacherManagingId
          classTeacherId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isTeacher
        name
        schoolName
        email
        image
        sex
        age
        school
        managing {
          items {
            id
            name
            school
            grade
            number
            endurance
            flexibility
            strength
            speediness
            createdAt
            updatedAt
            teacherManagingId
            classTeacherId
          }
          nextToken
        }
        createdAt
        updatedAt
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
        sex
        age
        school
        managing {
          items {
            id
            name
            school
            grade
            number
            endurance
            flexibility
            strength
            speediness
            createdAt
            updatedAt
            teacherManagingId
            classTeacherId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      school
      grade
      number
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
            number
            endurance
            flexibility
            strength
            speediness
            createdAt
            updatedAt
            teacherManagingId
            classTeacherId
          }
          createdAt
          updatedAt
          classPendingId
          classStudentsId
          studentRecordId
          studentBelongId
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
            number
            endurance
            flexibility
            strength
            speediness
            createdAt
            updatedAt
            teacherManagingId
            classTeacherId
          }
          createdAt
          updatedAt
          classPendingId
          classStudentsId
          studentRecordId
          studentBelongId
        }
        nextToken
      }
      createdAt
      updatedAt
      teacherManagingId
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
          sex
          age
          school
          managing {
            nextToken
          }
          createdAt
          updatedAt
        }
        name
        school
        grade
        number
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
            studentRecordId
            studentBelongId
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
            studentRecordId
            studentBelongId
          }
          nextToken
        }
        createdAt
        updatedAt
        teacherManagingId
        classTeacherId
      }
      nextToken
    }
  }
`;
