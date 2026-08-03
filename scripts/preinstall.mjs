#!/usr/bin/env node
// Cross-platform preinstall check (replaces the sh-based script).
import { rmSync, existsSync } from 'fs';

// Remove lock files left by npm or yarn.
for (const file of ['package-lock.json', 'yarn.lock']) {
  if (existsSync(file)) rmSync(file);
}

// Enforce pnpm.
const agent = process.env.npm_config_user_agent ?? '';
if (!agent.startsWith('pnpm/')) {
  console.error('Use pnpm instead of npm or yarn.');
  process.exit(1);
}
