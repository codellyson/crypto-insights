import {
  Anchor,
  AppShell,
  Box,
  Burger,
  Container,
  createStyles,
  Flex,
  Group,
  Header,
  Paper,
  Stack,
  Transition,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NextLink } from '@mantine/next';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../logo';

const HEIGHT = 67;
const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <AppShell
      header={
        <>
          <Header height={HEIGHT} p="sm" className={classes.root} fixed>
            <Container size="md">
              <Group position="apart" align="center" noWrap>
                <Logo />
                <Group className={classes.links}>
                  <Anchor
                    href="/"
                    color={
                      theme.colorScheme === 'dark' ? theme.colors.orange[4] : theme.colors.gray[7]
                    }
                    component={NextLink}
                    size={12}
                  >
                    Home
                  </Anchor>
                  <Anchor
                    href="/privacy-policy"
                    color={
                      theme.colorScheme === 'dark' ? theme.colors.orange[4] : theme.colors.gray[7]
                    }
                    component={NextLink}
                    size={12}
                  >
                    Privacy Policy
                  </Anchor>
                  <ColorSchemeToggle />
                </Group>
                <Flex gap={10} className={classes.burger} align="center">
                  <Burger opened={opened} onClick={toggle} size="sm" />
                  <Box className={classes.burger}>
                    <ColorSchemeToggle />
                  </Box>
                </Flex>
              </Group>
            </Container>
          </Header>
          <Transition transition="slide-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles} p={20}>
                <Stack>
                  <Anchor
                    href="/"
                    color={
                      theme.colorScheme === 'dark' ? theme.colors.orange[4] : theme.colors.gray[7]
                    }
                    component={NextLink}
                    size={12}
                  >
                    Home
                  </Anchor>
                  <Anchor
                    href="/privacy-policy"
                    color={
                      theme.colorScheme === 'dark' ? theme.colors.orange[4] : theme.colors.gray[7]
                    }
                    component={NextLink}
                    size={12}
                  >
                    Privacy Policy
                  </Anchor>
                </Stack>
              </Paper>
            )}
          </Transition>
        </>
      }
    >
      <Container sx={{ fontSize: 14 }} size={800}>
        {children}
      </Container>
    </AppShell>
  );
};
