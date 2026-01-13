// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MemoryResource extends APIResource {
  /**
   * Stores a memory for the authenticated user and queues it for embedding. If a
   * `dedupKey` is provided and matches an existing memory, the existing one is
   * returned instead.
   *
   * @example
   * ```ts
   * const memory = await client.memory.create({
   *   text: 'User likes cold brew coffee',
   * });
   * ```
   */
  create(body: MemoryCreateParams, options?: RequestOptions): APIPromise<MemoryCreateResponse> {
    return this._client.post('/memory', { body, ...options });
  }

  /**
   * Retrieve a memory by ID
   *
   * @example
   * ```ts
   * const memory = await client.memory.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MemoryRetrieveResponse> {
    return this._client.get(path`/memory/${id}`, options);
  }

  /**
   * List user memories
   *
   * @example
   * ```ts
   * const memories = await client.memory.list();
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemoryListResponse> {
    return this._client.get('/memory', { query, ...options });
  }

  /**
   * Deletes the memory record and its vector embedding. Returns deleted=false if
   * memory does not exist (idempotent behavior).
   *
   * @example
   * ```ts
   * const memory = await client.memory.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MemoryDeleteResponse> {
    return this._client.delete(path`/memory/${id}`, options);
  }

  /**
   * Performs semantic search on user memories using vector embeddings.
   *
   * @example
   * ```ts
   * const response = await client.memory.search({
   *   query: 'What drinks does the user like?',
   * });
   * ```
   */
  search(body: MemorySearchParams, options?: RequestOptions): APIPromise<MemorySearchResponse> {
    return this._client.post('/memory/search', { body, ...options });
  }
}

export interface Memory {
  id: string;

  content: string;

  createdAt: string;

  embedded: boolean;

  metadata?: unknown | null;
}

export interface MemoryCreateResponse {
  duplicated: boolean;

  memoryId: string;

  message: string;

  status: string;
}

export interface MemoryRetrieveResponse {
  memory: Memory | null;

  status: string;

  message?: string;
}

export interface MemoryListResponse {
  memories: Array<Memory>;

  page: number;

  per: number;

  status: string;
}

export interface MemoryDeleteResponse {
  deleted: boolean;

  memoryId: string;

  message: string;

  status: string;
}

export interface MemorySearchResponse {
  memories: Array<Memory>;

  rawMatches: Array<MemorySearchResponse.RawMatch>;

  status: string;
}

export namespace MemorySearchResponse {
  export interface RawMatch {
    id: string;

    score: number;
  }
}

export interface MemoryCreateParams {
  text: string;

  dedupKey?: string | null;
}

export interface MemoryListParams {
  page?: number;

  per?: number;
}

export interface MemorySearchParams {
  query: string;

  topK?: number;
}

export declare namespace MemoryResource {
  export {
    type Memory as Memory,
    type MemoryCreateResponse as MemoryCreateResponse,
    type MemoryRetrieveResponse as MemoryRetrieveResponse,
    type MemoryListResponse as MemoryListResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemorySearchResponse as MemorySearchResponse,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryListParams as MemoryListParams,
    type MemorySearchParams as MemorySearchParams,
  };
}
