import { Anchor, AppShell, Container, Group, Header, useMantineTheme } from '@mantine/core';
import { NextLink } from '@mantine/next';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../logo';

const HEIGHT = 50;

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      header={
        <Header height={HEIGHT} p="sm">
          <Container size={800}>
            <Group position="apart">
              <Logo />
              <Group>
                <Anchor
                  href="/"
                  color={
                    theme.colorScheme === 'dark' ? theme.colors.orange[4] : theme.colors.gray[7]
                  }
                  component={NextLink}
                  size={14}
                >
                  Home
                </Anchor>
                <Anchor
                  href="/privacy-policy"
                  color={
                    theme.colorScheme === 'dark' ? theme.colors.orange[4] : theme.colors.gray[7]
                  }
                  component={NextLink}
                  size={14}
                >
                  Privacy Policy
                </Anchor>
                <ColorSchemeToggle />
              </Group>
            </Group>
          </Container>
        </Header>
      }
    >
      <Container sx={{ fontSize: 14 }} size={800}>
        {children}
      </Container>
    </AppShell>
  );
};
