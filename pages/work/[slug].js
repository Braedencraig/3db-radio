import { createClient } from "contentful";
import { PodcastInfo } from "../../components/PodcastInfo";

export default function PodcastDetails({ podcast }) {
  return (
    <div className="margin-top">
      <PodcastInfo podcast={podcast} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "podcast",
  });

  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const { items } = await client.getEntries({
    content_type: "podcast",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      podcast: items[0],
    },
    revalidate: 1,
  };
}
