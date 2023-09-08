import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema:[
    {
      'https://api.github.com/graphql': {
        headers: {
          'user-agent': 'node.js',
          Authorization: `Bearer ${import.meta.env.BASE_URL}`,
        },
      },
    },
  ],
  documents: ['src/**/*.(tsx|ts)'],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ['typescript'],
    },
  },
};

export default config;