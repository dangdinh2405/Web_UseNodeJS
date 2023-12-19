import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar} from '../../components/styles';
import Logout from '../Logout';
import SideBar from './SideBar';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';

import AddStudent from './studentRelated/AddStudent';
import ShowStudents from './studentRelated/ShowStudents';

import ShowSubjects from './sectionRelated/ShowSections';
import SubjectForm from './sectionRelated/SectionForm';
import ViewSubject from './sectionRelated/ViewSection';

import AddTeacher from './teacherRelated/AddTeacher';
import ChooseClass from './teacherRelated/ChooseTopic';
import ChooseSubject from './teacherRelated/ChooseSection';
import ShowTeachers from './teacherRelated/ShowTeachers';
import TeacherDetails from './teacherRelated/TeacherDetails';

import AddClass from './topicRelated/AddTopic';
import ClassDetails from './topicRelated/TopicDetails';
import ShowClasses from './topicRelated/ShowTopics';
import AccountMenu from '../../components/AccountMenu';

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" sx={{ backgroundColor: '#8AD3B8' }}>
                    <Toolbar sx={{ pr: '24px' }}>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <SideBar />
                            </Box>
                        </Typography>
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<AdminHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Admin/dashboard" element={<AdminHomePage />} />
                        <Route path="/Admin/profile" element={<AdminProfile />} />

                        {/* Subject */}
                        <Route path="/Admin/sections" element={<ShowSubjects />} />
                        <Route path="/Admin/sections/section/:topicID/:sectionID" element={<ViewSubject />} />
                        <Route path="/Admin/sections/choosetopic" element={<ChooseClass situation="Subject" />} />
                        <Route path="/Admin/addsection/:id" element={<SubjectForm />} />
                        <Route path="/Admin/topic/section/:topicID/:sectionID" element={<ViewSubject />} />

                        {/* Class */}
                        <Route path="/Admin/addtopic" element={<AddClass />} />
                        <Route path="/Admin/topics" element={<ShowClasses />} />
                        <Route path="/Admin/topics/topic/:id" element={<ClassDetails />} />
                        <Route path="/Admin/topics/addstudents/:id" element={<AddStudent situation="Class" />} />

                        {/* Student */}
                        <Route path="/Admin/addstudents" element={<AddStudent situation="Student" />} />
                        <Route path="/Admin/students" element={<ShowStudents />} />

                        {/* Teacher */}
                        <Route path="/Admin/teachers" element={<ShowTeachers />} />
                        <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails />} />
                        <Route path="/Admin/teachers/choosetopic" element={<ChooseClass situation="Teacher" />} />
                        <Route path="/Admin/teachers/choosesection/:id" element={<ChooseSubject situation="Norm" />} />
                        <Route path="/Admin/teachers/choosesection/:topicID/:teacherID" element={<ChooseSubject situation="Teacher" />} />
                        <Route path="/Admin/teachers/addteacher/:id" element={<AddTeacher />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default AdminDashboard

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}