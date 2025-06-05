'use client';

import React from 'react';

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from '@/theme/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}