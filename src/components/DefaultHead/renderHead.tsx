interface RenderHeadInterface {
  titleComplete: string
  image: string
  description: string
  site_name?: string
  type?: string
}

export const RenderHead: React.FC<RenderHeadInterface> = ({
  titleComplete,
  image,
  description,
  site_name = 'João Augusto',
  type = 'article',
}) => {
  return (
    <>
      <meta property="og:title" content={titleComplete} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:type" content={type} />

      <meta property="og:image:width" content="1484" />
      <meta property="og:image:height" content="1200" />

      <meta prefix="og: http://ogp.me/ns#" property="og:title" content={titleComplete} />
      <meta prefix="og: http://ogp.me/ns#" property="og:image" content={image} />
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content={description} />
      <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content={site_name} />
      <meta prefix="og: http://ogp.me/ns#" property="og:type" content={type} />

      <meta prefix="og: http://ogp.me/ns#" property="og:image:width" content="1484" />
      <meta prefix="og: http://ogp.me/ns#" property="og:image:height" content="1200" />

      <meta prefix="og: http://ogp.me/ns#" name="twitter:card" content="summary_large_image" />
    </>
  )
}
