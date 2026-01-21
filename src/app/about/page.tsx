const About = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 3000);
  });
  return <div>About</div>;
};

export default About;
