import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';

export default function About() {
  return (
    <div>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About page
        </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
