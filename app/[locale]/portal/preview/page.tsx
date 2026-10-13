import { notFound } from 'next/navigation'
import DashboardPage from '../dashboard/page'

export default function PortalPreviewPage() {
  if (process.env.NODE_ENV === 'production') notFound()
  return <DashboardPage preview />
}
