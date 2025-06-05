'use client';

import React from 'react';

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Add as AddIcon, Home as HomeIcon } from '@mui/icons-material';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Welcome to Next.js + MUI
          </Typography>
          
          <Typography variant="h6" color="text.secondary" align="center" sx={{ maxWidth: 600 }}>
            This is a Next.js app with Material-UI, TypeScript, and Tailwind CSS configured and ready to use.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={() => alert('Hello from MUI!')}
            >
              Get Started
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => alert('Button clicked!')}
            >
              Add Item
            </Button>
          </Stack>

          <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
            <Typography variant="body1" align="center">
              🎉 Material-UI is successfully integrated!
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
              You can now use MUI components alongside Tailwind CSS classes.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
