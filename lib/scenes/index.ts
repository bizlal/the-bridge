import { SceneData } from '../types';
import { act1Scenes } from './act1-invisible-child';
import { act2Scenes } from './act2-split-self';
import { act3Scenes } from './act3-university-chaos';
import { act4Scenes } from './act4-hidden-empire';
import { act5Scenes } from './act5-pattern-revealed';
import { act6Scenes } from './act6-current-reality';
import { act7Scenes } from './act7-bridge-forward';

// Re-export for convenience
export type { SceneData };

/**
 * THE BRIDGE - Complete Narrative Structure
 *
 * 43 scenes organized into 7 acts
 * Each act file contains thematically related scenes
 *
 * ACT 1: THE INVISIBLE CHILD (Scenes 0-5) - Childhood, early struggles
 * ACT 2: THE SPLIT SELF (Scenes 6-12) - ADHD diagnosis, double life
 * ACT 3: UNIVERSITY CHAOS (Scenes 13-19) - University struggles, Aman friendship
 * ACT 4: THE HIDDEN EMPIRE (Scenes 20-27) - Business achievements (Trackem, DailyRapFacts, Limelight)
 * ACT 5: THE PATTERN REVEALED (Scenes 28-34) - Pattern understanding, firing
 * ACT 6: CURRENT REALITY (Scenes 35-39) - Arrow, legal/health, current struggle
 * ACT 7: THE BRIDGE FORWARD (Scenes 40-42) - Hope and path forward
 */

// Combine all acts in order
export const scenes: SceneData[] = [
  ...act1Scenes,  // Scenes 0-5
  ...act2Scenes,  // Scenes 6-12
  ...act3Scenes,  // Scenes 13-19
  ...act4Scenes,  // Scenes 20-27 ✓ Complete with TRUE business achievements
  ...act5Scenes,  // Scenes 28-34 (TODO: Rewrite with pattern)
  ...act6Scenes,  // Scenes 35-39 (TODO: Rewrite with current reality)
  ...act7Scenes,  // Scenes 40-42 (TODO: Rewrite with hope)
];

// Validate we have all 43 scenes
if (scenes.length !== 43) {
  console.warn(`Expected 43 scenes, but got ${scenes.length}`);
}

// Validate scene IDs are sequential
scenes.forEach((scene, index) => {
  if (scene.id !== index) {
    console.error(`Scene ID mismatch at index ${index}: expected ${index}, got ${scene.id}`);
  }
});
