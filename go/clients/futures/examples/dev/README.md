# Development tools (not public SDK)

> **Not part of the MEXC Futures SDK.** These scripts are for local QA and endpoint exploration only.

Interactive REST and WebSocket runners use `internal/actionrunner`, which is not importable outside this module tree.

## Go

```bash
# Edit target in rest_runner.go, then:
go run ./clients/futures/examples/dev/rest_runner.go
go run ./clients/futures/examples/dev/ws_runner.go
```

Requires `MEXC_API_KEY` / `MEXC_API_SECRET` in environment or `.env`.

## Node

```bash
npm run example:rest-runner --prefix clients/futures
npm run example:ws-runner --prefix clients/futures
```

For integration, use the minimal examples under `examples/rest/` and `examples/ws/`.
