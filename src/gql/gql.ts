/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getSearch($query: String!, $type: SearchType!, $first: Int) {\n  search(query: $query, type: $type, first: $first) {\n    issueCount\n    nodes {\n      ... on PullRequest {\n        number\n        createdAt\n        updatedAt\n        title\n        headRefName\n        url\n        deletions\n        additions\n        isDraft\n        isReadByViewer\n        author {\n          login\n          avatarUrl\n        }\n        repository {\n          name\n        }\n        labels(first: 5) {\n          nodes {\n            name\n            color\n          }\n        }\n        reviews(states: APPROVED, first: 10) {\n          totalCount\n          edges {\n            node {\n              author {\n                login\n              }\n            }\n          }\n        }\n      }\n    }\n    repositoryCount\n  }\n}": types.GetSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSearch($query: String!, $type: SearchType!, $first: Int) {\n  search(query: $query, type: $type, first: $first) {\n    issueCount\n    nodes {\n      ... on PullRequest {\n        number\n        createdAt\n        updatedAt\n        title\n        headRefName\n        url\n        deletions\n        additions\n        isDraft\n        isReadByViewer\n        author {\n          login\n          avatarUrl\n        }\n        repository {\n          name\n        }\n        labels(first: 5) {\n          nodes {\n            name\n            color\n          }\n        }\n        reviews(states: APPROVED, first: 10) {\n          totalCount\n          edges {\n            node {\n              author {\n                login\n              }\n            }\n          }\n        }\n      }\n    }\n    repositoryCount\n  }\n}"): (typeof documents)["query getSearch($query: String!, $type: SearchType!, $first: Int) {\n  search(query: $query, type: $type, first: $first) {\n    issueCount\n    nodes {\n      ... on PullRequest {\n        number\n        createdAt\n        updatedAt\n        title\n        headRefName\n        url\n        deletions\n        additions\n        isDraft\n        isReadByViewer\n        author {\n          login\n          avatarUrl\n        }\n        repository {\n          name\n        }\n        labels(first: 5) {\n          nodes {\n            name\n            color\n          }\n        }\n        reviews(states: APPROVED, first: 10) {\n          totalCount\n          edges {\n            node {\n              author {\n                login\n              }\n            }\n          }\n        }\n      }\n    }\n    repositoryCount\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;