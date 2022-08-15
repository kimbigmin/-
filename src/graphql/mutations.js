/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
