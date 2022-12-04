import { Box, Group, Paper, Stack, Text } from '@mantine/core';
import { getAllPostsData } from '../src/api/posts';
import { MainLayout } from '../src/components/layout/main';

export default function HomePage() {
  const { posts } = getAllPostsData();

  return (
    <MainLayout>
      <Box>
        {' '}
        <Text size="sm" weight={700} mt={5} color="brand.4">
          Welcome to the Crypto Insights, the largest collection of crypto news and insights.
        </Text>
        <Paper p="md" shadow="sm" mt={20} color="white">
          <Stack spacing="md">
            {posts.map((post: any) => (
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
            ))}
          </Stack>
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
