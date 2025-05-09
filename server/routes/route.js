const router = require('express').Router();

const { adminRegister, adminLogIn, getAdminDetail} = require('../controllers/admin-controller.js');

const { stopicCreate, sTopicList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents } = require('../controllers/topic-controller.js');
const {
    studentRegister,
    studentLogIn,
    getStudents,
    getStudentDetail,
    deleteStudents,
    deleteStudent,
    updateStudent,
    deleteStudentsByClass, } = require('../controllers/student_controller.js');
const { subjectCreate, classSubjects, deleteSubjectsByClass, getSubjectDetail, deleteSubject, freeSubjectList, allSubjects, deleteSubjects } = require('../controllers/section-controller.js');
const { teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeachersByClass, deleteTeacher, updateTeacherSubject, teacherAttendance } = require('../controllers/teacher-controller.js');

// Admin
router.post('/AdminReg', adminRegister);
router.post('/AdminLogin', adminLogIn);
router.get("/Admin/:id", getAdminDetail)
router.post('/StudentReg', studentRegister);
router.post('/StudentLogin', studentLogIn)
router.get("/Students/:id", getStudents)
router.get("/Student/:id", getStudentDetail)
router.delete("/Students/:id", deleteStudents)
router.delete("/StudentsClass/:id", deleteStudentsByClass)
router.delete("/Student/:id", deleteStudent)
router.put("/Student/:id", updateStudent)

// Teacher
router.post('/TeacherReg', teacherRegister);
router.post('/TeacherLogin', teacherLogIn)
router.get("/Teachers/:id", getTeachers)
router.get("/Teacher/:id", getTeacherDetail)
router.delete("/Teachers/:id", deleteTeachers)
router.delete("/TeachersClass/:id", deleteTeachersByClass)
router.delete("/Teacher/:id", deleteTeacher)
router.put("/TeacherSubject", updateTeacherSubject)
router.post('/TeacherAttendance/:id', teacherAttendance)


// Stopic
router.post('/SclassCreate', stopicCreate);
router.get('/SclassList/:id', sTopicList);
router.get("/Sclass/:id", getSclassDetail)
router.get("/Sclass/Students/:id", getSclassStudents)
router.delete("/Sclasses/:id", deleteSclasses)
router.delete("/Sclass/:id", deleteSclass)

// Section
router.post('/SubjectCreate', subjectCreate);
router.get('/AllSubjects/:id', allSubjects);
router.get('/ClassSubjects/:id', classSubjects);
router.get('/FreeSubjectList/:id', freeSubjectList);
router.get("/Subject/:id", getSubjectDetail)
router.delete("/Subject/:id", deleteSubject)
router.delete("/Subjects/:id", deleteSubjects)
router.delete("/SubjectsClass/:id", deleteSubjectsByClass)

router.post('/TopicCreate', stopicCreate)
router.get('/TopicList/:id', sTopicList )


module.exports = router;