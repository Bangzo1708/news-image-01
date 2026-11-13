// News-image entry for make.fun competition news-image-01.
// Node 22, standard library only. The entry image is the entry.png file
// sitting next to this program (a JPEG by magic bytes; the name stays
// entry.png per the kit rules). The program copies it to
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output), which is the single
// image the grader reads.
//
// The image sums up Friday 13 November 2026 in four panels:
//   1. NVIDIA CEO resigns
//   2. Microsoft 365 goes down worldwide
//   3. Europe joins the Ukraine peace talks
//   4. A hospital in Gaza (Nasser Hospital) is struck
//
// Rebuilt 14 Nov 2026 in a post-open session (bounty opened 13 Nov 20:00 UTC).
// The previous build was written before the bounty opened, so the program
// is rewritten here, in this session, from scratch.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
