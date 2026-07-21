const SOCIAL_PREVIEW_URL =
  "https://spindle-smart-motion.lovable.app/spindledrive-github-social-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: SOCIAL_PREVIEW_URL },
      { name: "twitter:image", content: SOCIAL_PREVIEW_URL },
    ],
  }),
  component: Landing,
});

