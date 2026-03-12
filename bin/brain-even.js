#!/usr/bin/env node
import sayGreeting from '../src/cli.js';
import sayEven from '../src/games/even.js';

const userName = sayGreeting();
sayEven(userName);
