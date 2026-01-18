// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { MemoryPagination, type MemoryPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MemoryResource extends APIResource {
  /**
   * Creates a new memory with the provided text content. The content is encrypted
   * and queued for embedding.
   *
   * @example
   * ```ts
   * const memory = await client.memory.create({
   *   text: 'I love hiking in the mountains',
   * });
   * ```
   */
  create(body: MemoryCreateParams, options?: RequestOptions): APIPromise<MemoryCreateResponse> {
    return this._client.post('/memory', { body, ...options });
  }

  /**
   * Fetches a specific memory using its unique UUID. Returns 404 if the memory
   * doesn't exist or doesn't belong to the authenticated user.
   *
   * @example
   * ```ts
   * const memory = await client.memory.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MemoryRetrieveResponse> {
    return this._client.get(path`/memory/${id}`, options);
  }

  /**
   * Retrieves a paginated list of all memories for the authenticated user, ordered
   * by creation date (newest first). Supports pagination via query parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memory of client.memory.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MemoriesMemoryPagination, Memory> {
    return this._client.getAPIList('/memory', MemoryPagination<Memory>, { query, ...options });
  }

  /**
   * Permanently deletes a memory and its associated vector embeddings. Returns 404
   * if the memory doesn't exist.
   *
   * @example
   * ```ts
   * const memory = await client.memory.delete(
   *   '550e8400-e29b-41d4-a716-446655440000',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MemoryDeleteResponse> {
    return this._client.delete(path`/memory/${id}`, options);
  }

  /**
   * Performs semantic vector search across all user memories using the provided
   * query text. Returns the most similar memories ranked by similarity score.
   *
   * @example
   * ```ts
   * const response = await client.memory.search({
   *   query: 'outdoor activities',
   * });
   * ```
   */
  search(body: MemorySearchParams, options?: RequestOptions): APIPromise<MemorySearchResponse> {
    return this._client.post('/memory/search', { body, ...options });
  }
}

export type MemoriesMemoryPagination = MemoryPagination<Memory>;

/**
 * A memory object containing encrypted user data with metadata
 */
export interface Memory {
  /**
   * Unique identifier for the memory
   */
  id: string;

  /**
   * The decrypted text content of the memory
   */
  content: string;

  /**
   * ISO 8601 timestamp when the memory was created
   */
  createdAt: string;

  /**
   * Indicates whether the memory has been successfully embedded for vector search
   */
  embedded: boolean;

  /**
   * Optional metadata associated with the memory
   */
  metadata: { [key: string]: unknown } | null;
}

/**
 * Response when a new memory is successfully created
 */
export interface MemoryCreateResponse {
  /**
   * ISO 8601 timestamp of memory creation
   */
  createdAt: string;

  /**
   * Embedding status (always 'processing' for new memories)
   */
  embedding: 'processing';

  /**
   * UUID of the newly created memory
   */
  memoryId: string;

  /**
   * Response status indicator
   */
  status: 'success';
}

/**
 * Response when retrieving a specific memory
 */
export interface MemoryRetrieveResponse {
  /**
   * The memory object
   */
  memory: Memory;

  /**
   * Response status indicator
   */
  status: 'success';
}

/**
 * Response when memory is successfully deleted
 */
export interface MemoryDeleteResponse {
  /**
   * Indicates successful deletion
   */
  deleted: true;

  /**
   * UUID of the deleted memory
   */
  memoryId: string;

  /**
   * Confirmation message
   */
  message: string;

  /**
   * Response status indicator
   */
  status: 'success';
}

/**
 * Search results with matched memories and similarity scores
 */
export interface MemorySearchResponse {
  /**
   * Array of matching memory objects ordered by relevance
   */
  memories: Array<Memory>;

  /**
   * Raw similarity scores and IDs from vector search
   */
  rawMatches: Array<MemorySearchResponse.RawMatch>;

  /**
   * Response status indicator
   */
  status: 'success';
}

export namespace MemorySearchResponse {
  /**
   * A search result match with similarity score from vector search
   */
  export interface RawMatch {
    /**
     * Memory identifier (may include chunk identifier separated by ::)
     */
    id: string;

    /**
     * Similarity score between query and memory (higher is better)
     */
    score: number;

    /**
     * Vector values (typically empty array in responses)
     */
    values: Array<number>;
  }
}

export interface MemoryCreateParams {
  /**
   * The text content to store as a memory
   */
  text: string;
}

export interface MemoryListParams extends MemoryPaginationParams {}

export interface MemorySearchParams {
  /**
   * The search query text to find similar memories
   */
  query: string;

  /**
   * Maximum number of top results to return
   */
  topK?: number;
}

export declare namespace MemoryResource {
  export {
    type Memory as Memory,
    type MemoryCreateResponse as MemoryCreateResponse,
    type MemoryRetrieveResponse as MemoryRetrieveResponse,
    type MemoryDeleteResponse as MemoryDeleteResponse,
    type MemorySearchResponse as MemorySearchResponse,
    type MemoriesMemoryPagination as MemoriesMemoryPagination,
    type MemoryCreateParams as MemoryCreateParams,
    type MemoryListParams as MemoryListParams,
    type MemorySearchParams as MemorySearchParams,
  };
}
