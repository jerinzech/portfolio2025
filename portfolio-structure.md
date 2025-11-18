my-bento-portfolio/
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── bento/
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── BentoItem.tsx
│   │   │   ├── BentoCard.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── tiles/                    # Tile preview components
│   │   │   ├── AboutTile.tsx
│   │   │   ├── ProjectsTile.tsx
│   │   │   ├── StackTile.tsx
│   │   │   ├── PhotosTile.tsx
│   │   │   ├── ContactTile.tsx
│   │   │   ├── ReadingListTile.tsx
│   │   │   ├── ProfileTile.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── modals/                   # 🆕 Modal detail views
│   │   │   ├── Modal.tsx                  # Base modal wrapper
│   │   │   ├── ModalOverlay.tsx           # Backdrop/overlay
│   │   │   ├── ModalContent.tsx           # Content container
│   │   │   ├── AboutModal.tsx             # Detailed about content
│   │   │   ├── ProjectsModal.tsx          # Full project showcase
│   │   │   ├── StackModal.tsx             # Detailed tech stack
│   │   │   ├── PhotosModal.tsx            # Full photo gallery
│   │   │   ├── ReadingListModal.tsx       # Complete reading list
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── StatusIndicator.tsx
│   │   │   ├── SocialLinks.tsx
│   │   │   ├── CloseButton.tsx            # 🆕 Modal close button
│   │   │   └── IconButton.tsx             # 🆕 Expand/collapse icons
│   │   │
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Navigation.tsx
│   │       └── Footer.tsx
│   │
│   ├── hooks/                        # 🆕 Custom React hooks
│   │   ├── useModal.ts                    # Modal state management
│   │   ├── useKeyboardShortcuts.ts        # ESC to close, etc.
│   │   └── useScrollLock.ts               # Prevent body scroll
│   │
│   ├── context/                      # 🆕 Global state
│   │   └── ModalContext.tsx               # Modal provider
│   │
│   ├── config/
│   │   ├── bento-items.ts
│   │   └── modal-config.ts           # 🆕 Modal settings
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── styles/
│       ├── bento-grid.css
│       ├── modal.css                 # 🆕 Modal-specific styles
│       └── themes.css
│
├── types/
│   ├── bento.ts
│   └── modal.ts                      # 🆕 Modal types
│
├── package.json
├── tailwind.config.ts
└── next.config.js
