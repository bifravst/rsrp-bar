# RSRP Bar [![npm version](https://img.shields.io/npm/v/@bifravst/rsrp-bar.svg)](https://www.npmjs.com/package/@bifravst/rsrp-bar)

[![Test, Build and Release](https://github.com/bifravst/rsrp-bar/actions/workflows/test-build-and-release.yaml/badge.svg)](https://github.com/bifravst/rsrp-bar/actions/workflows/test-build-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![@commitlint/config-conventional](https://img.shields.io/badge/%40commitlint-config--conventional-brightgreen)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

React component to render an RSRP bar or a failover icon in case the reported
value is not valid.

![Demo](./screenshot.png)

## Installation

    npm i --save-dev --save-exact @bifravst/rsrp-bar

## Usage

See [`./src/demo.tsx`](./src/demo.tsx) for an example.

## Demo

    npm start

## Node & NPM

This project requires Node.js `>=24.19.0 <25` and npm `>=12.0.2 <13` (enforced
via `check-node-version` on `npm install` and `npm ci`).

The check is skipped during `npm publish` and `npm pack`, because
`semantic-release` bundles its own npm (`@semantic-release/npm` depends on
`npm@^11.6.2`) and runs the publish with that version rather than the one
installed in CI.

## TypeScript 6 and 7

This repo
[runs TypeScript 6 and 7 side by side](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0),
[so that eslint works](https://github.com/typescript-eslint/typescript-eslint/issues/10940#issuecomment-4922812181).
