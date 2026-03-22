import { createFileRoute } from '@tanstack/react-router'
import { EmbeddedApp } from '../destroyable-wrapper.jsx';

export const Route = createFileRoute('/react-foo')({
  component: Foo,
})

function Foo() {
  return <div>
    foo in react

  <EmbeddedApp />
    </div>
}
