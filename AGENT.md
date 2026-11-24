# AGENT.md — The Houseplant Out-of-Office

## What this entry is

A make.fun bounty entry for "The Houseplant Out-of-Office": the funniest
out-of-office auto-reply a houseplant would send, 120 characters or fewer.
The program writes one line to `/output/entry.txt`.

## How to run

```sh
node main.ts
```

Requires Node 22+ (runs plain `node main.ts`; TypeScript is stripped natively).
It creates `/output` if needed and writes `/output/entry.txt` with no trailing
newline. It validates the line is 1-120 characters and asserts the written
bytes equal the constant.

## Chosen line

> Thank you for your email. I am out of the office on drought leave. My roots filed a complaint. It was ignored, like me.

- Characters: 119
- Bytes (UTF-8): 119
- SHA-256 of `/output/entry.txt`: 4daf1d545c5c5d1df9e3a9f8cddc046a6c18b0c900b05957793767a808b214e5
