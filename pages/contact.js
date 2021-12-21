import { createClient } from "contentful";
import { DotMagic } from "../components/DotMagic";

const Contact = ({ contactInfo }) => {
  return (
    <>
      <DotMagic num={12} positionArr={[
          {top: '8%', right: '26%'},
          {top: '16%', left: '22%'},
          {top: '24%', right: '18%'},
          {top: '32%', left: '33%'},
          {top: '40%', left: '25%'},
          {top: '48%', left: '4%'},
          {top: '56%', right: '41%'},
          {top: '64%', right: '31%'},
          {top: '72%', right: '6%'},
          {top: '80%', left: '20%'},
          {top: '88%', right: '26%'},
          {top: '96%', right: '18%'},
        ]}  />
      <div className="contact contact-page">
        Get in touch <a href="mailto:">{contactInfo[0].fields.email}</a>
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    props: {
      contactInfo: data.items.filter(
        (item) => item.sys.contentType.sys.id === "contact"
      ),
    },
    revalidate: 1,
  };
}
