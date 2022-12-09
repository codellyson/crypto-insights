import { ActionIcon, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="sm"
        sx={(_theme) => ({
          backgroundColor: _theme.colorScheme === 'dark' ? _theme.colors.dark[6] : 'transparent',
          color: _theme.colorScheme === 'dark' ? _theme.colors.yellow[4] : _theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun
            size={20}
            stroke={1.5}
            color={theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6]}
          />
        ) : (
          <IconMoonStars
            size={20}
            stroke={1.5}
            color={theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6]}
          />
        )}
      </ActionIcon>
    </Group>
  );
}
