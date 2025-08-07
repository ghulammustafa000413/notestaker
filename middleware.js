import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/pages/ai-youtube',
  '/pages/presentation',
  '/pages/ai-pdf',
  '/pages/study',
  '/pages/writer',
  '/pages/ai-tools',
  '/pages/about-me'


])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})
/*

    { name: 'AI YouTube', href: '/pages/ai-youtube' },
    { name: 'Presentation', href: '/pages/presentation' },
    { name: 'AI PDF', href: '/pages/ai-pdf' },
    { name: 'Study', href: '/pages/study' },
    { name: 'Writer', href: '/pages/writer' },
    { name: 'AI Tools', href: '/pages/ai-tools' },
    { name: 'Pricing', href: '/pages/about-me' },

*/
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}