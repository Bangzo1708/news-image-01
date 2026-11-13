// News-image entry (Node 22, standard library only): the image is the
// entry.png beside this file (a JPEG by magic bytes, name stays entry.png
// per the rules), and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024x1024 px.
// The image sums up Friday 13 November 2026 in four panels: Nvidia's CEO
// resigns, Microsoft 365 goes down worldwide, Europe joins the Ukraine
// peace talks, and a hospital in Gaza is struck.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
