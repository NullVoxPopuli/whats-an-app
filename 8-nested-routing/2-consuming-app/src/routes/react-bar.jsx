import { createFileRoute } from '@tanstack/react-router'
import { EmbeddedApp } from '../destroyable-wrapper.jsx';

export const Route = createFileRoute('/react-bar')({
  component: Bar,
})

function Bar() {
  return <>bar in react

  <EmbeddedApp />
    </>
}
