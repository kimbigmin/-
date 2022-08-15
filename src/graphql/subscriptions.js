/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
