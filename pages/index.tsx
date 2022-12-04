import { Box, Group, Paper, Skeleton, Stack, Text } from '@mantine/core';
import { getAllPostsData } from '../src/api/posts';
import { MainLayout } from '../src/components/layout/main';

export default function HomePage() {
  const { posts, isLoading } = getAllPostsData();
  const postsList = posts?.map((post: any) => (
    <div>
      <Group noWrap position="apart">
        <Text size="sm">
          <a href={`${post.url}`}>{post.title}</a>
        </Text>
        <Text size="xs">({post.url.split('.')[1]})</Text>
      </Group>
      {post.description.length > 1 && (
        <Text size={10} mt={5}>
          {post.description}
        </Text>
      )}
      <Text size={10} mt={5} color="brand.4">
        {post.date}
      </Text>
    </div>
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
          Welcome to the Crypto Insights, the largest collection of crypto news and insights.
        </Text>
        <Paper p="md" shadow="sm" mt={20} color="white">
          <Stack spacing="md">{isLoading ? postsListLoading : postsList}</Stack>
        </Paper>
      </Box>
    </MainLayout>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const axios = require('axios');

//   const options = {
//     method: 'GET',
//     url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
//     headers: {
//       'X-RapidAPI-Key': 'aa606703a0msh9e0fe7d1890e157p132f73jsn589a9f4b2ec5',
//       'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {},
//   };
// };

// // Path: src/components/cards/card-with-bg.tsx
