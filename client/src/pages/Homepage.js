import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box} from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/main.png";
import { LightBlueButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={12}>
                <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to Management Project
                        </StyledTitle>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightBlueButton variant="contained" fullWidth >
                                    Login
                                </LightBlueButton>
                            </StyledLink>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
                </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  background-image: url(${Students});
  background-size: cover;
  background-position: center;
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 5rem;
  color: black;
  font-family: "Manrope";
  font-weight: bold;
  padding-top: 100px;
  padding-left: 100px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
