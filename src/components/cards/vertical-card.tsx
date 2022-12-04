import { Avatar, Card, createStyles, Group, Image, Text } from '@mantine/core';

interface VerticalCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.xs,
  },
}));
export const VerticalCard = ({ image, category, title, date, author }: VerticalCardProps) => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} height={100} width={100} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} size="xs" mb="xs" lineClamp={2}>
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={author.avatar} />
              <Text size="xs">{author.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
};
