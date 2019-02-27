import React from 'react'

export default function UnsplashAttributionLink({baseUrl = 'https://unsplash.com/', title = 'Unsplash', className="text-success"}) {
    const referralPrefix = '?utm_source=food_examiner&utm_medium=referral';
  return (
    <a href={baseUrl + referralPrefix} target="_blank" rel="noopener noreferrer" className={className}>{title}</a>
  )
}
