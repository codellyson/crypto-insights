import { Box, Group, Pagination, Paper, Skeleton, Stack, Text } from '@mantine/core';
import React from 'react';
import { getAllPostsData } from '../src/api/posts';
import { MainLayout } from '../src/components/layout/main';

export default function HomePage() {
  const { posts, isLoading } = getAllPostsData();

  const PER_PAGE = 10;
  const total = posts?.length;
  const pageCount = Math.ceil(total / PER_PAGE);
  const [page, setPage] = React.useState(1);
  const [postsList, setPostsList] = React.useState<any>([]);

  React.useEffect(() => {
    if (posts) {
      const start = (page - 1) * PER_PAGE;
      const end = start + PER_PAGE;
      setPostsList(posts.slice(start, end));
    }
  }, [page, posts]);

  const _postsList = postsList?.map((post: any) => (
    <Paper p="md" shadow="sm" color="white" key={post.url}>
      <Group noWrap position="apart">
        <Text size="sm">
          <a href={`${post.url}`}>{post.title}</a>
        </Text>
        <Text size="xs">({post.url.split('.')[1]})</Text>
      </Group>
      {post.description.length > 1 && (
        <Text size={10} mt={5}>
          {post.description.slice(0, 120).concat('...')}{' '}
          <a href={post.url}>Read more &gt;&gt;&gt;</a>
        </Text>
      )}
      <Text size={10} mt={5} color="brand.4">
        {post.date}
      </Text>
    </Paper>
  ));

  const postsListLoading = [1, 2, 3, 4, 5, 6, 7, 9, 10].map((it) => (
    <Stack spacing={5} key={it}>
      <Group noWrap position="apart">
        <Skeleton height={10} width="100" />
        <Skeleton height={10} width="100" />
      </Group>
      {[1, 2].map((item) => (
        <Skeleton height={10} key={item} width="100" />
      ))}
      <Text size={10} mt={5} color="brand.4">
        <Skeleton height={10} width="100" />
      </Text>
    </Stack>
  ));
  return (
    <MainLayout>
      <Box>
        <Text size="sm" weight={700} mt={5} color="brand.4">
          Welcome to Crypto Insights, the news and information hub for the cryptocurrency market.
          Here you will find a wide variety of articles covering the latest developments in crypto,
          predictions on future price movements and much more.{' '}
        </Text>

        <Stack spacing="md">
          {isLoading ? postsListLoading : _postsList}

          <Pagination
            page={page}
            total={pageCount}
            onChange={(_page: number) => setPage(_page)}
            size="xs"
            position="center"
          />
        </Stack>
      </Box>
    </MainLayout>
  );
}
