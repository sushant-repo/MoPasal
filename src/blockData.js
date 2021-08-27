import { Link } from "react-router-dom";

const blocks = [
  {
    featuredPeople: {
      title: "featured members",
      description: <Link to="#">How do I get featured?</Link>,
    },
    features: {
      title: "what makes us different?",
      description: "",
    },
    aboutUs: {
      title: "curious to know more about MoPasal?",
      description:
        "MoPasal connects. Click on the button below to see what MoPasal is all about.",
    },
    process: {
      title: "How to join the movement?",
      description:
        "Thinking of joining us but are unaware of the procedure? Here are options you can choose to join us.",
    },
    network: {
      title: "Our Network",
      description: "",
    },
  },
];

export function getBlockData() {
  return blocks;
}
