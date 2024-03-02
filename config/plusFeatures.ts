import cloudIcon from '@/assets/icons/cloud.svg'
import starIcon from '@/assets/icons/star.svg'
import swatchesIcon from '@/assets/icons/swatches.svg'
import usersIcon from '@/assets/icons/users.svg'

export interface PlusFeature {
  title: string
  description: string
  icon: string
}

export const plusFeatures: PlusFeature[] = [
  {
    title: 'Extensive storage drivers',
    description: 'Store your files on Amazon S3 — or any compatible services such as DigitalOcean Spaces, Cloudflare R2, MinIO, etc. — and Dropbox.',
    icon: cloudIcon
  },
  {
    title: 'Individual libraries',
    description: 'Take the multi-user experience to the next level. Each user has their own music collection with songs, albums, and playlists catering to their unique tastes.',
    icon: starIcon
  },
  {
    title: 'Music collaboration',
    description: 'Share your music with friends and family by marking songs as public, or invite them to collaborate on your playlists.',
    icon: usersIcon
  },
  {
    title: '… And more to come!',
    description: 'More storage drivers, custom themes, SSO, proxy auth header, synchronized lyrics… Koel Plus has many great features planned!',
    icon: swatchesIcon
  }
]
