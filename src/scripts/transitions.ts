let lastPhotoId = ''

/**
 * Save the ID of the last photo we visited. This is used to set the
 * transition name of the photo we're transitioning from in astro:after-swap.
 */
function saveLastPhotoId() {
  const pathname = window.location.pathname
  const photoId = pathname.split('/').pop()
  lastPhotoId = photoId || ''
}

/**
 * Creates an IntersectionObserver that sets the transition name of
 * photos in the grid when they become visible.
 *
 * This improves the performance of the page transitions considerably
 * when there is a large number of photos in the grid.
 */
document.addEventListener('astro:page-load', (e) => {
  saveLastPhotoId()

  const photos = document.querySelectorAll('.grid--large .grid__cell-img-inner')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLImageElement
        if (entry.intersectionRatio > 0) {
          // @ts-ignore - viewTransitionName is not in the spec yet
          target.style.viewTransitionName = target.id
        } else {
          // @ts-ignore - viewTransitionName is not in the spec yet
          target.style.viewTransitionName = 'none'
        }
      })
    },
    { threshold: 0 }
  )

  // Observe each photo in the grid. When a photo is visible, set its
  // transition name. Otherwise, set it to "none".
  photos.forEach((photo) => {
    observer.observe(photo)
  })
})

/**
 * When navigating back to the home page, find the image we're transitioning
 * from and set its transition name.
 */
document.addEventListener('astro:after-swap', (e) => {
  if (!lastPhotoId) {
    return true
  }

  const photo = document.querySelector(
    '#photo-' + lastPhotoId
  ) as HTMLImageElement

  // If we find the photo we're transitioning from, set its transition name
  // and scroll it into view.
  if (photo) {
    // @ts-ignore - viewTransitionName is not in the spec yet
    photo.style.viewTransitionName = 'photo-' + lastPhotoId
    // @ts-ignore - scrollIntoViewIfNeeded is a Chrome-only method
    photo.scrollIntoViewIfNeeded
      ? // @ts-ignore - scrollIntoViewIfNeeded is a Chrome-only method
        photo.scrollIntoViewIfNeeded()
      : photo.scrollIntoView()
  }
})
