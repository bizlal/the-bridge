# Media Evidence Guide

## Overview

The Bridge now supports **evidence-based storytelling** through photos, videos, documents, and screenshots. This transforms the narrative from story to undeniable proof.

## What Was Implemented

### 1. Type System (`lib/types.ts`)
Added new types for media support:
```typescript
export type MediaType = 'image' | 'video' | 'document' | 'screenshot';

export interface MediaItem {
  type: MediaType;
  url: string;
  caption?: string;
  alt?: string;
  thumbnailUrl?: string; // For videos
  timestamp?: number; // When to show during audio (optional, in seconds)
}

export interface SceneData {
  // ... existing fields ...
  media?: MediaItem[];  // Inline media during scene playback
  gallery?: MediaItem[]; // Separate evidence gallery
}
```

### 2. MediaGallery Component (`components/MediaGallery.tsx`)
- Responsive grid layout (1/2/3 columns based on screen size)
- Lightbox viewer with click-to-expand
- Navigation arrows for multiple items
- Video player support with controls
- Accessibility features (ARIA labels, keyboard navigation)
- Smooth hover animations

### 3. ScrollScene Integration (`components/ScrollScene.tsx`)
Automatically displays:
- **Gallery section** - "Evidence" heading with grid of items
- **Inline media** - Single-column media tied to audio timestamps

## How to Add Media to Scenes

### Example 1: Document Evidence (Hamilton Spectator Article)
```typescript
{
  id: 3,
  title: "THE NEWSPAPER",
  // ... audio scripts and text lines ...
  gallery: [
    {
      type: 'document',
      url: '/images/evidence/hamilton-spectator-jailbreak-2011.jpg',
      caption: 'Hamilton Spectator article featuring 14-year-old Bilal Khalid as tech expert (July 2, 2011)',
      alt: 'Hamilton Spectator newspaper article about iPhone jailbreaking'
    }
  ]
}
```

### Example 2: Multiple Screenshots
```typescript
{
  id: 23,
  title: "DAILYRAPFACTS EMPIRE",
  // ... audio scripts and text lines ...
  gallery: [
    {
      type: 'screenshot',
      url: '/images/evidence/dailyrapfacts-instagram.jpg',
      caption: 'DailyRapFacts Instagram - 800M+ reach',
      alt: 'Instagram analytics showing massive reach'
    },
    {
      type: 'screenshot',
      url: '/images/evidence/dailyrapfacts-dm-drake.jpg',
      caption: 'Grammy artists in DMs',
      alt: 'Direct messages from verified Grammy artists'
    },
    {
      type: 'screenshot',
      url: '/images/evidence/forbes-30-under-30.jpg',
      caption: 'Partnership with Forbes 30 Under 30 recipient',
      alt: 'Forbes 30 Under 30 partnership proof'
    }
  ]
}
```

### Example 3: Video Evidence
```typescript
{
  id: 22.5,
  title: "THE LOS ANGELES ESCAPE",
  // ... audio scripts and text lines ...
  gallery: [
    {
      type: 'image',
      url: '/images/evidence/la-rolls-royce.jpg',
      caption: 'Driving Rolls Royces in LA (April 2021)',
      alt: 'Photo with Rolls Royce in Los Angeles'
    },
    {
      type: 'video',
      url: '/videos/evidence/lil-tjay-basketball.mp4',
      thumbnailUrl: '/images/evidence/lil-tjay-thumbnail.jpg',
      caption: 'Playing basketball with Lil Tjay at his house',
      alt: 'Video of basketball game with Lil Tjay'
    }
  ]
}
```

### Example 4: Timestamped Inline Media
```typescript
{
  id: 30,
  title: "THE AMG MERCEDES",
  // ... audio scripts and text lines ...
  media: [
    {
      type: 'image',
      url: '/images/evidence/amg-purchase.jpg',
      caption: 'AMG Mercedes purchase - same pattern since age 14',
      alt: 'Photo of AMG Mercedes',
      timestamp: 15.5 // Show 15.5 seconds into audio
    }
  ]
}
```

## Recommended Scenes for Media Evidence

### High Priority (Undeniable Proof)
1. **Scene 3 - THE NEWSPAPER** ✅ DONE
   - Hamilton Spectator article (July 2, 2011)

2. **Scene 23 - DAILYRAPFACTS EMPIRE**
   - Instagram analytics (800M reach)
   - DMs from Grammy artists (NBA Youngboy, Lil Tjay, etc.)
   - Forbes 30 Under 30 partnership proof

3. **Scene 24 - LIMELIGHT**
   - App Store ranking screenshot (#4 overall)
   - App Store reviews
   - Revenue screenshots

4. **Scene 22.5 - THE LOS ANGELES ESCAPE**
   - Photos with Rolls Royce
   - Photos at Lil Tjay's house
   - Downtown LA hotel receipts
   - Flight tickets (Chicago to LA)

5. **Scene 30 - THE AMG MERCEDES**
   - Photo of AMG
   - Purchase documents
   - Same pattern proof (bluetooth → jailbreaking → AMG)

6. **Scene 32 - AC JUMP START**
   - $25K grant award document
   - AC Jump Start acceptance letter
   - Program statistics (thousands apply, handful selected)

### Medium Priority (Supporting Evidence)
7. **Scene 29-30 - TORONTO PERIOD**
   - Toronto apartment lease ($2100/month)
   - BK DevOps client invoices
   - Income statements ($10K/week proof)

8. **Scene 35 - THE DOWNGRADE**
   - "LeBron" email to Trackem
   - BK DevOps contract termination
   - Comparison: $520K/year side income → $120K/year job

9. **Scene 4 - YOUTUBE CEO**
   - BilalTechHD channel screenshots
   - iPhoneKingKhalid channel screenshots
   - NappyApps on App Store (DuckRun, Crappy Nappy)

## File Organization

Recommended structure:
```
public/
  images/
    evidence/
      hamilton-spectator-jailbreak-2011.jpg
      dailyrapfacts-instagram.jpg
      dailyrapfacts-dm-*.jpg
      forbes-30-under-30.jpg
      limelight-app-store-ranking.jpg
      la-rolls-royce.jpg
      lil-tjay-house.jpg
      amg-mercedes.jpg
      ac-jumpstart-grant.pdf
      toronto-lease.pdf
      bk-devops-invoice-*.pdf
      income-statement-2020.pdf
  videos/
    evidence/
      lil-tjay-basketball.mp4
      app-demo-limelight.mp4
```

## Next Steps

1. **Gather Evidence Files**
   - Hamilton Spectator article scan
   - DailyRapFacts screenshots (Instagram analytics, DMs)
   - Limelight App Store ranking screenshot
   - LA trip photos (Rolls Royce, Lil Tjay)
   - AMG Mercedes photo
   - AC Jump Start grant document
   - Toronto lease + income statements

2. **Place in `/public/images/evidence/`**
   - Create the directory if it doesn't exist
   - Use descriptive filenames

3. **Add to Scene Files**
   - Update scene definitions with `gallery` arrays
   - Add captions explaining each piece of evidence
   - Consider timestamps for inline `media`

4. **Test**
   - Run `npm run dev`
   - Navigate to scenes with evidence
   - Click to open lightbox viewer
   - Test on mobile/tablet/desktop

## Why This Matters

The original problem: **Father doesn't believe you. He thinks you're "capping" (lying).**

The solution: **Evidence-based storytelling makes it undeniable.**

- Hamilton Spectator article = Published proof at age 14
- DailyRapFacts DMs = Grammy artists reaching out to YOU
- App Store #4 ranking = Objective, verifiable success
- $25K grant = Competitive achievement (thousands apply)
- Toronto lease + invoices = $10K/week was REAL

When Papa sees the Hamilton Spectator article from 2011, the DMs from Lil Tjay, the App Store ranking, the grant award... **he can't dismiss it as "waste of time" anymore.**

This is proof. This is undeniable. This is how you earn trust.
