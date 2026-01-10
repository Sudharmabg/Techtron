export const menuData = [
  {
    id: 'home',
    title: 'Home',
    icon: 'Home',
    path: '/',
    subItems: []
  },
  {
    id: 'user-management',
    title: 'User Management',
    icon: 'Users',
    path: '/users',
    subItems: [
      {
        id: 'role',
        title: 'Role',
        path: '/users/role',
        subItems: [
          { id: 'create-role', title: 'Create Role', path: '/users/role/create' },
          { id: 'manage-roles', title: 'Manage Roles', path: '/users/role/manage' },
          { id: 'role-permissions', title: 'Role Permissions', path: '/users/role/permissions' }
        ]
      },
      {
        id: 'menu',
        title: 'Menu',
        path: '/users/menu',
        subItems: [
          { id: 'create-menu', title: 'Create Menu', path: '/users/menu/create' },
          { id: 'manage-menus', title: 'Manage Menus', path: '/users/menu/manage' },
          { id: 'menu-hierarchy', title: 'Menu Hierarchy', path: '/users/menu/hierarchy' }
        ]
      },
      {
        id: 'access-rights',
        title: 'Access Rights',
        path: '/users/access-rights',
        subItems: [
          { id: 'assign-rights', title: 'Assign Rights', path: '/users/access-rights/assign' },
          { id: 'user-permissions', title: 'User Permissions', path: '/users/access-rights/permissions' },
          { id: 'access-logs', title: 'Access Logs', path: '/users/access-rights/logs' }
        ]
      }
    ]
  },
  {
    id: 'masters',
    title: 'Masters Creation',
    icon: 'Settings',
    path: '/masters',
    subItems: [
      {
        id: 'student-control',
        title: 'Student Control',
        path: '/masters/student-control',
        subItems: [
          { id: 'session-maker', title: 'Session Maker', path: '/masters/student-control/session-maker' },
          { id: 'leave-type-maker', title: 'Leave Type Maker', path: '/masters/student-control/leave-type-maker' },
          { id: 'blood-group-maker', title: 'Blood Group Maker', path: '/masters/student-control/blood-group-maker' },
          { id: 'caste-maker', title: 'Caste Maker', path: '/masters/student-control/caste-maker' },
          { id: 'class-maker', title: 'Class Maker', path: '/masters/student-control/class-maker' },
          { id: 'district-maker', title: 'District Maker', path: '/masters/student-control/district-maker' },
          { id: 'board-maker', title: 'Board Maker', path: '/masters/student-control/board-maker' },
          { id: 'section-maker', title: 'Section Maker', path: '/masters/student-control/section-maker' },
          { id: 'state-maker', title: 'State Maker', path: '/masters/student-control/state-maker' },
          { id: 'stream-maker', title: 'Stream Maker', path: '/masters/student-control/stream-maker' },
          { id: 'subject-maker', title: 'Subject Maker', path: '/masters/student-control/subject-maker' },
          { id: 'teacher-aid', title: 'Teacher Aid', path: '/masters/student-control/teacher-aid' },
          { id: 'lesson-plan', title: 'Lesson Plan', path: '/masters/student-control/lesson-plan' },
          { id: 'class-section-faculty-mapping', title: 'Class Section Faculty Mapping', path: '/masters/student-control/class-section-faculty-mapping' }
        ]
      },
      {
        id: 'academic-control',
        title: 'Academic Control',
        path: '/masters/academic-control',
        subItems: [
          { id: 'faculty-process', title: 'Faculty Process', path: '/masters/academic-control/faculty-process' },
          { id: 'holiday-process', title: 'Holiday Process', path: '/masters/academic-control/holiday-process' },
          { id: 'notice-process', title: 'Notice Process', path: '/masters/academic-control/notice-process' },
          { id: 'period-process', title: 'Period Process', path: '/masters/academic-control/period-process' },
          { id: 'vernacular-process', title: 'Vernacular Process', path: '/masters/academic-control/vernacular-process' },
          { id: 'bank-process', title: 'Bank Process', path: '/masters/academic-control/bank-process' },
          { id: 'designation-process', title: 'Designation Process', path: '/masters/academic-control/designation-process' },
          { id: 'update-school', title: 'Update School', path: '/masters/academic-control/update-school' },
          { id: 'assignment-process', title: 'Assignment Process', path: '/masters/academic-control/assignment-process' },
          { id: 'live-class-process', title: 'Live Class Process', path: '/masters/academic-control/live-class-process' },
          { id: 'house-process', title: 'House Process', path: '/masters/academic-control/house-process' },
          { id: 'subject-group-process', title: 'Subject Group Process', path: '/masters/academic-control/subject-group-process' },
          { id: 'student-diary-process', title: 'Student Diary Process', path: '/masters/academic-control/student-diary-process' },
          { id: 'early-leave-management', title: 'Early Leave Management', path: '/masters/academic-control/early-leave-management' }
        ]
      },
      {
        id: 'exam-control',
        title: 'Exam Control',
        path: '/masters/exam-control',
        subItems: [
          { id: 'exam-group-master', title: 'Exam Group Master', path: '/masters/exam-control/exam-group-master' },
          { id: 'exam-term-process', title: 'Exam/Term Process', path: '/masters/exam-control/exam-term-process' },
          { id: 'grade-maker', title: 'Grade Maker', path: '/masters/exam-control/grade-maker' }
        ]
      },
      {
        id: 'transport-control',
        title: 'Transport Control',
        path: '/masters/transport-control',
        subItems: [
          { id: 'transport-type-process', title: 'Transport Type Process', path: '/masters/transport-control/transport-type-process' },
          { id: 'bus-route-process', title: 'Bus Route Process', path: '/masters/transport-control/bus-route-process' },
          { id: 'route-wise-drop-mapping-process', title: 'Route Wise Drop Mapping Process', path: '/masters/transport-control/route-wise-drop-mapping-process' },
          { id: 'transport-setting-process', title: 'Transport Setting Process', path: '/masters/transport-control/transport-setting-process' }
        ]
      },
      {
        id: 'hostel-control',
        title: 'Hostel Control',
        path: '/masters/hostel-control',
        subItems: [
          { id: 'hostel-room-process', title: 'Hostel Room Process', path: '/masters/hostel-control/hostel-room-process' },
          { id: 'hostel-setting-process', title: 'Hostel Setting Process', path: '/masters/hostel-control/hostel-setting-process' }
        ]
      },
      {
        id: 'fees-control',
        title: 'Fees Control',
        path: '/masters/fees-control',
        subItems: [
          { id: 'fees-category-maker', title: 'Fees Category Maker', path: '/masters/fees-control/fees-category-maker' },
          { id: 'fees-master-maker', title: 'Fees Master Maker', path: '/masters/fees-control/fees-master-maker' },
          { id: 'late-fees-process', title: 'Late Fees Process', path: '/masters/fees-control/late-fees-process' },
          { id: 'miscellaneous-fees-head-process', title: 'Miscellaneous Fees Head Process', path: '/masters/fees-control/miscellaneous-fees-head-process' }
        ]
      }
    ]
  },
  {
    id: 'student-management',
    title: 'Student Management',
    icon: 'GraduationCap',
    path: '/students',
    subItems: [
      {
        id: 'enquiry-management',
        title: 'Enquiry Management',
        path: '/students/enquiry-management',
        subItems: []
      },
      {
        id: 'direct-admission',
        title: 'Direct Admission',
        path: '/students/direct-admission',
        subItems: []
      },
      {
        id: 'online-admission-process',
        title: 'Online Admission Process',
        path: '/students/online-admission-process',
        subItems: []
      },
      {
        id: 'academic-task',
        title: 'Academic Task',
        path: '/students/academic-task',
        subItems: [
          { id: 'admitted-student-list', title: 'Admitted Student List', path: '/students/academic-task/admitted-student-list' },
          { id: 'student-promotion', title: 'Student Promotion', path: '/students/academic-task/student-promotion' }
        ]
      },
      {
        id: 'class-room-management',
        title: 'Class Room Management',
        path: '/students/class-room-management',
        subItems: [
          { id: 'class-type', title: 'Class Type', path: '/students/class-room-management/class-type' },
          { id: 'class-wise-syllabus', title: 'Class Wise Syllabus', path: '/students/class-room-management/class-wise-syllabus' },
          { id: 'class-wise-subject', title: 'Class Wise Subject', path: '/students/class-room-management/class-wise-subject' },
          { id: 'class-wise-fees', title: 'Class Wise Fees', path: '/students/class-room-management/class-wise-fees' },
          { id: 'class-type-board-mapping', title: 'Class Type Board Mapping', path: '/students/class-room-management/class-type-board-mapping' },
          { id: 'class-wise-routine', title: 'Class Wise Routine', path: '/students/class-room-management/class-wise-routine' },
          { id: 'student-wise-subject-assign', title: 'Student Wise Subject Assign', path: '/students/class-room-management/student-wise-subject-assign' },
          { id: 'section-roll-assign', title: 'Section Roll Assign', path: '/students/class-room-management/section-roll-assign' },
          { id: 'class-wise-faculty', title: 'Class Wise Faculty', path: '/students/class-room-management/class-wise-faculty' }
        ]
      },
      {
        id: 'fees-collection',
        title: 'Fees Collection',
        path: '/students/fees-collection',
        subItems: [
          { id: 'admission-fees-collection', title: 'Admission Fees Collection', path: '/students/fees-collection/admission-fees-collection' },
          { id: 'tuition-fees-collection', title: 'Tuition Fees Collection', path: '/students/fees-collection/tuition-fees-collection' },
          { id: 'hostel-fees-collection', title: 'Hostel Fees Collection', path: '/students/fees-collection/hostel-fees-collection' },
          { id: 'transport-fees-collection', title: 'Transport Fees Collection', path: '/students/fees-collection/transport-fees-collection' },
          { id: 'miscellaneous-fees-collection', title: 'Miscellaneous Fees Collection', path: '/students/fees-collection/miscellaneous-fees-collection' }
        ]
      },
      {
        id: 'attendance',
        title: 'Attendance',
        path: '/students/attendance',
        subItems: [
          { id: 'daily-attendance', title: 'Daily Attendance', path: '/students/attendance/daily-attendance' },
          { id: 'exam-attendance', title: 'Exam Attendance', path: '/students/attendance/exam-attendance' }
        ]
      },
      {
        id: 'examination',
        title: 'Examination',
        path: '/students/examination',
        subItems: [
          { id: 'add-mark-entry', title: 'Add Mark Entry', path: '/students/examination/add-mark-entry' },
          { id: 'generate-marksheet', title: 'Generate Marksheet', path: '/students/examination/generate-marksheet' }
        ]
      },
      {
        id: 'certificates',
        title: 'Certificates',
        path: '/students/certificates',
        subItems: [
          { id: 'student-tc', title: 'Student TC', path: '/students/certificates/student-tc' },
          { id: 'student-dropout', title: 'Student Dropout', path: '/students/certificates/student-dropout' },
          { id: 'certificate-wizard', title: 'Certificate Wizard', path: '/students/certificates/certificate-wizard' }
        ]
      }
    ]
  },
  {
    id: 'reports',
    title: 'Reports',
    icon: 'FileText',
    path: '/reports',
    subItems: [
      {
        id: 'student-reports',
        title: 'Student Reports',
        path: '/reports/student-reports',
        subItems: [
          { id: 'student-register-report', title: 'Student Register Report', path: '/reports/student-reports/student-register-report' },
          { id: 'student-strength-report', title: 'Student Strength Report', path: '/reports/student-reports/student-strength-report' },
          { id: 'enquiry-report', title: 'Enquiry Report', path: '/reports/student-reports/enquiry-report' },
          { id: 'promotion-report', title: 'Promotion Report', path: '/reports/student-reports/promotion-report' },
          { id: 'id-card', title: 'ID Card', path: '/reports/student-reports/id-card' }
        ]
      },
      {
        id: 'routine-reports',
        title: 'Routine Reports',
        path: '/reports/routine-reports',
        subItems: [
          { id: 'class-section-wise-routine-report', title: 'Class & Section Wise Routine Report', path: '/reports/routine-reports/class-section-wise-routine-report' },
          { id: 'teacher-wise-routine-report', title: 'Teacher Wise Routine Report', path: '/reports/routine-reports/teacher-wise-routine-report' }
        ]
      },
      {
        id: 'fees-collection-reports',
        title: 'Fees Collection Reports',
        path: '/reports/fees-collection-reports',
        subItems: [
          { id: 'fees-collection-register', title: 'Fees Collection Register', path: '/reports/fees-collection-reports/fees-collection-register' },
          { id: 'class-section-wise-fees-collection', title: 'Class & Section Wise Fees Collection', path: '/reports/fees-collection-reports/class-section-wise-fees-collection' },
          { id: 'class-section-fees-head-wise-fees-collection', title: 'Class Section & Fees Head Wise Fees Collection', path: '/reports/fees-collection-reports/class-section-fees-head-wise-fees-collection' },
          { id: 'date-wise-fees-collection', title: 'Date Wise Fees Collection', path: '/reports/fees-collection-reports/date-wise-fees-collection' },
          { id: 'month-wise-fees-collection', title: 'Month Wise Fees Collection', path: '/reports/fees-collection-reports/month-wise-fees-collection' },
          { id: 'transport-fees-collection-report', title: 'Transport Fees Collection Report', path: '/reports/fees-collection-reports/transport-fees-collection-report' },
          { id: 'hostel-fees-collection-report', title: 'Hostel Fees Collection Report', path: '/reports/fees-collection-reports/hostel-fees-collection-report' }
        ]
      },
      {
        id: 'marks-report',
        title: 'Marks Report',
        path: '/reports/marks-report',
        subItems: []
      },
      {
        id: 'attendance-report',
        title: 'Attendance Report',
        path: '/reports/attendance-report',
        subItems: []
      }
    ]
  }
];