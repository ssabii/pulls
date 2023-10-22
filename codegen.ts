import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          'user-agent': 'node.js',
          Authorization: `Bearer ${process.env.VITE_TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/graphql/*.gql'],
  generates: {
    "src/graphql/generated.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        scalars: {
          URI: 'string',
        }
      }
    },
  },
};

export default config;