import { createFileRoute } from '@tanstack/react-router'
import { EmbeddedApp } from '../../destroyable-wrapper.jsx';

export const Route = createFileRoute('/react-bar/$')({
  component: () => <EmbeddedApp />,
})
