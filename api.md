# Memory

Types:

- <code><a href="./src/resources/memory.ts">Memory</a></code>
- <code><a href="./src/resources/memory.ts">MemoryCreateResponse</a></code>
- <code><a href="./src/resources/memory.ts">MemoryRetrieveResponse</a></code>
- <code><a href="./src/resources/memory.ts">MemoryDeleteResponse</a></code>
- <code><a href="./src/resources/memory.ts">MemorySearchResponse</a></code>

Methods:

- <code title="post /memory">client.memory.<a href="./src/resources/memory.ts">create</a>({ ...params }) -> MemoryCreateResponse</code>
- <code title="get /memory/{id}">client.memory.<a href="./src/resources/memory.ts">retrieve</a>(id) -> MemoryRetrieveResponse</code>
- <code title="get /memory">client.memory.<a href="./src/resources/memory.ts">list</a>({ ...params }) -> MemoriesMemoryPagination</code>
- <code title="delete /memory/{id}">client.memory.<a href="./src/resources/memory.ts">delete</a>(id) -> MemoryDeleteResponse</code>
- <code title="post /memory/search">client.memory.<a href="./src/resources/memory.ts">search</a>({ ...params }) -> MemorySearchResponse</code>
