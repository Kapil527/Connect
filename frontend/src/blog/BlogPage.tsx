import { useState } from "react";
import axios from "axios";

export const BlogPage = () => {
  const [blogs, setBlogs] = useState({
    author: "",
    title: "",
    description: "",
    content: "",
    image: "",
    publishedAt: "",
  });

  const fetchData = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7f938f74881f402ea590642daa5c2bfc"
    );
    console.log(response.data.articles[0]);
    const { author, title, description, content, urlToImage, publishedAt } =
      response.data.articles[0];
    setBlogs({
      author,
      title,
      description,
      content,
      image: urlToImage,
      publishedAt,
    });
  };
  fetchData();
  const date = blogs.publishedAt.split("T");
  console.log(date);
  return (
    <div className="blog px-20 mt-16">
      <div className="title text-center">
        <h1 className="text-4xl font-bold">
          The Tele-ICU Revolution Is Upon Us: Here’s What to Know
        </h1>
      </div>
      <div className="author-info flex">
        <img src="/user-icon.png" alt="user-icon" />
        <div className="text">
          <h5>AMD Telemedicine</h5>
          <p className="date">Jan 16, 2024 </p>
        </div>
      </div>
      <div className="image">
        <img src="/mental_health.jpg" alt="image" className="mx-auto" />
      </div>
      <div className="content">
        <p className="">
          Telemedicine experienced a boom after the pandemic, with approximately
          37% of US adults relying on the service for regular healthcare.
          Perhaps most critical is the rise of the telemedicine intensive care
          unit (Tele-ICU, also known as virtual ICU), which uses secure audio
          and video to provide remote care to critically ill patients. Studies
          show that Tele-ICU leads to lower mortality rates, especially in
          medium- and high-risk patients. This growing industry use of connected
          technologies can be pivotal in providing healthcare in rural areas,
          where hospitals (and particularly specialists) aren’t always available
          and accessible. This became a bigger problem as the industry
          experienced an unprecedented intensivist shortage in the aftermath of
          the pandemic. Tele-ICU provides hospital partners with round-the-clock
          expertise for even the toughest cases to provide care without removing
          the patient from the support group in their community. Simply put,
          Tele-ICU programs raise the level of patient care, particularly in
          underserved areas. Global Rise of the Virtual ICU Virtual ICUs are
          becoming more prominent across the globe, especially in “tier 2” and
          “tier 3” cities where fewer doctors volunteer to work. Tier 2/3 cities
          are more rural areas outside the major metro, and this makes it harder
          to find skilled medical professionals to support patients. Initially,
          virtual ICUs are typically established by larger, well-known hospitals
          and healthcare systems that have the required expertise and high
          reputation. Knowing they can receive care from a trusted resource
          helps put patients at ease during their most harrowing medical
          emergencies. However, the benefits and gains are immense to the
          smaller hospitals and facilities that don’t have the resources or
          staff in place to support the needs of their critical care patients.
          Time is imperative in critical care situations, as a patient’s
          condition worsens and immediate attention is needed. Tele-ICUs have
          advanced technology that integrates various medical tools (like
          syringes, infusion pumps, and more) through software and IoT sensors.
          They transmit real-time data to allow for remote ICU monitoring of
          patients’ vital stats while ensuring they receive the necessary care.
          The ideal solutions are those that are agnostic and can be
          interoperable with various medical equipment while also enabling data
          exchange with hospital information systems (HIS). They also provide
          outsourced IT and monitoring services while integrating artificial
          intelligence (AI) to improve data analysis. The need for these vital
          services is growing, and data visibility is the key to continued
          adoption and growth. The Importance of Data in Healthcare Data
          visibility is essential to the success of Tele-ICU implementation.
          This data facilitates accurate decision-making while enabling
          immediate intervention in the case of emergencies. It also helps with
          predictive analytics, which improves patient outcomes by forecasting
          future potential issues and improving overall patient outcomes.
          Technology allows for a collaborative care environment, with seamless
          communication without geographical restrictions. Imagine accessing an
          experienced oncologist or cardiologist to diagnose potential cancer or
          heart disease without forcing a patient to travel hundreds of miles
          outside of their home community. This talent diversity across all
          geographic boundaries lays the foundation for more qualitative patient
          care, allowing proactive data analysis and care management while
          significantly improving the quality of care. It’s no wonder more
          healthcare providers are relying on Tele-ICU and remote ICU monitoring
          to raise the bar on medical care while educating both staff and
          patients in a better way moving forward. Attention: Critical Access
          Hospitals with as few as 2 ICU beds! There is now an affordable and
          scalable solution for you to address your rural patient population.
          Find out more Transforming Rural Healthcare As technology continues to
          advance, telehealth presents an exciting frontier in healthcare,
          especially for underserved communities. Integration with open and
          vendor-neutral platforms stands at the forefront of this
          transformation. The Patient-Centric Integrated Clinical Environment
          (ICE) represents a significant leap in ensuring seamless communication
          between medical devices and IT systems, marking a new era of
          interoperability in healthcare technology. This integration is not
          just about devices talking to each other; it’s about creating a
          cohesive, fluent system that enhances the delivery and efficiency of
          care. AI and machine learning are also set to play a pivotal role in
          Tele-ICU’s evolution. These technologies will provide predictive
          analytics for patient care, making it possible to anticipate patient
          needs and potential complications before they become critical. This
          could mean a significant improvement in patient outcomes, especially
          in critical care scenarios where every second counts. Additionally,
          enhanced data integration promises a unified patient view,
          consolidating all patient information into a comprehensive profile.
          This integration will equip healthcare providers with a more holistic
          understanding of a patient’s health status, leading to more informed
          and effective treatment plans. Tele-ICU is a growing sector, allowing
          hospitals and healthcare systems to provide more holistic and
          specialized services to improve patient outcomes. This is especially
          true in less urban areas, where a smaller, more spread-out population
          can lead to difficulties. If you are in a critical access or rural
          hospital struggling to get access to intensivists, there are now
          affordable virtual care solutions that can accommodate ICUs with as
          little as two beds. Our solution is revenue-generating versus being a
          cost center and scalable to accommodate varying bed sizes and patient
          loads. By partnering with telemedicine experts like AMD and their ICU
          technology partner DocBox, healthcare providers can work
          collaboratively to raise the overall quality of life throughout their
          communities.
        </p>
      </div>
    </div>
  );
};
