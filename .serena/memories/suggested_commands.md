# Suggested Commands

## Development Commands

### Running the Application
```bash
# Start development server (with Turbopack)
npm run dev
# Server runs at http://localhost:3000 (or custom port like :3001)

# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Run ESLint
npm run lint
```

### Audio Generation
```bash
# Generate all scene audio files
npm run generate-audio

# Force regenerate all audio (even if files exist)
npm run generate-audio:force

# Generate audio for specific scene (e.g., scene 5)
npm run generate-audio:scene 5

# Note: Requires ELEVENLABS_API_KEY in .env.local
```

## Git Commands (macOS/Darwin)
```bash
# Standard git workflow
git status
git add .
git commit -m "message"
git push
git pull

# View commit history
git log --oneline -10
```

## File Operations (macOS)
```bash
# List files
ls -la

# Find files
find . -name "*.tsx"

# Search in files
grep -r "pattern" .

# Navigate
cd path/to/directory
pwd
```

## Audio File Management
```bash
# Check audio file metadata (requires ffmpeg)
ffprobe public/audio/scene-1.mp3

# List all generated audio files
ls -lh public/audio/
```

## Environment Setup
- Create `.env.local` with `ELEVENLABS_API_KEY` for audio generation
- Install dependencies: `npm install`
