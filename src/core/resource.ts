// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Azen } from '../client';

export abstract class APIResource {
  protected _client: Azen;

  constructor(client: Azen) {
    this._client = client;
  }
}
