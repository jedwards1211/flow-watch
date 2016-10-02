# flow-watch

A simple file watcher that clears the console and runs flow on each change.  Currently tested on OS X -- I don't know
if it works on Linux or Windows.  Works with `flow` on your path or `flow-bin` installed as a peer dependency.

## Usage

```
npm install --save-dev flow-watch
```

Add a script to your `package.json`:

```json
{
  "scripts": {
    "flow:watch": "flow-watch"
  }
}
```

## Configuration

`flow-watch` uses [`nodemon`](https://github.com/remy/nodemon) and accepts any command-line options that `nodemon` does.
If you provide no arguments, it uses the following defaults:
```
--ignore node_modules/ --watch *.js --watch .flowconfig
```
